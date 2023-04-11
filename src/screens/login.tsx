import { StackScreenProps } from "@react-navigation/stack"
import { LoginForm } from "../components/loginForm"
import { AppRouteProps, AppRoutes } from "../navigation/routes/app-routes"

export const Login = (props: StackScreenProps<AppRouteProps,AppRoutes.Login>) => {
    const onPress =  () => {
        console.debug('here')
        props.navigation.navigate(AppRoutes.Home, {title:'a'})
    }
return (
    <LoginForm onLogin={onPress}/>
)
}