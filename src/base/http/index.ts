import axios from "axios";
import { FindAPIBaseURL } from "../config";

type Options = {
    Timeout: number;
  };
  
export const HTTPClientNonAuth = (opts: Options = { Timeout: 3000 }) => {
    const client = axios.create({
      baseURL: FindAPIBaseURL(),
      headers: {
        Accept: "application/json",
      },
      timeout: opts.Timeout,
    });
  
    return client;
  };