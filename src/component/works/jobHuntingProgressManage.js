import React from 'react';

export default class JHPM extends React.Component {
    render() {
        return (
            <div>
                <h2>JobHuntingProgressManage</h2>
                <p>
                    このアプリケーションは、就職活動・転職活動の進捗状況を登録しておくものです。
                </p>

                <h3>作成したきっかけ</h3>
                <p>
                    自分自身が仕事探しをしているときに、自分が受けた会社とその結果を管理できるアプリケーションがあれば...と思ったこと。
                </p>

                <h3>使用技術</h3>
                Vue.js、Vuex、Vuex persistedstate、Firebase Authentication
            </div>
        )
    }
}