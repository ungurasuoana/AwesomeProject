export const getBooks = async(page:number) => {
    const response = await fetch(`https://6448d351e7eb3378ca36d040.mockapi.io/api/movies?page=${page}&limit=10`)
    //console.log({response})
    const json = await response.json()
    //console.log({json})
    return json

}