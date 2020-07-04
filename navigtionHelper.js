import { NavigationActions } from "react-navigation"

let navigator

export const navigation=(nav)=>{
    navigator=nav
}

export const navigationn=(routeName,params)=>{

    navigator.dispatch(
        NavigationActions.navigate({
            routeName,params
        })
    )

}