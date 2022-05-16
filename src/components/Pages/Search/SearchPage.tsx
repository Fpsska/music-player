import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SvgTemplate from '../../Common/SvgTemplate';
import { RootState } from '../../../app/store';
import './searchPage.scss';

// /. imports

const SearchPage: React.FC = () => {
    const { likedData, songDuration, isLoading, isPaused } = useSelector((state: RootState) => state.mainSlice);
    const [isEmpty, setEmptyStatus] = useState(false);
    useEffect(() => {
        if (likedData.length === 0) {
            setEmptyStatus(true);
        }
    }, [likedData]);

    return (
        <div className="container">
            <div className="search">
                <h3 className="search__title">Tracks</h3>
                <div className="search__wrapper">
                    <div className="search__list">
                        {
                            isEmpty ? <h3 className="search__title search__title--empty">No matches</h3>
                                :
                                likedData.map(item => {
                                    return (
                                        <div className="search__list-item" key={item.id}>
                                            <img className="search__list-image" src={item.artist.picture_medium} alt="album" />
                                            <div className="search__list-information">
                                                <span className="search__list-song">{item.title}</span>
                                                <span className="search__list-artist">{item.artist.name}</span>
                                            </div>
                                            <div className="search__list-controls">
                                                <button className="search__list-button">
                                                    <SvgTemplate id="like" />
                                                </button>
                                                <span className="search__list-time">{isLoading ? '0:00' : isPaused ? '0:00' : songDuration}</span>
                                            </div>
                                        </div>
                                    );
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;