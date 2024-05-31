import { Children, createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [ travels, setTravels ] = useState([]);
    const [ searchParams, setSearchParams] = useState(
        {
            name: '',
            pageNumber: 0,
            pageSize: 10,
            sortBy: "id",
            sortDirection: "ASC"
        }
    )

    const updateSearchParams = (newParams) => {
        setSearchParams( (prevParams) => (
            {
                ...prevParams,
                ...newParams
            }
        ))
    }

    return (
        <SearchContext.Provider value={{ travels, setTravels, searchParams, updateSearchParams }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext };