import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritoColor: "blue"};
    }

    static getDerivedStateFromProps(props, state) {
        return {favoritoColor: props.favCol}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritoColor: "green"})
        }, 1000)
    }

    render() {
        return (
            <h1>Mi color favorito es: {this.state.favoritoColor}</h1>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'));