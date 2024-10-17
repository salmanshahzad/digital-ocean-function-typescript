import { Hono } from "hono";

import type { Args, Response } from "./types.ts";

const app = new Hono();
app.get("/", (c) => {
    return c.json(
        {
            message: `Hello ${c.req.header("x-forwarded-for") ?? "unknown IP"}`,
        },
        200,
    );
});
app.notFound((c) => {
    return c.json({ message: "Not Found" }, 404);
});
app.onError((err, c) => {
    return c.json({ message: err.message }, 500);
});

export async function main(args: Args): Promise<Response> {
    const res = await app.request(args.http.path, {
        headers: args.http.headers,
        method: args.http.method,
    });
    return {
        body: await res.json(),
        statusCode: res.status,
    };
}
