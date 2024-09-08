import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>('streaming');
  const [isHeartFilled, setIsHeartFilled] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const toggleHeartImage = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const togglePauseImage = () => {
    setIsPaused(!isPaused);
  }

  return (
    <main className="main-content">
      
      <div className="music-toolbar">
        <div className="main-screen">
          <div className="current-song">
            <img src="images/Thumbnail.svg" alt="Current Song" className="current-song-img" />
            <p className="current-song-title">Title</p>
            <p className="current-song-description">Description</p>
            <img src="images/Progress.svg" alt="Progress Bar" className="progress-bar" />
          </div>
          <div className="play-button-block">
            <button className="play-button">
              <img src="images/button-previous--button-television-buttons-movies-skip-previous-video-controls.svg" alt="Previous" />
            </button>
            <button className="play-button" onClick={togglePauseImage}>
              <img src={isPaused ? "images/Vector_2.svg" : "images/button-pause-2--button-television-buttons-movies-tv-pause-video-controls.svg"} alt="Pause" />
            </button>
            <button className="play-button">
              <img src="images/button-next--button-television-buttons-movies-skip-next-video-controls.svg" alt="Next" />
            </button>
          </div>
          <button className="search-button">
            <img src="images/magnifying-glass--glass-search-magnifying.svg" alt="Search" />
          </button>
          <button className="heart-button" onClick={toggleHeartImage}>
            <img 
              src={isHeartFilled ? "images/heartsFull.svg" : "images/hearts-symbol--entertainment-gaming-card-hearts-symbol.svg"} alt="Heart" />
          </button>
          <button className="spotify-button">
            <img src="images/spotify (1).svg" alt="Spotify" />
          </button>
          <button className="youtube-button">
            <img src="images/spotify (2).svg" alt="Youtube" />
          </button>
          <button className="down-button">
            <img src="images/down.svg" alt="Down" />
          </button>
          <div className="songs-block">
            <div className="music-options-block">
              <button className={`music-option ${activeOption === 'liked-songs' ? 'active' : 'inactive'}`} id="liked-songs-button" onClick={() => setActiveOption('liked-songs')}>
                Liked Songs
              </button>
              <button className={`music-option ${activeOption === 'queue' ? 'active' : 'inactive'}`} id="queue-button" onClick={() => setActiveOption('queue')}>
                Queue
              </button>
              <button className={`music-option ${activeOption === 'library' ? 'active' : 'inactive'}`} id="library-button" onClick={() => setActiveOption('library')}>
                Your Library
              </button>
            </div>
            <div className="favourites-block">
              <div className="favourite-buttons">
                <button className="favourite-button">
                  <img src="images/album cover.svg" alt="Favourite 1" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (1).svg" alt="Favourite 2" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (2).svg" alt="Favourite 3" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (3).svg" alt="Favourite 4" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (4).svg" alt="Favourite 5" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (5).svg" alt="Favourite 6" />
                  <text id="favs-title">Title</text>
                  <text id="favs-artist">Artist</text>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
