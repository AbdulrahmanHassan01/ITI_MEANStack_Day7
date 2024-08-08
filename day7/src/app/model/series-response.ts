import { TVShow } from "../components/tv-list/TvShow";

export interface SeriesResponse {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
}