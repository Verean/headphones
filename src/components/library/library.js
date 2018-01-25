import React from 'react';
import './library.scss';

const Library = (props) => {
    return (
        <div>
            <ul>
                {props.library.map((song) => {
                    return (
                        <li key={song.id}>
                            <h3><a href={song.link}>{song.song}</a></h3>
                            <h4>{song.artist}</h4>
                            <button onClick={() => props.removeSong(song.id)}>Remove Song</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Library;