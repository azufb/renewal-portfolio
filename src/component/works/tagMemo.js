import React from 'react';

export default class TagMemo extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2>タグメモ！</h2>
                <p>
                    その場でささっとメモ！...でも後で見返したとき、「あれ...これ何について書いたメモなのか、わからん！仕事関連なのだろうか...？それともプライベートだろうか...？」と悩むことはありませんか？
                </p>
                <p>
                    そんなときは、この「タグメモ」を使って、メモをしてみましょう！内容はささっと簡潔に書いても、分類タグを付けることで、断片的な情報でも、仕事に関することなのか、プライベートに関することなのか、お金に関することなのかが区別でき、思い出すヒントになります。
                </p>
                <p>
                    使用できる分類タグは、3つ。
                    <ul>
                        <li>Work・・・仕事関連</li>
                        <li>Vacation・・・プライベート関連</li>
                        <li>Money・・・お金や家計関連</li>
                    </ul>
                </p>

                <h3>使い方</h3>
                <div className="howtouse">
                    <div className="number"><span>1</span></div>
                    <p>メモを入力し、分類タグを選択。</p>
                </div>
                <div className="howtouse">
                    <div className="number"><span>2</span></div>
                    <p>メモを追加。</p>
                </div>
                <div className="howtouse">
                    <div className="number"><span>2</span></div>
                    <p>削除したいときには、削除したいメモをドロップダウンから選んで、削除！</p>
                </div>

                <h3>作成したきっかけ</h3>
                <p>
                    私自身、メモをするときは、要件だけささっと書いてしまうことが多いのですが、それでも、後で見返したときに、何についてなのかが、わかるように、気が付くことができるようにしておく必要があると思い、思いつきました。
                </p>

                <h3>使用技術</h3>
                React
            </div>
        )
    }
}