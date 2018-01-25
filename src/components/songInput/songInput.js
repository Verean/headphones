import React from 'react';
import './songInput.scss';

const SongInput = (props) => {
    return (
        <div>
            <h2>Song Input</h2>
            <form>
                <div className="song-input-field">
                    <label>Artist: </label>
                    <input
                        name="artist"
                        type="text"
                        placeholder="Enter Artist"
                        value={props.artist}
                        onChange={props.handleChange}
                    />
                </div>    
                <div className="song-input-field">
                    <label>Song: </label>
                    <input
                        name="song"
                        type="text"
                        placeholder="Enter Song"
                        value={props.song}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="song-input-field">
                    <label>Link: </label>
                    <input
                        name="link"
                        type="text"
                        placeholder="Enter Link"
                        value={props.link}
                        onChange={props.handleChange}
                    />
                </div>
                <button onClick={props.handleSubmit}>Add Song</button>
            </form>
        </div>
    )
}

export default SongInput;