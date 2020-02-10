import React from 'react';
import NavBar from './navbar'
import './App.css';
import Form from './form';
import Profile from './profile'

class App extends React.Component{
  state={
    username : ''
  }

  getUsername = (username) =>{
    this.setState({
      username : username
    })
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Form getUsername={this.getUsername}/>
        {this.state.username? <Profile username={this.state.username}/>: null}
      </div>
    );
  }
}

export default App;