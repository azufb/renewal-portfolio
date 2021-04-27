import React from 'react';
import introImg1 from './../student-849820_1920.jpeg';
import introImg2 from './../test-986935_1920.jpeg';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h2 className="pageTitle">Skills</h2>
                <h3>プログラミングスキル</h3>
                <div className="contentsBox">
                    <div className="programing">
                        <p>
                            JavaScriptを中心に学習しています。<br />
                            個人開発においては、ReactやVueを使っています。
                        </p>

                        <img src={introImg1} alt="introimg" />
                    </div>
                    <p className="category">言語</p>
                    <div className="lists">
                        <p className="list">
                            <i className="fas fa-medal"></i>JavaScript
                        </p>
                        <p className="comment">
                            <i className="far fa-comment-dots"></i>バックエンドもフロントエンドも担える言語で、すごいと思い、勉強し始めた。
                        </p>
                    </div>
                
                    <p className="category">ライブラリ・フレームワーク</p>
                    <div className="lists">
                        <p className="list">
                            <i className="fas fa-medal"></i>React.js
                        </p>
                        {/*<p className="comment">
                            <i className="far fa-comment-dots"></i>
                        </p>*/}
                        <p className="list">
                            <i className="fas fa-medal"></i>Vue.js
                        </p>
                        {/*<p className="comment">
                            <i className="far fa-comment-dots"></i>
                        </p>*/}
                    </div>
                </div>

                <h3>資格</h3>
                <div className="contentsBox">
                    <div className="certificate">
                        <p>
                            これまで、いくつかの資格試験に挑戦してきました。<br />
                            今後も、何か、取っていきたいなと思っています！
                        </p>
                        <img src={introImg2} alt="introimg" />
                    </div>
                    <div className="lists">
                        <p className="list">
                            <i className="fas fa-medal"></i>ITパスポート試験(2020年06月)
                        </p>
                        <p className="list">
                            <i className="fas fa-medal"></i>Excel VBAスタンダード(2020年02月)
                        </p>
                        <p className="list">
                            <i className="fas fa-medal"></i>TOEIC785点(2018年06月)
                        </p>
                        <p className="list">
                            <i className="fas fa-medal"></i>日商ビジネス英語検定3級(2018年04月)
                        </p>
                        <p className="list">
                            <i className="fas fa-medal"></i>日商簿記3級(2017年02月)
                        </p>
                        <p className="comment">
                            <i className="far fa-comment-dots"></i>私が所属していた学部では、簿記基礎が必須科目で、定期考査の勉強も兼ねて、受験。
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}