import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { SubscribeButton } from "../components/subscribeButton";
import { HomeProps } from "../interfaces/Home.interface";
import { formatterNumberToCurrency } from "../helpers/formatterNumberToCurrency.helper";
import { stripe } from "../services/stripe.service";

import classnames from "classnames/bind";
import styles from "../styles/modules/home.module.scss";

const cn = classnames.bind(styles);

export default function Home({ amount, productId }: HomeProps) {
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
            <span>for {amount} month</span>
          </p>

          <SubscribeButton productId={productId} />
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JZFeyBPPqlVRHU8V9u8T2kG");

  return {
    props: {
      productId: price.product,
      amount: formatterNumberToCurrency(price.unit_amount / 100),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
