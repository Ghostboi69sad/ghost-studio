import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface PlanType {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId: string;
}

const plans: PlanType[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19,
    interval: 'month',
    stripePriceId: 'price_monthly', // Replace with your Stripe Price ID
    features: [
      'Access to all courses',
      'Monthly live sessions',
      'Community access',
      'Project feedback'
    ]
  },
  {
    id: 'yearly',
    name: 'Annual Plan',
    price: 190,
    interval: 'year',
    stripePriceId: 'price_yearly', // Replace with your Stripe Price ID
    features: [
      'All Monthly Plan features',
      'Priority support',
      'Downloadable resources',
      'Certificate of completion',
      '2 months free'
    ]
  }
];

const PricingPlan: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubscribe = async (priceId: string) => {
    setLoading(true);
    setError("");

    try {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          userId: user.uid,
          mode: 'subscription',
          domain: window.location.origin
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      
      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process subscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="overflow-hidden bg__purple">
        <Navbar />
        <section className="position-relative">
          <div className="container">
            <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5 text-center mb-5">
              Choose Your Plan
            </h1>
            {error && (
              <div className="alert alert-danger text-center mb-4">
                {error}
              </div>
            )}
            <div className="row justify-content-center">
              {plans.map((plan) => (
                <div key={plan.id} className="col-md-6 col-lg-5 mb-4">
                  <div className="wrapper__card-pricing bg__white p-4 rounded shadow">
                    <h3 className="bold font__size--28 text__28-1024 mb-3">
                      {plan.name}
                    </h3>
                    <h2 className="bold font__size--42 text__40-1024 mb-4">
                      ${plan.price}
                      <span className="font__size--20 text__20-1024">
                        /{plan.interval}
                      </span>
                    </h2>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check mr-2 color__purple"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn__purple color__white w-100"
                      onClick={() => handleSubscribe(plan.stripePriceId)}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Choose Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default PricingPlan; 