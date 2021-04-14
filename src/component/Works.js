import React from 'react';
import taskList from './works/worksPhotos/taskList.png';
import ToDoKanri from './works/worksPhotos/ToDoKanri.png';
import tagMemo from './works/worksPhotos/tagMemo.png';
import iceBreakShuffle from './works/worksPhotos/iceBreakShuffle.png';
import homerun from './works/worksPhotos/homerun.png';
import negapuchi from './works/worksPhotos/negaPuchi.png';
import jhpm from './works/worksPhotos/JobHuntingProgressManage.png';
import { NavLink } from 'react-router-dom';


export default class Works extends React.Component {
    render() {
        return (
            <div className="works">
                <h2>成果物</h2>
                <h3>タスク管理</h3>
                <div className='cards'>
                    <div className='card'>
                        <NavLink to='/todokanri'>
                            <div className="cardContents">
                                <img src={ToDoKanri} alt="todo管理" />
                                <p>ToDo管理</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to='/taskList'>
                            <div className="cardContents">
                                <img src={taskList} alt="todo管理" />
                                <p>タスクリスト</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <h3>日常</h3>
                <div className='cards'>
                    <div className='card'>
                        <NavLink to='/tagMemo'>
                            <div className="cardContents">
                                <img src={tagMemo} alt="タグメモ！" />
                                <p>タグメモ！</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <h3>エンタメ</h3>
                <div className='cards'>
                    <div className='card'>
                        <NavLink to='/iceBreakShuffle'>
                            <div className="cardContents">
                                <img src={iceBreakShuffle} alt="アイスブレイクシャッフル" />
                                <p>アイスブレイクシャッフル</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to='/homerun'>
                            <div className="cardContents">
                                <img src={homerun} alt="ほめるん" />
                                <p>ほめるん</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to='/negapuchi'>
                            <div className="cardContents">
                                <img src={negapuchi} alt="ネガプチッ！" />
                                <p>ネガプチッ！</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <h3>就職活動</h3>
                <div className='cards'>
                    <div className='card'>
                        <NavLink to='/jobHuntingProgressManage'>
                            <div className="cardContents">
                                <img src={jhpm} alt="jhpm" />
                                <p>Job Hunting Progress Manage</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}