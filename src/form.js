import React from "react";

export default class Form extends React.Component{
    state={
        input : ''
    }

    handleChange=(e)=>{
        this.setState({
            input : e.target.value
        })
    }

    handleSubmit=()=>{
        this.props.getUsername(this.state.input)
    }

    render(){
        let {input} = this.state;
        return (
            <center>
            <div className="input-group mb-3 mt-5 w-25" style={{}}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                value={input}
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handleChange}
              />
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
            </center>
          );
    }
}


