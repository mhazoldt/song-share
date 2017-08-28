import React, { Component } from 'react';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import '../styles/App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      shouldUpdate: false
    }
  }

  updatePlayList() {
    console.log("--update play list called--")
    this.setState({
      shouldUpdate: !(this.state.shouldUpdate)
    })
    console.log(this.state.shouldUpdate)
  }


  render() {
    return (
      <div className="App">
        <NavBar updatePlayList={this.updatePlayList.bind(this)} toggleState={this.state.shouldUpdate} />
        <PlayList updatePlayList={this.updatePlayList.bind(this)} toggleState={this.state.shouldUpdate} />
        <PlayListForm updatePlayList={this.updatePlayList.bind(this)} toggleState={this.state.shouldUpdate} />
      </div>
    );
  }
}

export default App;
