import React from 'react';
import homerunVideo from './worksPhotos/homerunVideo.mp4';

export default class Homerun extends React.Component {
    render() {
        return (
            <div className="detailContents">
                <h2 className="detailTitle">ほめるん</h2>
                <div className="contentsBox">
                    <p>
                        毎日、皆さん、頑張って生きています。その自分を褒めてみませんか？
                    </p>
                    <p>
                        このアプリは、チャットボットアプリです。
                    </p>
                    <p>
                        「今日は、嫌なことがあった...」や「大きな失敗をしてしまった...落ち込んでしまった...」など、日々、色々な感情があると思います。
                    </p>
                    <p>
                        そんなとき、このアプリに感情を吐き出してみて下さい。何があったのか吐き出してみて下さい。必ず、褒め言葉、労いの言葉を返してくれます。
                    </p>
                    <p>
                        嫌なことがあった方、失敗をしてしまった方...皆さん日々何かと戦っていて、一生懸命頑張っていらっしゃいます。そんな頑張り屋さんな自分をたまには褒めてあげませんか？
                    </p>
                </div>

                <h3>使い方</h3>
                <div className="contentsBox">
                    <div className="howtouse">
                        <div className="number"><span>1</span></div>
                        <p>その日に思ったことや、その日に起こった出来事などをメッセージとして送ります。</p>
                    </div>
                    <div className="howtouse">
                        <div className="number"><span>2</span></div>
                        <p>ボットがあなたに対して、褒め言葉や労いの言葉を返してくれます！</p>
                    </div>
                    <div className="videoBox">
                        <video src={homerunVideo} controls className="video" controlsList="nodownload"></video>
                    </div>
                    <div className="appLink">
                        <p>
                            <a href="https://boiling-garden-35201.herokuapp.com/" target='_blank' rel='noopener noreferrer'>使ってみる！<i className="fas fa-external-link-alt"></i></a>
                        </p>
                    </div>
                </div>

                <h3>作成したきっかけ</h3>
                <div className="contentsBox">
                    <p>
                        自分が、精神的にしんどくなってしまったときに、カウンセラーの方から「自分を褒めることが大切だ」とアドバイスを頂きました。自分を褒めて自分を認めること。確かに、「今日も色んなことがあったけれど、よく頑張ったね！」という気持ちになれれば、心がスッキリします。<br />
                        ただ、自分で自分を褒めるのはちょっと...という気持ちがありました。誰かに褒めてもらうように頼むのもなんか違うような...と感じ、「誰かに褒めてもらっている感覚」が得られると良いのではないかと考え、このチャットボットを開発することを決めました！
                    </p>
                </div>

                <h3>使用技術</h3>
                <div className="contentsBox">
                    <p>
                        React.js・React Simple Chatbot
                    </p>
                    <p>
                        <a href="https://github.com/azufb/ReactChatBot" target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}