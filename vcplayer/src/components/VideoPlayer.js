import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const [autoplay, setAutoplay] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10; // Forward 10 seconds
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 10; // Rewind 10 seconds
  };

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value));
    videoRef.current.playbackRate = parseFloat(e.target.value);
  };

  const handleAutoplayChange = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold mb-4">{video.title}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4 relative">
        <video
          className="w-full h-full"
          ref={videoRef}
          src={video.url}
          title={video.title}
          controls={!autoplay}
          autoPlay={autoplay}
          playbackRate={speed}
        ></video>
      </div>
      {(
        <div className="flex items-center mb-4 ">
          <button onClick={handlePlay} className="mr-2 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <FontAwesomeIcon icon={faPlay} className="text-lg" />
          </button>
          <button onClick={handlePause} className="mr-2 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <FontAwesomeIcon icon={faPause} className="text-lg" />
          </button>
          <button onClick={handleRewind} className="mr-2 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <FontAwesomeIcon icon={faBackward} className="text-lg" />
          </button>
          <button onClick={handleForward} className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <FontAwesomeIcon icon={faForward} className="text-lg" />
          </button>
        </div>
      )}
      <div className="flex items-center mb-4 gap-2">
        <label className="mr-4 font-semibold">Speed:</label>
        <div className="relative">
          <select value={speed} onChange={handleSpeedChange} className="appearance-none bg-transparent border border-gray-300 rounded py-2 pl-3 pr-8 text-sm font-semibold">
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.595 11.457l2.385-2.323-.758-.76-1.255 1.296V5.999h-1.333v3.66L5.785 8.374l-.757.76 2.385 2.323h1.182zm1.405 1.086l1.256-1.295V14h1.333v-3.66l1.256 1.295.758-.76-2.386-2.323h-1.181l-2.385 2.323.758.76z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
        <label className="mr-4 font-semibold">Autoplay:</label>
        <div className="flex items-center">
          <input type="checkbox" checked={autoplay} onChange={handleAutoplayChange} className="mr-2 rounded border-gray-300 focus:ring-gray-400" />
          <span className="text-gray-600">Autoplay the video</span>
        </div>
      </div>
      </div>

    </div>
  );
};

export default VideoPlayer;
