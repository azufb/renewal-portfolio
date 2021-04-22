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
                <h3 className="worksCategory">タスク管理</h3>
                <div className="cardsList">
                    <div className='cards'>
                        <div className='card'>
                            <NavLink to='/todokanri'>
                                <div className="cardContents">
                                    <img src={ToDoKanri} alt="todo管理" />
                                    <p>
                                        ToDo管理<br />
                                        2020年9月12日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <div className='card'>
                            <NavLink to='/taskList'>
                                <div className="cardContents">
                                    <img src={taskList} alt="todo管理" />
                                    <p>
                                        タスクリスト<br />
                                        2020年7月5日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <h3 className="worksCategory">日常</h3>
                <div className="cardsList">
                    <div className='cards'>
                        <div className='card'>
                            <NavLink to='/tagMemo'>
                                <div className="cardContents">
                                    <img src={tagMemo} alt="タグメモ！" />
                                    <p>
                                        タグメモ！<br />
                                        2020年8月11日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <h3 className="worksCategory">エンタメ</h3>
                <div className="cardsList">
                    <div className='cards'>
                        <div className='card'>
                            <NavLink to='/negapuchi'>
                                <div className="cardContents">
                                    <img src={negapuchi} alt="ネガプチッ！" />
                                    <p>
                                        ネガプチッ！<br />
                                        2021年3月26日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <div className='card'>
                            <NavLink to='/iceBreakShuffle'>
                                <div className="cardContents">
                                    <img src={iceBreakShuffle} alt="アイスブレイクシャッフル" />
                                    <p>
                                        アイスブレイクシャッフル<br />
                                        2021年2月9日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <div className='card'>
                            <NavLink to='/homerun'>
                                <div className="cardContents">
                                    <img src={homerun} alt="ほめるん" />
                                    <p>
                                        ほめるん<br />
                                        2020年7月19日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <h3 className="worksCategory">就職活動</h3>
                <div className="cardsList">
                    <div className='cards'>
                        <div className='card'>
                            <NavLink to='/jobHuntingProgressManage'>
                                <div className="cardContents">
                                    <img src={jhpm} alt="jhpm" />
                                    <p>
                                        Job Hunting Progress Manage<br />
                                        2020年10月24日
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}