function AuthReducer(state = { user: null, checked: null, NewUser:{} }, action) {
    switch (action.type) {
        case "Authentication":
            return { ...state, user: action.user, checked: action.checked }
        case "NewUser":
            return { ...state, NewUser: action.NewUser }
            case "UpdateUserdata":
            const {type,...rest} = action;
            console.log(rest);
            
            
            return {...state,}
        default:
            return state
    }
}
export default AuthReducer;