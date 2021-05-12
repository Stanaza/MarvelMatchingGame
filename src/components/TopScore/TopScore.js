import React from "react";
import TopTable from "../TopTable/TopTable";
import './TopScore.css';


const TopScore = ({localStorageData}) => {

    return (
        <div className='top-container'>
            <TopTable
                localStorageData={localStorageData}
                title={'EASY'}
                level={10}
            />
            <TopTable
                localStorageData={localStorageData}
                title={'MEDIUM'}
                level={20}
            />
            <TopTable
                localStorageData={localStorageData}
                title={'HARD'}
                level={24}
            />
            <TopTable
                localStorageData={localStorageData}
                title={'GOD'}
                level={30}
            />
        </div>
    );
}
export default TopScore;