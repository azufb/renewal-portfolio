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
                    フロントエンドエンジニアを目指して、プログラミングの勉強をしています。<br />
                    当サイトでは、独学の過程で個人開発したアプリケーションを掲載しております。<br />
                    ぜひ、ご覧下さい！
                </p>
            </div>
        );
    }
}