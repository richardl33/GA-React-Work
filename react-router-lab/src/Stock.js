import React, { Component } from 'react';

class Stock extends Component {
   state = {
      selectedStock: this.props.match.params.symbol,
      apiStock: {},
   };

   componentDidMount() {
      let url = `https://api.iextrading.com/1.0/tops?symbols=${this.state.selectedStock}`;
      fetch(url)
      .then((response) => response.json())
      .then((data) => 
         this.setState({
            apiStock: data,
         }, () => {console.log(this.state.apiStock)})
      )
   }
   
   render() {
      let stock = this.props.stocks.find((stock) => stock.symbol === this.props.match.params.symbol)
      console.log(this.componentDidMount);
      return (
         <div>{this.selectedStock}</div>
      );
   }
}

export default Stock;