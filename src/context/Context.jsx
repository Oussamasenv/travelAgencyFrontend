import { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [ travels, setTravels ] = useState([]);
    const [ programs, setPrograms ] = useState([])
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ decodedToken, setDecodedToken ] = useState()


    const [ searchParams, setSearchParams] = useState(
        {
            name: '',
            destination: '',
            duration: 0,
            travelers: 0,
            type: '',
            pageNumber: 0,
            pageSize: 10,
            sortBy: "id",
            sortDirection: "DESC"
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

    useEffect(()=>{

        let token = localStorage.getItem("token");
        console.log(token)
    
        if (token) {
    
        let decodedTokenVar = jwtDecode(token);
        setDecodedToken(decodedTokenVar)
    
      }
    
      }, [])
    
      useEffect(()=>{
    
        if (decodedToken) {
    
          let expireAt = new Date( decodedToken.exp * 1000 );
          let nowDate = new Date();
    
          console.log(expireAt + '/' + nowDate)
    
          setAuthenticated(expireAt > nowDate);

        }
    
        
      }, [decodedToken])






    return (
        <SearchContext.Provider value={
            { 
                travels, setTravels, searchParams, updateSearchParams, programs, setPrograms, authenticated, setAuthenticated, decodedToken }
            }>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext };