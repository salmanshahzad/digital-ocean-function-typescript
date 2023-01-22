export interface Args {
  http: {
    headers: Headers;
    method: Method;
    path: string;
  };
  [field: string]: unknown;
}

export type Headers = Record<string, string>;

export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS"
  | "HEAD";

export interface Response {
  body?: unknown;
  headers?: Headers;
  statusCode?: number;
}
