export interface ResponseData<T> {
    page: number
    total_pages: number
    total_results: number
    results: T
}

export interface QueryOptions {
    retry?: boolean
    cacheTime?: number
    staleTime?: number
    enabled?: boolean
    refetchInterval?: number | false
    refetchOnMount?: boolean | 'always'
    refetchOnWindowFocus?: boolean | 'always'
}