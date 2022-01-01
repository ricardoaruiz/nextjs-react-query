import { QueryOptions } from "../types";

export const QUERY_OPTIONS_DEFAULT: QueryOptions = {
    retry: false,
    cacheTime: 5 * 60 * 1000, //5 minutes
    staleTime: 0,
    enabled: true,
    refetchInterval: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  }