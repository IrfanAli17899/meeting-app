function AuthReducer(state = { user: null, checked: null }, action) {
    switch (action.type) {
        case "Authentication":
            console.log("action", action);

            return { ...state, user: action.user, checked: action.checked }
        // return { ...state, user: action.payload.user, checked: action.payload.checked }

        default:
            return state
    }
}
export default AuthReducer;