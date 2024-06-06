import { Children, createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [ travels, setTravels ] = useState([]);
    const [ programs, setPrograms ] = useState([])
    const [ searchParams, setSearchParams] = useState(
        {
            name: '',
            destination: '',
            duration: 0,
            travelers: 0,
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
        <SearchContext.Provider value={{ travels, setTravels, searchParams, updateSearchParams, programs, setPrograms }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext };