import React, { Component } from "react";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom"
import history from "./history"
import * as firebase from "firebase";
import Store from "../Store/Store";
import { Loader, PageLoader } from "./Loader";
import Auth from "../Containers/Auth/Auth";
import NewUser from "../Containers/NewUser/NewUser";



const PrivateRoute = ({ component: Component, auth, checked, ...rest }) => {
    const ComponentWithLoader = PageLoader(Component)

    return (
        <Route
            {...rest}
            render={(props) => checked ? auth
                ? <ComponentWithLoader {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                /> : <Loader />
            }
        />
    )
}

// const OnceRoute = ({component: Component, auth, checked, ...rest})=>{
//     const ComponentWithLoader = PageLoader(Component)

//     return (
//         <Route
//             {...rest}
//             render={(props) => checked ? auth
//                 ? <ComponentWithLoader {...props} />
//                 : <Redirect
//                     to={{
//                         pathname: '/login',
//                         state: { from: props.location }
//                     }}
//                 /> : <Loader />
//             }
//         />
//     )
// }

const PublicRoute = ({ component: Component, ...rest }) => {
    const ComponentWithLoader = PageLoader(Component)
    
    return <Route {...rest}  render={(props) => <ComponentWithLoader {...props} />} />
}

const Me = (props) => {

    return (<div><Link to="/login">Click</Link>

        <h1 className="animated fadeInRight">Hello-Friends</h1></div>)
}



class Routes extends Component {
    constructor() {
        super();
        this.state = {
            auth: false,
            checked: false,
            memberChecked:false,
            member:false
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                auth: user ? true : false,
                checked: true
            }, () => {
                return Store.dispatch({
                    type: "Authentication",
                    user: user,
                    checked: true
                })
            })

        })

    }
    render() {
        const { auth, checked } = this.state;

        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <PrivateRoute auth={auth} checked={checked} path="/" exact component={Me} />
                        
                        <PublicRoute path="/login" component={Auth} />
                        <PublicRoute path="/NewUser" component={NewUser} />
                        {/* <PublicRoute path="/Map" component={GoogleMap} /> */}

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes


