import Image from "next/image";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image width={108} height={30} src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
