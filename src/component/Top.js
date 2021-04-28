import React from 'react';
import topImg from './../pexels-jessica-lewis-583847.jpeg';

export default class Top extends React.Component {
    render() {
        return (
            <div className="top">
                <img src={topImg} alt="topimg" />
                <h3>Greeting</h3>
                <div className="contentsBox">
                    <p>
                        はじめまして、Azuです！<br />
                        フロントエンドエンジニアを目指して、プログラミング学習をしています。<br />
                    </p>
                    <p>
                        プログラミングスキルを通して、自分の心も満たしながら、自分が作ったアプリケーションを使った人々の心も満たすことができれば...と思っています。<br />
                        自分も周りの人々も、少しでも楽しく生活できる世界になるように、貢献していきたいです！
                    </p>
                    <p>
                        当サイトでは、独学の過程で個人開発したWebアプリケーションを掲載しております。<br />
                        ぜひ、ご覧下さい！
                    </p>
                </div>
            </div>
        );
    }
}