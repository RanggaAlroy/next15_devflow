import { ActionResponse } from "@/types/global";

import logger from "../logger";
import handleError from "./error";
import { RequestError } from "../http-error";
import dbConnect from "../mongoose";

interface FecthOptions extends RequestInit {
  timeout?: number;
}

function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export async function fetchHandler<T>(url: string, options: FecthOptions = {} ) : Promise<ActionResponse<T>> {
    const { timeout = 5000, headers: customHeaders = {}, ...restOptions } = options;

    const controller = new AbortController();

    const id = setTimeout(() => controller.abort(), timeout);

    const defaultHeaders: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const headers: HeadersInit = {
        ...defaultHeaders, 
        ...customHeaders
    }
    const config: RequestInit = {
        ...restOptions,
        headers,
        signal: controller.signal,
    };

    try {
        await dbConnect();

        const response = await fetch(url, config);
        clearTimeout(id);
        if(!response.ok) {
            throw new RequestError(response.status, `HTTP Error: ${response.statusText}`);
        }

        return await response.json();
        
    } catch (err) {
        const error = isError(err) ? err : new Error(String(err));
        if(error.name === "AbortError") {
            logger.warn(`Request to ${url} timed out`);
    } else {
        logger.error({ err }, `Error fetching ${url} ${error.message}`);
    }

    return handleError(error) as ActionResponse<T>;
    }

}