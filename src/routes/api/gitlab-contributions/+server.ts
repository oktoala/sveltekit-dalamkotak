import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const GET = (async ({ url }) => {
  const github = {};
  return json(github);
}) satisfies RequestHandler;