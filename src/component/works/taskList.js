import React from 'react';

export default class TaskList extends React.Component {
    render() {
        return (
            <div>
                <h2>タスクリスト</h2>
                <p>
                    このアプリケーションは、タスク管理アプリ。
                </p>

                <h3>作成したきっかけ</h3>
                <p>
                    作ってみたかったから。
                </p>

                <h3>使用技術</h3>
                React
            </div>
        )
    }
}