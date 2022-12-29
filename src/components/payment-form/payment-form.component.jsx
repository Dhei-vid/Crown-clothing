import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button, { button_type_classes } from '../button/button-component'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'

const PaymentForm = () => {
  // used to make request in strip format
  const stripe = useStripe()

  const elements = useElements()

  const paymentHandler = async e => {
    e.preventDefault()

    if (!stripe || !elements) return

    // we need to make a fetch request to the backend to create a payment intent (something stripe uses to know that a payment is coming)
  }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2> Credit Card Payment</h2>
        <CardElement />
        <Button button_type={button_type_classes.inverted}> Pay Now! </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
