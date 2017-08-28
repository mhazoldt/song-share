import React, { Component } from 'react';
import '../styles/App.css';


class PlayListItem extends Component {
    constructor(props) {
        super()
        this.state = {
          songs: []  
        }
        this.songData = props.songData
        console.log("list item constructor")
        console.log(this.songData)
    }

    componentWillReceiveProps(props) {
        let songHtml = []
        let data = props.songData
        console.log("list item did mount")
        console.log(data)
        songHtml = data.map((song) => {
            return(
                <div className="col-3 p-2">
                    <div className="card h-100">
                        <div className="card-body">
                            <p>Artist: {song.songArtist}</p>
                            <p>Notes: {song.songNotes}</p>
                            <p>Title: {song.songTitle}</p>
                            <p>Username: {song.userName}</p>
                        </div>
                    </div>
                </div>
            )
        })
        this.setState({
            songs: songHtml
        })
    }


    render() {
        return (
            <div className="row col-12 mx-auto" id="songCard">
             {this.state.songs}
            </div>
        );
    }
}

export default PlayListItem;