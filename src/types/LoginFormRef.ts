export interface LoginFormRef {
    getData: () => {email: string, pass: string}
    setData: (email: string, pass:string) => void
}