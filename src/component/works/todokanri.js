import React from 'react';

export default class ToDoKanri extends React.Component {
    render() {
        return (
            <div>
                <h2>ToDo管理</h2>
                <p>
                    このアプリケーションは、todo管理アプリ。タスクが終わると褒めてくれる。
                </p>

                <h3>作成したきっかけ</h3>
                <p>
                    ただ単にタスクをこなして削除するのではなく、労ってもらえると、面白いと思ったから。
                </p>

                <h3>使用技術</h3>
                React
            </div>
        )
    }
}