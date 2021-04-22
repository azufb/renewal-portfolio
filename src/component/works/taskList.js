import React from 'react';

export default class TaskList extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2>タスクリスト</h2>
                <p>
                    単純な、タスク管理アプリケーションです！
                </p>
                <p>
                    タスクを追加して、完了したタスクにはチェックボックスにチェックを入れて管理するだけのシンプルなシステムです。
                </p>

                <h3>使い方</h3>
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

                <h3>作成したきっかけ</h3>
                <p>
                    JavaScript、Reactを勉強し始めたときに作ってみた。
                </p>

                <h3>使用技術</h3>
                React
            </div>
        )
    }
}