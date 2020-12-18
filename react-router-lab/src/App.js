import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Stock from './Stock';
import { Switch, Route, Link } from 'react-router-dom';
import stocksData from './data/stock-data.json';

class App extends Component {
  state = {
    stocks: stocksData,
  };

  render() {
    return (
        <div>
          <nav>
            <Link to="/stocks">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/stocks" render={() => <Dashboard stocks={this.state.stocks}/>}/>
              <Route path="/about" />
              <Route path="/stocks/:symbol" render={(routerProps) => <Stock {...routerProps} stocks={this.state.stocks} />}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
