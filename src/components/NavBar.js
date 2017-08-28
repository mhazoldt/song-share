import React, { Component } from 'react';
import '../styles/App.css';

class NavBar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">PlayList</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.updatePlayList} >Update</button>
        </div>
      </nav>
    );
  }
}

export default NavBar;