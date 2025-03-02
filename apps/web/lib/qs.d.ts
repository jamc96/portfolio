// Utility types for QueryString query patterns
type QueryStringField = string; // e.g., "title", "content"
type QueryStringSort = `${QueryStringField}:${'asc' | 'desc'}`; // e.g., "createdAt:desc"

// QueryString conditional operators from the image
type QueryStringOperator =
    | '$eq' // Equal
    | '$eqi' // Equal (case-insensitive)
    | '$ne' // Not equal
    | '$nei' // Not equal (case-insensitive)
    | '$lt' // Less than
    | '$lte' // Less than or equal to
    | '$gt' // Greater than
    | '$gte' // Greater than or equal to
    | '$in' // Included in an array
    | '$notIn' // Not included in an array
    | '$contains' // Contains
    | '$notContains' // Does not contain
    | '$containsi' // Contains (case-insensitive)
    | '$notContainsi' // Does not contain (case-insensitive)
    | '$null' // Is null
    | '$notNull' // Is not null
    | '$between' // Is between
    | '$startsWith' // Starts with
    | '$startsWithi' // Starts with (case-insensitive)
    | '$endsWith' // Ends with
    | '$endsWithi' // Ends with (case-insensitive)
    | '$or' // Joins filters in an "or" expression
    | '$and' // Joins filters in an "and" expression
    | '$not'; // Joins filters in a "not" expression

// Filter structure: e.g., { "title": { "$eq": "My Post" } }
interface QueryStringFilter {
    [key: string]: QueryStringFilter | { [operator in QueryStringOperator]?: string | number | boolean | string[] | number[] | [number, number] };
}

// Populate structure: e.g., { "hero": { "fields": ["label"], "populate": {...} } }
interface QueryStringPopulate {
    [key: string]: {
        fields?: QueryStringField[];
        populate?: QueryStringPopulate;
        filters?: QueryStringFilter;
        sort?: QueryStringSort[];
    };
}

// Pagination structure: e.g., { "page": 1, "pageSize": 10 }
interface QueryStringPagination {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
}

// Main query interface for QueryString
interface QueryStringQuery {
    filters?: QueryStringFilter;
    populate?: QueryStringPopulate;
    fields?: QueryStringField[];
    sort?: QueryStringSort[];
    pagination?: QueryStringPagination;
}