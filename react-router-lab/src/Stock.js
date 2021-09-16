import React, { Component } from 'react';

class Stock extends Component {
   state = {
      apiStock: {},
   };

   // componentDidMount() {
   //    let url = `https://api.iextrading.com/1.0/tops?symbols=${this.props.match.params.symbol}`;
   //    fetch(url)
   //    .then((response) => response.json())
   //    .then((data) => 
   //       this.setState({
   //          apiStock: data[0],
   //       }, () => console.log(data))
   //    )
   // }

   componentDidMount = async () => {
      try {
         let url = `https://api.iextrading.com/1.0/tops?symbols=${this.props.match.params.symbol}`;
         const response = await fetch(url);
         const data = await response.json();
         if (data.length === 0) {
            throw new Error('NO Data!?!?');
         }
         this.setState({
            apiStock: data[0],
         })
      } catch (error) {
         alert(error);
         // console.log(error);
      }
   }
   
   render() {
      return (
         <div>
            <h1>{this.state.apiStock.symbol}</h1>
            <ul>
               <li>Last Sale Price: {this.state.apiStock.lastSalePrice}</li>
               <li>Security Type: {this.state.apiStock.securityType}</li>
            </ul>
         </div>
      );
   }
}

export default Stock;