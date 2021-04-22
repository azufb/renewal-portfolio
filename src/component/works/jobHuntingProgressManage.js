import React from 'react';

export default class JHPM extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2>JobHuntingProgressManage</h2>
                <p>
                    就職活動・転職活動では、色々な会社にエントリーすると思います。人それぞれですが、100社近くエントリーする人もいると思います。複数の媒体を通してエントリーする人もいると思います。
                </p>
                <p>
                    「Job Hunting Progress Manage」では、たくさんの会社に、複数の媒体からエントリーしても、選考の進み具合を一覧で管理できます。
                </p>
                <p>
                    登録できる情報は、次の4つ！
                    <ul>
                        <li>会社名</li>
                        <li>会社の所在地</li>
                        <li>選考状況</li>
                        <li>会社のサイトURL</li>
                    </ul>
                    登録したサイトURLには、クリックで遷移できるので、すぐにサイトを確認できます。
                </p>

                <h3>使い方</h3>
                <p>
                    1. エントリーした企業の名前、所在地、選考状況、サイトURLを入力。
                </p>
                <p>
                    2. ADDボタンを押して追加！
                </p>
                <p>
                    demo動画
                </p>

                <h3>作成したきっかけ</h3>
                <p>
                    自分が仕事を探していたときに、複数の媒体から複数の会社にエントリーしていて、その選考状況を、いちいちその媒体に行って探して見るのは面倒だな...と感じ、このアプリを思いつきました。
                </p>

                <h3>使用技術</h3>
                <p>
                    Vue.js、Vuex、Vuex persistedstate、Firebase Authentication
                </p>
            </div>
        )
    }
}