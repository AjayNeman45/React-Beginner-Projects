import React , {useState, createContext} from 'react';

export const GlobalContext = createContext()

const GlobalStorage = ({children}) => {
    const [transactions, setTransactions] = useState([])

    return(
        <GlobalContext.Provider value={[transactions,setTransactions]}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalStorage;