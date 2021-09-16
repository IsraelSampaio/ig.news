import { useState } from "react";
import { useSession, signIn } from "next-auth/client";

import { FaSpinner } from "react-icons/fa";

import { SubscribeButtonProps } from "./SubscribeButton.interface";

import { api } from "../../services/api.service";
import { getStripeJs } from "../../services/stripe-js.service";

import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

export function SubscribeButton({ productId }: SubscribeButtonProps) {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    if (!session) {
      signIn("github"); //TODO: criar modal para mostrar para usuário que ele está fazendo login no sistema

      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      className={cn("subscribe-button")}
      onClick={handleSubscribe}
    >
      {loading ? (
        <FaSpinner className={cn("subscribe-button__icon-loading")} />
      ) : (
        "Subscribe now"
      )}
    </button>
  );
}
