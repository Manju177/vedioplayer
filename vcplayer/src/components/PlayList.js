import React, { useState } from 'react';

const Playlist = ({ videos, handleVideoClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-4 text-center">Video Playlist</h2>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <ul>
        {filteredVideos.map(video => (
          <li key={video.id} className="mb-2">
            <button className="text-black-900 hover:text-blue-700 bg-white w-full rounded-md h-10 drop-shadow-2xl sm:h-12" onClick={() => handleVideoClick(video)}>
              {video.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
