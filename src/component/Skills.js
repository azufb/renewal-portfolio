import React from 'react';
import JSIcon from './../JavaScript.png';
import ReactIcon from './../react.png';
import VueIcon from './../Vue.png';

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <h2>スキル・資格</h2>
                <h3>スキル</h3>
                <p>
                    JavaScriptを中心に学習しています。<br />
                    個人開発においては、ReactやVueを使っています。
                </p>
                <h4>言語</h4>
                <img src={JSIcon} alt='JavaScript_Icon'/>

                <h4>ライブラリ・フレームワーク</h4>
                <img src={ReactIcon} alt='React_Icon' />
                <img src={VueIcon} alt='Vue_Icon' />


                <h3>資格</h3>
                <h4>IT関連</h4>
                <ul>
                    <li>
                        ITパスポート試験(2020年06月)
                    </li>
                    <li>
                        Excel VBAスタンダード(2020年02月)
                    </li>
                </ul>

                <h4>その他</h4>
                <ul>
                    <li>
                        TOEIC785点(2018年06月)
                    </li>
                    <li>
                        日商ビジネス英語検定3級(2018年04月)
                    </li>
                    <li>
                        日商簿記3級(2017年02月)
                    </li>
                </ul>
            </div>
        );
    }
}