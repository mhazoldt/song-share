import React, { Component } from 'react';
import '../styles/App.css';
import PlayListItem from './PlayListItem.js';

class PlayList extends Component {
    constructor(props) {
        super()
        this.state = {
          songs: []  
        }

        this.songData = []
    }

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.songData = data
            this.setState({songs: data})
            console.log("song data fetch")
            console.log(data)
          })
    }

    componentWillReceiveProps(props) {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.songData = data
            this.setState({songs: data})
            console.log("song data fetch")
            console.log(data)
          })
    }

    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }

    render() {
        console.log("playList render happened")
        console.log(this.state.songs)
        console.log("^^playList songs^^")

        return (
            <div className="row col-12 mx-auto" id="songCard">
             <PlayListItem songData={this.state.songs} />
            </div>
        );
    }
}

export default PlayList;