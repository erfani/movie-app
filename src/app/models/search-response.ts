import { SearchResultItemModel } from "./search-result-item"

export interface SearchResponseModel {
    Response: string;
    Search: SearchResultItemModel[];
    totalResults: string;
}