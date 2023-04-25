import { useEffect, useState } from "react"

export const useSearch = <T>(elem: T[], value: string, key: keyof T): T[] => {
    const [searchVal, setSearchVal] = useState<T[]>([])

    useEffect(() => {
        const id = setTimeout(() => {
            if (!value) {
                return;
            }
            const findVal = elem.filter(
                element => 
                {
                    return (element[key] as string).includes(value)
                }
            )
            setSearchVal(findVal)
        }, 1000)
        return () => clearTimeout(id);
    }, [elem, value, key])

    return searchVal
}
