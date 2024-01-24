import { createContext } from "react";


export const CurrencyContext = createContext({currency: '', setCurrency: (string: string)=>{}});
