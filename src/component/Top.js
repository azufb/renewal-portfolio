import React from "react";
import topImg from "./../top.png";

export default class Top extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <img src={topImg} alt="topimg" className="greetingImg" />
        <h3 className="greetingTitle">はじめまして</h3>
        <div className="contentsBox">
          <p>
            ご来訪下さり、ありがとうございます！
            <br />
            フロントエンドエンジニアを目指して、プログラミング学習をしている、Azusaです。
          </p>
          <p>
            プログラミングスキルを通して、自分も周りの人々も、少しでも楽しく生活できる世界に変わるように、貢献していきます。
          </p>
          <p>
            まだまだ駆け出しの状態ですが、これまでいくつか個人開発を行ってきました。
            <br />
            当サイトでは、学習の過程で開発に挑戦したWebアプリケーションを厳選して掲載しています。
            <br />
            ぜひ、ご覧下さい！
          </p>
        </div>
      </div>
    );
  }
}
