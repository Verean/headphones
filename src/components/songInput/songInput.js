import React from 'react';
import './songInput.scss';

const SongInput = (props) => {
    return (
        <div>
            <form>
                <div className="row">
                    <h2>Song Input</h2>
                </div>
                <div className="row">
                    <div className="one-third column">
                        <label className="alignLeft">Artist: </label>
                        <input
                            className="u-full-width"
                            name="artist"
                            type="text"
                            placeholder="Enter Artist"
                            value={props.artist}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="one-third column">
                        <label className="alignLeft">Song: </label>
                        <input
                            className="u-full-width"
                            name="song"
                            type="text"
                            placeholder="Enter Song"
                            value={props.song}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="one-third column">
                        <label className="alignLeft">Link: </label>
                        <input
                            className="u-full-width"
                            name="link"
                            type="text"
                            placeholder="Enter Link"
                            value={props.link}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <button onClick={props.handleSubmit}>Add Song</button>
            </form>
        </div>
    )
}

export default SongInput;