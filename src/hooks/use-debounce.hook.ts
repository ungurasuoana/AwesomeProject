import { useEffect, useState } from "react"

export const useDebounce = <T>(value:T, delay: number): T => {
    const [debVal, setDebVal] = useState<T>(value)

    useEffect(() => {
        const id = setTimeout(() => 
        setDebVal(value)
        , delay)
         return () => clearTimeout(id);
    },[value, delay])

    return debVal
}