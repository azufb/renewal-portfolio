import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import todo from './../reacttodoappagain.png';

export default class Works extends React.Component {
    render() {
        return (
            <div>
                <h2>成果物</h2>
                <h3>タスク管理</h3>
                <div className='cards'>
                    <div className='card'>
                        <img src={todo} />
                        <p>ToDo管理</p>
                    </div>
                    <div className='card'>
                        <img src={todo} />
                        <p>ToDo管理</p>
                    </div>
                </div>
            </div>
        );
    }
}