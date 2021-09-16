import faunadb, { query } from "faunadb";

export const fauna = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
});

export const q = query;
