import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import MyNewComponent from './components/MyNewComponent'
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";

class App extends Component {

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.signOut();
    }


  constructor(props){
    super(props)
    this.state = {"initValue":"hello there"}
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    if(!isAuthenticated()){
      return <div>
          <Button
              id="qsLoginBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
          >
              Log In
          </Button>
            </div>
    }

    return (
      <div className="App">
          <Button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
          >
              Log Out
          </Button>
        <MyNewComponent initValue={this.state.initValue}/>
      </div>
    );
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
