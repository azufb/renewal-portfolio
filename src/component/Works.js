import React from 'react';
import ToDoKanri from './works/worksPhotos/ToDoKanri.png';
import ToDoKanri2 from './works/worksPhotos/ToDoKanri_02.png';
import tagMemo from './works/worksPhotos/tagMemo.png';
import iceBreakShuffle from './works/worksPhotos/iceBreakShuffle.png';
import homerun from './works/worksPhotos/homerun.png';
import negapuchi from './works/worksPhotos/negaPuchi.png';
import jhpm from './works/worksPhotos/JobHuntingProgressManage.png';
import { NavLink } from 'react-router-dom';


export default class Works extends React.Component {
    render() {
        return (
            <div>
                <h2>成果物</h2>
                <h3>タスク管理</h3>
                <div className='cards'>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={ToDoKanri2} alt="todo管理" />
                            <p>ToDo管理</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={ToDoKanri} alt="todo管理" />
                            <p>ToDo管理</p>
                        </div>
                    </div>
                </div>

                <h3>日常</h3>
                <div className='cards'>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={tagMemo} alt="todo管理" />
                            <p>タグメモ！</p>
                        </div>
                    </div>
                </div>

                <h3>エンタメ</h3>
                <div className='cards'>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={iceBreakShuffle} alt="todo管理" />
                            <p>アイスブレイクシャッフル</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={homerun} alt="todo管理" />
                            <p>ほめるん</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardContents">
                            <img src={negapuchi} alt="todo管理" />
                            <p>ネガプチッ！</p>
                        </div>
                    </div>
                </div>

                <h3>就職活動</h3>
                <div className='cards'>
                    <div className='card'>
                    <NavLink to='/jobHuntingProgressManage'>
                        <div className="cardContents">
                            <img src={jhpm} alt="todo管理" />
                            <p>Job Hunting Progress Manage</p>
                        </div>
                    </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}