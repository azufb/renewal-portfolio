import React from 'react';
import tasklistVideo from './worksPhotos/tasklist.mp4';

export default class TaskList extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2 className="detailTitle">タスクリスト</h2>
                <div className="contentsBox">
                    <p>
                        単純な、タスク管理アプリケーションです！
                    </p>
                    <p>
                        タスクを追加して、完了したタスクにはチェックボックスにチェックを入れて管理するだけのシンプルなシステムです。
                    </p>
                </div>

                <h3>使い方</h3>
                <div className="contentsBox">
                    <div className="howtouse">
                        <div className="number"><span>1</span></div>
                        <p>タスクを入力し、追加する。</p>
                    </div>
                    <div className="howtouse">
                        <div className="number"><span>2</span></div>
                        <p>1つのタスクが完了すれば、各タスクの横にあるチェックボックスにチェックを入れる。</p>
                    </div>
                    <div className="howtouse">
                        <div className="number"><span>3</span></div>
                        <p>全て完了したら削除！</p>
                    </div>
                    <div className="videoBox">
                        <video src={tasklistVideo} controls className="video" controlsList="nodownload"></video>
                    </div>
                    <div className="appLink">
                        <p>
                            <a href="https://tasklists-app.netlify.app/" target='_blank' rel='noopener noreferrer'>使ってみる！<i className="fas fa-external-link-alt"></i></a>
                        </p>
                    </div>
                </div>

                <h3>作成したきっかけ</h3>
                <div className="contentsBox">
                    <p>
                        JavaScript、Reactを勉強し始めたときに作ってみた。
                    </p>
                </div>

                <h3>使用技術</h3>
                <div className="contentsBox">
                    <p>
                        Vue.js
                    </p>
                    <p>
                        <a href="https://github.com/azufb/ToDoAppwithVue.js" target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}