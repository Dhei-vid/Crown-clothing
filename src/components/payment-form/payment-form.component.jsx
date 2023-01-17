import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/cart.selectors'
import { selectCurrentUser } from '../../store/user/user.selector'

import { button_type_classes } from '../button/button-component'
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton
} from './payment-form.styles'

const PaymentForm = () => {
  // used to make request in strip format
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      // Multipying it by 100 (to account for the cent value) is how stripe expects it
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json())

    const {
      paymentIntent: { client_secret }
    } = response

    // confirming payment from client
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          button_type={button_type_classes.inverted}
        >
          Pay Now!
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
