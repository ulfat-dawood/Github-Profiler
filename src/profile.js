import React from 'react';

import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    user: {},
    repos : []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.username}`)
      .then(res => {
        let user = res.data;
        this.setState({ user })
        return axios.get(res.data.repos_url)
      })
      .then(res => this.setState({repos : res.data}))
      .catch(err => console.log(err))
    
    
    
}

componentDidUpdate(prevProps){
  if(prevProps.username != this.props.username){
    axios.get(`https://api.github.com/users/${this.props.username}`)
      .then(res => {
        let user = res.data;
        this.setState({ user })
        return axios.get(res.data.repos_url)
      })
      .then(res => this.setState({repos : res.data}))
      .catch(err => console.log(err))
  }
}
 


//Make it update when new user entered


  render() {
    let {repos} = this.state;
    return (
      <div>
      <div className="container shadow p-3 mb-5 rounded" style={{maxWidth:"400px", backgroundColor:"#eeeeee"}}>

        <div style={{display: "grid", justifyItems:"center", gridAutoFlow: "column", ridGap:"1em"}}>
          <div id="1">
            <img className=" shadow p-3 mb-1 bg-white rounded" src={this.state.user.avatar_url} width="200px"></img>
            <h2>{this.state.user.name}</h2>
          </div>

          <div style={{display: "grid", justifyItems:"center", gridAutoFlow: "column", marginTop:"50px", gridGap:"1em"}}>
          <div id="2" style={{textAlign:"center"}}>
            <h6>Followers</h6>
            <h4>{this.state.user.followers}</h4>
          </div>
          
          <div id="2" style={{textAlign:"center"}}>
            <h6>Following</h6>
            <h4>{this.state.user.following}</h4>
          </div>
          </div>

        </div>
      </div>

      <div className="container shadow p-3 mb-5 rounded" style={{maxWidth:"400px", backgroundColor:"#eeeeee"}}>
        Repos
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>


      </div>
    )
  }
}