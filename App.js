import React, { Component } from 'react';
import logo from './Trump_Coin.jpg';
import './App.css';
import AccountList from './AccountList.js';
// import { accounts } from './PremadeAccounts.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        balance: '',
        name: '',
    }
  }
  
  render() { 
    // const { accounts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Financial Tracker</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <AccountList />
        </header>
      </div>
    );
  }
}

export default App;
