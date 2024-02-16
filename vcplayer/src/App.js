import React, { useState } from 'react';
import './App.css'
import img from './components/images/video.webp'

import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/PlayList';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  
	const videos = [{id: 1,title : "Big Buck Bunny",url:"https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
   {id: 2, title: 'Elephant Dream',url:"https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
   {id: 3, title: 'For Bigger Blazes',url:	"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
   {id: 4, title: 'For Bigger Escape',url:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
   {id: 5, title: 'For Bigger Fun',url:	"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
   {id: 6, title: 'For Bigger Joyrides',url:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},
   {id: 7, title: 'For Bigger Meltdowns',url:	"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},
   {id: 8, title: 'Sintel',url:"https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg"},
   {id: 9, title: 'Subaru Outback On Street And Dirt',url:	"https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"},
   {id: 10, title: 'Tears of Steel',url:"https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"}]



  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 smallScreen">
          {currentVideo ? <VideoPlayer video={currentVideo} /> :
          <div>
          <img className='sm:w-full move' src={img} alt='_blank'/>
          <span className='text-lg font-bold mb-4'>
          <marquee behavior="scroll" direction="left" scrollamount="12">Select the video you want to play from the playlist </marquee>
          </span>
          </div>}
        </div>
        <div>
          <Playlist videos={videos} handleVideoClick={handleVideoClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
