import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { fauna, q } from "../../../services/faunadb.service";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async signIn({ email }) {
      //TODO: implementar validação caso o usuário não tenha email publico

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email)))
            ),
            q.Create(q.Collection("users"), { data: { email } }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email)))
          )
        );

        return true; //Retorna true caso deu tudo certo com login
      } catch (err) {
        console.log(err);

        return false; //Retorna false caso deu error com login
      }
    },
  },
});
