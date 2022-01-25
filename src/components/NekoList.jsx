import React from 'react';

export default function NekoList({ nekos }) {
  return (
    <div>
      {nekos.map((neko) => (
        <><img src={nekos.url} />
          <p>artist: {nekos.artist_name}</p></>
      ))}
    </div>);
}
