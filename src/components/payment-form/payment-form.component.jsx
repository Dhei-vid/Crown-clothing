import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button, { button_type_classes } from '../button/button-component'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'

const PaymentForm = () => {
  // used to make request in strip format
  const stripe = useStripe()
  const elements = useElements()

  const paymentHandler = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 10000 })
    }).then(res => res.json())

    console.log(response)
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment</h2>
        <CardElement />
        <Button button_type={button_type_classes.inverted}> Pay Now! </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

// From 2022 to 2023
export default PaymentForm
