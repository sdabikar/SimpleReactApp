import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      bookList: ''
    }
  }

  async componentDidMount(){
    const url="http://localhost:8080/welcome";
    const response = await fetch(url);
    const data = await response.json();
    console.log("SEXYYYY...."+data)
   this.setState({bookList: data.Course , loading:true});
  }
  
  render() {
         const data = this.state.bookList;
    return (  
 
        //<ownComponent props= {this.state.bookList}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Backend COnnection App Demo</h1>
          <p>{data}</p>
        </header>
      </div>
    
    );
  }
}

export default App;
