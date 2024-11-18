import { accounts } from "@/db/schema";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ accounts: [] });
});

export default app;
