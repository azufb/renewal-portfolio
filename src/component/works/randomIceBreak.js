import React from 'react';

export default class IBS extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2>アイスブレイクシャッフル</h2>
                <p>
                    話す話題に困ったことってありませんか？そんなときは、「アイスブレイクシャッフル」に頼ってみませんか？
                </p>
                <p>
                    このアプリは、相手と話してみたい話題をシャッフル形式で出してくれます。
                </p>
                <p>
                    入力したいくつかの話題から、ランダムで出てくるので、その場の雰囲気も柔らかくなるかも！
                </p>

                <h3>使い方</h3>
                <p>
                    1. 入力欄に話のネタを1つずつ入力して追加。
                </p>
                <p>
                    2. シャッフルボタンを押す！
                </p>
                <p>
                    3. 何度か押すと、次々に別のネタが出てきます。
                </p>

                <h3>作成したきっかけ</h3>
                <p>
                    社内コミュニケーション活性化のために始まった企画で、雑談をすることになって、そんなとき、リストアップされた話題を順番に話すより、ランダムで出てきた方が面白いと考えたことがきっかけです。
                </p>

                <h3>使用技術</h3>
                React
            </div>
        )
    }
}