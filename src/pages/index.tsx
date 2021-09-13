import Head from "next/head";
import Image from "next/image";

import classnames from "classnames/bind";
import styles from "../styles/modules/home.module.scss";

const cn = classnames.bind(styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={cn("content-container")}>
        <section className={cn("content-container__hero")}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about <br /> the <span>React</span> world
          </h1>

          <p>
            Get acess to all the publications <br />{" "}
            <span>for $9,90 month</span>
          </p>
        </section>

        <Image
          width={334}
          height={520}
          src="/images/avatar.svg"
          alt="Girl coding"
        />
      </main>
    </>
  );
}
