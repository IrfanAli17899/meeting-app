import React, { Component } from "react";

const Loader = (props) => {
    return (
        <div id="PageLoader">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

const PageLoader = (Componenet) => {
    return class fakeLoader extends Component {
        constructor() {
            super();
            this.state = {
                isLoading: true
            }

        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 2000);
        }
        render() {
            const { isLoading } = this.state;
            return (
                isLoading ? <Loader /> : <Componenet />
            )
        }
    }
}
export { Loader, PageLoader };