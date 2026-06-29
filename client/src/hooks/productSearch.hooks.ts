import { useMemo, useState } from "react";
import { products } from "../data/products";

const useProductSearch = () => {
    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");

    const activeQuery = submittedQuery || query;
    const normalizedQuery = activeQuery.trim().toLowerCase();

    const filteredProducts = useMemo(() => {
        if (!normalizedQuery) {
            return [];
        }

        return products
            .filter((product) => {
                const searchableText = [
                    product.name,
                    product.category,
                    product.description,
                    product.price.toString(),
                ]
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(normalizedQuery);
            })
            .slice(0, 4);
    }, [normalizedQuery]);

    const submitSearch = (searchQuery = query) => {
        const nextQuery = searchQuery.trim();

        if (!nextQuery) {
            return;
        }

        setQuery(nextQuery);
        setSubmittedQuery(nextQuery);
    };

    const updateQuery = (nextQuery: string) => {
        setQuery(nextQuery);
        setSubmittedQuery("");
    };

    return {
        query,
        submittedQuery,
        filteredProducts,
        submitSearch,
        updateQuery,
    };
};

export default useProductSearch;
