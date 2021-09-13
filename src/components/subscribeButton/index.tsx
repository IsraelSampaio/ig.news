import { SubscribeButtonProps } from "./SubscribeButton.interface";

import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

export function SubscribeButton({ productId }: SubscribeButtonProps) {
  return (
    <button type="button" className={cn("subscribe-button")}>
      Subscribe now
    </button>
  );
}
