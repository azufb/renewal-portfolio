import React from "react";
import topImg from "./../pexels-jessica-lewis-583847.jpeg";

export default class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <img src={topImg} alt="topimg" />
        <h3>Greeting</h3>
        <div className="contentsBox">
          <p>
            はじめまして、Azuです！
            <br />
            フロントエンドエンジニアを目指して、プログラミング学習をしています。
          </p>
          <p>
            プログラミングスキルを通して、自分も周りの人々も、少しでも楽しく生活できる世界に変わるように、貢献していきたいです！
          </p>
          <p>
            当サイトでは、学習の過程で個人開発したWebアプリケーションをいくつか掲載しています。
            <br />
            ぜひ、ご覧下さい！
          </p>
        </div>
      </div>
    );
  }
}
