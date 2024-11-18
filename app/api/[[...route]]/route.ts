import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);
3;

// app.get("/hello", clerkMiddleware(), (c) => {
//   const auth = getAuth(c);

//   if (!auth?.userId) {
//     return c.json({ error: "Unauthorized" });
//   }
//   return c.json({
//     message: "Hello World!",
//     userId: auth.userId,
//   });
// });
