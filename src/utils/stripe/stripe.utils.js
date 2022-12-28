// helps us know this is our stripe instance
import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe()
