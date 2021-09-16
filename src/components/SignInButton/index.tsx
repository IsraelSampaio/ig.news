import { signIn, signOut, useSession } from "next-auth/client";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={cn("sign-in-button")}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={cn("sign-in-button__close-icon")} />
    </button>
  ) : (
    <button
      type="button"
      className={cn("sign-in-button")}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#ebA417" />
      Sign in with github
    </button>
  );
}
