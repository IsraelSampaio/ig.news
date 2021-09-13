import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={cn("sign-in-button")}>
      <FaGithub color="#04d361" />
      Israel Sampaio
      <FiX color="#737380" className={cn("sign-in-button__close-icon")} />
    </button>
  ) : (
    <button type="button" className={cn("sign-in-button")}>
      <FaGithub color="#ebA417" />
      Sign in with github
    </button>
  );
}
