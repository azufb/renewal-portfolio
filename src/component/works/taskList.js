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
                <p>
                    1. タスクを入力して、追加。
                </p>
                <p>
                    2. 1つのタスクが完了すれば、各タスクの横にあるチェックボックスにチェックを入れる。
                </p>
                <p>
                    3. 全て完了したら削除！
                </p>

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