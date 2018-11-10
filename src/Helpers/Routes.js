import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom"
import * as firebase from "firebase";
import Auth from "../Containers/Auth/Auth";
import { Loader, PageLoader } from "./Loader";
import Store from "../Store/Store";



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


const PublicRoute = ({ component: Component, ...rest }) => {
    const ComponentWithLoader = PageLoader(Component)
    return <Route {...rest} render={(props) => <ComponentWithLoader {...props} />} />
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
            checked: false
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
        // console.log(auth, checked);

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <PrivateRoute auth={auth} checked={checked} path="/" exact component={Me} />
                        <PublicRoute component={Auth} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routes


