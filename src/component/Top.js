import React from 'react';

export default class Top extends React.Component {
    render() {
        return (
            <div className="top">
                <h3 className='newsTitle'>NEWS!</h3>
                <div className='newsBox'>
                    <table>
                        <tbody>
                            <tr>
                                <th>2021.04.30</th>
                                <td>ポートフォリオサイト、リニューアルオープン！</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Greeting</h3>
                <p>
                    はじめまして、Azuです！<br />
                    フロントエンドエンジニアを目指して、プログラミング学習をしています。<br />
                </p>
                <p>
                    プログラミングスキルを通して、自分の心も満たしながら、自分が作ったアプリケーションを使った人々の心も満たすことができれば...と思っています。<br />
                    自分も周りの人々も、少しでも楽しく生活できる世界になるように、貢献していきたいです！
                </p>
                <p>
                    当サイトでは、独学の過程で個人開発したアプリケーションを掲載しております。<br />
                    ぜひ、ご覧下さい！
                </p>
            </div>
        );
    }
}