import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="profile">
                <h2>Profile</h2>
                <h3>名前：</h3>
                <p>Azusa</p>

                <h3>SNSなど：</h3>
                <p>
                    <a href='https://twitter.com/azunasuuu' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter-square fa-3x'></i>
                    </a>
                    <a href='https://github.com/azufb' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github fa-3x'></i>
                    </a>
                    <br />
                    <a href='https://qiita.com/azunas' target='_blank' rel='noopener noreferrer'>
                        Qiitaはこちら！<i className="fas fa-external-link-alt"></i>
                    </a>
                </p>

                <h3>趣味：</h3>
                <p>
                    最近は、読書をよくしています。<br />
                    自己啓発系統も読みますし、経営論のようなビジネスジャンルも読みます。
                </p>

                <h3>経歴：</h3>
                <ul className='timeline'>
                    <li>
                        <p className='timeline-date'>1998年2月</p>
                        <div className='timeline-content'>
                            <h3>誕生</h3>
                            <p>兵庫県に生まれる。</p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2013年4月</p>
                        <div className='timeline-content'>
                            <h3>高校入学</h3>
                            <p>
                                兵庫県立国際高等学校に入学。<br />
                                小学5年生〜中学3年生まで、英会話を習っており、英語教育に力を入れている高校を選択。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2014年10月</p>
                        <div className='timeline-content'>
                            <h3>海外研修(約1週間)</h3>
                            <p>
                                修学旅行がない高校だったが、海外研修はあった。<br />
                                アメリカ・シアトルを選択し、初めて海外へ渡航！<br />
                                この時、海外食品に魅力を感じ、将来は、食品商社で働きたいと考えた。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2016年3月</p>
                        <div className='timeline-content'>
                            <h3>高校卒業</h3>
                            <p>兵庫県立国際高等学校を卒業。</p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2016年4月</p>
                        <div className='timeline-content'>
                            <h3>大学入学</h3>
                            <p>
                                関西学院大学 商学部に入学。<br />
                                貿易に興味があった且つ英語以外についても学びたかったため、商学部を選択。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2017年8月</p>
                        <div className='timeline-content'>
                            <h3>海外インターンシップ(約1ヶ月間)</h3>
                            <p>
                                アメリカ・ロサンゼルスにある日系企業にて、インターンシップに参加。<br />
                                現地では、語学学校にて勤務。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2019年4月</p>
                        <div className='timeline-content'>
                            <h3>Excel VBAとの出会い...</h3>
                            <p>
                                Excel VBAの授業を履修し、自分が書いたコードの通りにExcelが動いたことに感激。<br />
                                この授業がきっかけとなり、エンジニアの仕事に興味を持つ。
                            </p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2020年3月</p>
                        <div className='timeline-content'>
                            <h3>大学卒業</h3>
                            <p>関西学院大学 商学部を卒業。</p>
                        </div>
                    </li>
                    <li>
                        <p className='timeline-date'>2020年10月</p>
                        <div className='timeline-content'>
                            <h3>アルバイトを開始。</h3>
                            <p>
                                エンジニアを目指して、アルバイトを開始。<br />
                                主に、CMSを使って、サイト保守を行っている。
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}