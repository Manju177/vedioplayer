// src/components/VideoPlaylist.js
import React from 'react';

const Playlist = ({ videos,handleVideoClick }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-4">Video Playlist</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id} className="mb-2">
            <button className="text-black-900 hover:text-blue-700 bg-white w-full rounded-md h-10 drop-shadow-2xl sm: h-12" onClick={() => handleVideoClick(video)}>
              {video.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
