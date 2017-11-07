import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header";
import Echarts from "./Component/Chart/LineChart/index";
import RecordSort from "./Component/RecordSort";
// import {lineOption}  from "./options";


function getLastWeekStat() {
    return [
        {
            value: [10,12,13,14,15,12,13],
            label: "商品浏览量",
        },
        {
            value: [12,30,22,22,33,12,32],
            label: "商品访客数",
        }
    ];
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Echarts />
                <RecordSort />
            </div>
        );
    }
}

export default App;
