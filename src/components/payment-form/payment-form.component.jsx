import { CardElement } from '@stripe/react-stripe-js'

import Button, { button_type_classes } from '../button/button-component'

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button button_type={button_type_classes.inverted}> Pay Now! </Button>
    </div>
  )
}

export default PaymentForm
