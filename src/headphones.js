import React, { Component } from 'react';
import Logo from './components/logo/logo'
import SongInput from './components/songInput/songInput'
import Library from './components/library/library'
import './headphones.scss';
import firebase from '../src/firebase.js';

class Headphones extends Component {
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
      <div className="headphones">
        <header className="headphones-header">
          <Logo />
          <h1 className="headphones-title">Headphones</h1>
        </header>
        <section>
          <SongInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            artist={this.state.artist}
            song={this.state.song}
            link={this.state.link}
          />
        </section>
        <section>
          <Library
            removeSong={this.removeSong}
            library={this.state.library}
          />
        </section>
      </div>
    );
  }
}

export default Headphones;
