import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //fires once when the component loads and whenever videos changes BUT never after
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    // BEM convention?
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, song, likes, messages, description, shares}) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
