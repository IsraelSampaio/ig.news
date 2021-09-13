import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

export function SubscribeButton() {
  return (
    <button type="button" className={cn("subscribe-button")}>
      Subscribe now
    </button>
  );
}
