import React from 'react';
import topImg from './../top.png';

const Top = () => {
  return (
    <div className="mainContent">
      <img src={topImg} alt="topimg" className="greetingImg" />
      <h3 className="greetingTitle">はじめまして</h3>
      <div className="contentsBox">
        <p>
          ご来訪下さり、ありがとうございます！
          <br />
          エンジニアを目指して、プログラミング学習をしている、Azusaです。
        </p>
        <p>
          自分が「ものづくり」に関わり、Webアプリケーションやシステムの開発に携わっていきます。
          <br />
          自分が開発に関わった機能を使って、少しでも楽しく快適に生活できる世界に変えられるように、貢献していきます！
        </p>
        <p>
          まだまだ未熟な状態ですが、これまでいくつか個人開発を行ってきました。
          <br />
          当サイトでは、学習の過程で開発に挑戦したWebアプリケーションを掲載しています。
          <br />
          ぜひ、ご覧下さい！
        </p>
      </div>
    </div>
  );
};

export default Top;
