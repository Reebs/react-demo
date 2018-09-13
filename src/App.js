import React, {Component} from "react";
import "./App.css";
import MyNewComponent from "./components/MyNewComponent";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {"initValue": "hello there"}
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <div className="App">
                    <MyNewComponent initValue={this.state.initValue}/>
                </div>
            </Provider>
        );
    }
}

export default App;
