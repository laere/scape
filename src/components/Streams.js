import React, { Component, PropTypes } from 'react';

const Streams = ({ streams }) => {
    return (
      <div className="streamsList">
        {streams.map(stream => {
          return (
            <div key={stream._id} className="streamsList__item">
              <span>{stream.channel.game}</span>
              <div>
                <a href={stream.channel.url} target="_blank">
                  <img src={stream.preview.medium}/>
                </a>
              </div>
              <div>
                <span>{stream.viewers} viewers on <strong>{stream.channel.display_name}</strong></span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Streams;
