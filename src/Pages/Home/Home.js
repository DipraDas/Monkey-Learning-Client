import React from 'react';
import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import Adventages from '../Adventages/Adventages';
import Video from '../Video/Video';
import QuizTopics from '../QuizTopics/QuizTopics';
import Professional from '../Professional/Professional';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Adventages></Adventages>
            <Video></Video>
            <QuizTopics></QuizTopics>
            <Professional></Professional>
        </div>
    );
};

export default Home;