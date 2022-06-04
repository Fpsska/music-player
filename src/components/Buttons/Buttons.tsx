import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { IoPlayOutline } from 'react-icons/io5';
import { AiOutlinePause } from 'react-icons/ai';
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from 'react-icons/md';

import {
  switchPauseStatus,
  setTrackPreview,
  setArtistName,
  setTrackName,
  setCurrentLineProgress,
  setCurrentTimeProgress,
  setSongDuration,
  setDuration,
  setOffsetTime,
  setCurrentmusicIndex
} from '../../app/slices/mainSlice';

import { RootState } from '../../app/store';

import './buttons.scss';

// /. imports

const Buttons: React.FC = () => {
  const {
    isPlayerPage,
    isPaused,
    isLoading,
    albumList,
    duration,
    offsetCurrentTime,
    isAudioMuted,
    musicIndex,
    currentTrack
  } = useSelector((state: RootState) => state.mainSlice);
  const dispatch = useDispatch();
  //
  const prevBtn = useRef<HTMLButtonElement>(null);
  const pauseBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const trackOrder = useRef<HTMLAudioElement>(null!);
  //

  const loadMusic = (index: number): void => {
    if (!isLoading) {
      trackOrder.current.src = albumList[index - 1].preview;
      dispatch(setTrackPreview(albumList[index - 1].artist.picture_medium));
      dispatch(setArtistName(albumList[index - 1].artist.name));
      dispatch(setTrackName(albumList[index - 1].title));
    }
  };

  const defineTimeCount = (e: any): void => {
    const { duration, currentTime } = e.target;
    dispatch(setDuration(duration));
    //
    let totalSecond = String(Math.floor(duration % 60));
    const totalMinute = String(Math.floor(duration / 60));
    if (+totalSecond < 10) {
      totalSecond = `0${totalSecond}`;
    }
    //
    let currentSecond = String(Math.floor(currentTime % 60));
    const currentMinute = String(Math.floor(currentTime / 60));
    if (+currentSecond < 10) {
      currentSecond = `0${currentSecond}`;
    }
    dispatch(setCurrentTimeProgress(`${currentMinute}:${currentSecond}`));
    dispatch(setSongDuration(`${totalMinute}:${totalSecond}`));
    dispatch(setCurrentLineProgress((currentTime / duration) * 100));
  };

  useEffect(() => {
    trackOrder.current.addEventListener('timeupdate', defineTimeCount);
    return () =>
      trackOrder.current.removeEventListener('timeupdate', defineTimeCount);
  }, [duration, offsetCurrentTime]);

  const playMusic = (): void => {
    trackOrder.current.play();
  };

  const pauseMusic = (): void => {
    trackOrder.current.pause();
  };

  const nextSong = (): void => {
    dispatch(setCurrentmusicIndex(musicIndex + 1));
    musicIndex >= albumList.length
      ? dispatch(setCurrentmusicIndex(1))
      : dispatch(setCurrentmusicIndex(musicIndex + 1));
    // value check
    loadMusic(musicIndex);
    playMusic();
    dispatch(switchPauseStatus(false));
    dispatch(setCurrentLineProgress(0));
    dispatch(setCurrentTimeProgress(0));
    dispatch(setOffsetTime(0));
    console.log(document.querySelector('.swiper-slide'));
  };

  const prevSong = (): void => {
    dispatch(setCurrentmusicIndex(musicIndex - 1));
    musicIndex <= 1
      ? dispatch(setCurrentmusicIndex(albumList.length))
      : dispatch(setCurrentmusicIndex(musicIndex - 1));
    // value check
    loadMusic(musicIndex);
    playMusic();
    dispatch(switchPauseStatus(false));
    dispatch(setCurrentLineProgress(0));
    dispatch(setCurrentTimeProgress(0));
    dispatch(setOffsetTime(0));
    console.log(Array.from(document.querySelectorAll('.swiper-slide')).filter(item => item.classList.contains('swiper-slide-active'))[0].children[0].id);
  };

  const defineButtonEvent = (): void => {
    dispatch(switchPauseStatus(!isPaused));
    !isPaused ? pauseMusic() : playMusic();
  };
  //
  useEffect(() => {
    loadMusic(musicIndex);
  }, [isLoading, albumList]);

  useEffect(() => {
    trackOrder.current.currentTime = offsetCurrentTime;
  }, [offsetCurrentTime]);
  //
  return (
    <nav
      className={isPlayerPage ? 'nav nav--player' : 'nav'}
    >
      <button
        ref={prevBtn}
        disabled={isLoading ? true : false}
        onClick={prevSong}
        className={
          isPlayerPage
            ? 'nav__button nav__button--player prev'
            : 'nav__button prev'
        }
      >
        <MdOutlineSkipPrevious size={32} color={'#eaf0ff'} />
      </button>
      <button
        ref={pauseBtn}
        disabled={isLoading ? true : false}
        onClick={defineButtonEvent}
        className={`nav__button ${isPlayerPage ? 'nav__button--player' : ''} ${isPaused ? 'pause' : 'play'}`}
      >
        {isPaused ? <IoPlayOutline size={34} color={'#eaf0ff'} /> : <AiOutlinePause size={34} color={'#eaf0ff'} />}
      </button>
      <button
        ref={nextBtn}
        disabled={isLoading ? true : false}
        onClick={nextSong}
        className={
          isPlayerPage
            ? 'nav__button nav__button--player next'
            : 'nav__button next'
        }
      >
        <MdOutlineSkipNext size={32} color={'#eaf0ff'} />
      </button>
      <audio
        className="player__audio"
        muted={isAudioMuted ? true : false}
        ref={trackOrder}
        src={currentTrack}
      ></audio>
    </nav>
  );
};

export default Buttons;
