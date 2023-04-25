export interface PersInfoRef {
    getData: () => {firstN: string | undefined, lastN: string}
    setColor: (color1: string, color2:string) => void
}