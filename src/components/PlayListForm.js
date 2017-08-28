import React, { Component } from 'react';
import '../styles/App.css';

class PlayListForm extends Component {
    constructor(props) {
        super()

        this.artist = null
        this.notes = null
        this.title = null
        this.username = null
        
    }

    handleArtist = (e) => {
        this.artist = e.target.value
        console.log(this.artist)
    }

    handleNotes = (e) => {
        this.notes = e.target.value
        console.log(this.notes)        
    }

    handleTitle = (e) => {
        this.title = e.target.value
        console.log(this.title)
    }

    handleUsername = (e) => {
        this.username = e.target.value
        console.log(this.username)        
    }

    addToList = (e) => {
        e.preventDefault();


        this.setState({userName: this.username, songTitle: this.title, songArtist: this.artist, songNotes: this.notes});
        let listItem = JSON.stringify({userName: this.username, songTitle: this.title, songArtist: this.artist, songNotes: this.notes});
        console.log("list item")
        console.log(listItem)

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    ).then(response => {
        console.log(response, "yay");
        this.props.updatePlayList()

    }).catch(err => {
        console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }



    render() {
        return (
            <div className="row col-12 mx-auto mb-4" onSubmit={this.addToList}>
                <form className="col-12">
                    Artist: <input type="text" className="col-8 m-2" onChange={this.handleArtist} /><br />
                    Notes: <input type="text" className="col-8 m-2" onChange={this.handleNotes} /><br />
                    Title: <input type="text" className="col-8 m-2" onChange={this.handleTitle} /><br />
                    Username: <input type="text" className="col-8 m-2" onChange={this.handleUsername} /><br />
                    <button type="submit" className="btn btn-primary">Submit</button><br />
                </form>
                
            </div>
        );
    }
}

export default PlayListForm;