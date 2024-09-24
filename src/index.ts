import axios from "axios";

import type { Args, Response } from "./types.ts";

export async function main(args: Args): Promise<Response> {
    console.log(args);
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1",
        );
        return {
            body: res.data,
            statusCode: 200,
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
        };
    }
}
