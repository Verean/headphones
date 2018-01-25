import React, { Component } from 'react';
import Logo from './components/logo/logo'
import SongInput from './components/songInput/songInput'
import './headphones.scss';

class Headphones extends Component {
  render() {
    return (
      <div className="headphones">
        <header className="headphones-header">
          <Logo />
          <h1 className="headphones-title">Headphones</h1>
        </header>
        <section>
          <SongInput />
        </section>
      </div>
    );
  }
}

export default Headphones;
