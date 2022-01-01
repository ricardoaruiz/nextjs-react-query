import { QueryKey, useQueryClient } from "react-query";
import { QueryFilters } from "react-query/types/core/utils";

export const useReactQueryUtils = () => {

    const queryClient = useQueryClient()

    /**
     * 
     * @param key 
     * @param filters 
     */
    const removeQueries = (key: QueryKey, filters?: QueryFilters) => {
       queryClient.removeQueries(key, filters)
    }

    /**
     * 
     * @param key 
     */
    const removeQuery = (key: QueryKey) => {
        queryClient.removeQueries(key, { exact: false })
    }

    return {
        queryClient,
        removeQuery,
        removeQueries
    }

}