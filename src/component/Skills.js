import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h2 className="pageTitle">Skills</h2>
        <h3>プログラミングスキル</h3>
        <div className="contentsBox">
          <div className="programing">
            <p>
              JavaScriptを中心に学習しています。
              <br />
              個人開発においては、ReactやVueを使っています。
              <br />
              まだまだ学習途中ですが、少しずつ前進しています！
            </p>
          </div>
        </div>
        <h4 className="category">言語</h4>
        <div className="contentsBox">
          <div className="lists">
            <p className="list">
              <i className="fas fa-medal"></i>JavaScript
            </p>
            <p className="comment">
              <i className="far fa-comment-dots"></i>
              バックエンドもフロントエンドも担える言語で、万能だと思い、勉強し始めました。
            </p>
          </div>
        </div>

        <h4 className="category">ライブラリ・フレームワーク</h4>
        <div className="contentsBox">
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
              これまで、いくつかの資格試験に挑戦してきました。
              <br />
              今後も、何か、取っていきたいなと思っています！
            </p>
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
              <i className="fas fa-medal"></i>
              日商ビジネス英語検定3級(2018年04月)
            </p>
            <p className="list">
              <i className="fas fa-medal"></i>日商簿記3級(2017年02月)
            </p>
            <p className="comment">
              <i className="far fa-comment-dots"></i>
              私が所属していた学部では、簿記基礎が必須科目で、定期考査の勉強も兼ねて、受験。
            </p>
          </div>
        </div>
      </div>
    );
  }
}
