import React, { Component } from 'react';
import './songInput.scss';
import firebase from '../../firebase.js';

class SongInput extends Component {
    constructor () {
        super();
        this.state = {
            artist: '',
            song: '',
            link: '',
            library: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const songsRef = firebase.database().ref('library');
        songsRef.on('value', (snapshot) => {
            let library = snapshot.val();
            let newState = [];
            for (let song in library) {
                newState.push({
                    id: song,
                    artist: library[song].artist,
                    song: library[song].song,
                    link: library[song].link
                });
            }
            this.setState({
                library: newState
            });
        });
    }

    handleChange(e) {
        const input = e.target;
        this.setState({
            [input.name]: input.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const songsRef = firebase.database().ref('library');
        const song = {
            artist: this.state.artist,
            song: this.state.song,
            link: this.state.link
        }
        songsRef.push(song);
        this.setState({
            artist: '',
            song: '',
            link: ''
        });
    }

    removeSong(songID) {
        const songRef = firebase.database().ref(`/library/${songID}`);
        songRef.remove();
    }

    render() {
        return ( 
            <div>
                <h2>Song Input</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="song-input-field">
                        <label>Artist: </label>
                        <input
                            name="artist"
                            type="text"
                            placeholder="Enter Artist"
                            value={this.state.artist}
                            onChange={this.handleChange}
                        />
                    </div>    
                    <div className="song-input-field">
                        <label>Song: </label>
                        <input
                            name="song"
                            type="text"
                            placeholder="Enter Song"
                            value={this.state.song}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="song-input-field">
                        <label>Link: </label>
                        <input
                            name="link"
                            type="text"
                            placeholder="Enter Link"
                            value={this.state.link}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleSubmit}>Add Song</button>
                </form>
                <section>
                    <ul>
                        {this.state.library.map((song) => {
                            return (
                                <li key={song.id}>
                                    <h3><a href={song.link}>{song.song}</a></h3>
                                    <h4>{song.artist}</h4>
                                    <button onClick={() => this.removeSong(song.id)}>Remove Song</button>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}

export default SongInput;