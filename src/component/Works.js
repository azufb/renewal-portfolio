import React from "react";
import kyouNoYarukoto from "./Works/WorksPhotos/kyouNoYarukoto.png";
import taskList from "./Works/WorksPhotos/taskList.png";
import ToDoKanri from "./Works/WorksPhotos/ToDoKanri.png";
import tagMemo from "./Works/WorksPhotos/tagMemo.png";
import iceBreakShuffle from "./Works/WorksPhotos/iceBreakShuffle.png";
import homerun from "./Works/WorksPhotos/homerun.png";
import negapuchi from "./Works/WorksPhotos/negaPuchi.png";
import jhpm from "./Works/WorksPhotos/JobHuntingProgressManage.png";
import { NavLink } from "react-router-dom";

const Works = () => {
  return (
    <div className="mainContent">
      <h2 className="pageTitle">Works</h2>
      <div className="contentsBox">
        <p>これまで、私が開発したWebアプリケーションをご紹介致します。</p>
        <ul className="worksDescription">
          <li>
            自分の
            <span className="worksFor">プログラミング学習</span>
            のために開発に挑戦してみたもの。
          </li>
          <li>
            課題・問題に感じたことに対しての、
            <span className="worksFor">1つの解決策</span>
            として開発したもの。
          </li>
        </ul>
        <p>...などなど、色々な個人開発に取り組んできました！</p>
        <p>
          各アプリケーションの詳細ページでは、デモ動画をご覧頂けます。アプリケーションへのリンクもありますので、ぜひ、使ってみてください！
        </p>
      </div>
      <h3 className="worksCategory">タスク管理</h3>
      <div className="contentsBox">
        <div className="cardsList">
          <div className="cards">
            <div className="card">
              <NavLink to="/Works/kyouNoYarukoto">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={kyouNoYarukoto} alt="今日のやること" />
                    <p>詳しくはこちら→</p>
                  </div>
                  <div className="cardTitle">
                    <p className="appTitle">
                      <span className="newApp">NEW</span>今日のやること！
                    </p>
                    <p className="finishedDate">2021年5月7日</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to="/Works/todokanri">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={ToDoKanri} alt="todo管理" />
                    <p>詳しくはこちら→</p>
                  </div>
                  <div className="cardTitle">
                    <p className="appTitle">ToDo管理</p>
                    <p className="finishedDate">2020年9月12日</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to="/Works/taskList">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={taskList} alt="todo管理" />
                    <p>詳しくはこちら→</p>
                  </div>
                  <div className="cardTitle">
                    <p className="appTitle">タスクリスト</p>
                    <p className="finishedDate">2020年7月5日</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <h3 className="worksCategory">日常</h3>
      <div className="contentsBox">
        <div className="cardsList">
          <div className="cards">
            <div className="card">
              <NavLink to="/Works/tagMemo">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={tagMemo} alt="タグメモ！" />
                    <p>詳しくはこちら→</p>
                  </div>

                  <div className="cardTitle">
                    <p className="appTitle">タグメモ！</p>
                    <p className="finishedDate">2020年8月11日</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <h3 className="worksCategory">エンターテインメント</h3>
      <div className="contentsBox">
        <div className="cardsList">
          <div className="cards">
            <div className="card">
              <NavLink to="/Works/negapuchi">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={negapuchi} alt="ネガプチッ！" />
                    <p>詳しくはこちら→</p>
                  </div>

                  <div className="cardTitle">
                    <p className="appTitle">ネガプチッ！</p>
                    <p className="finishedDate">2021年3月26日</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to="/Works/iceBreakShuffle">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={iceBreakShuffle} alt="アイスブレイクシャッフル" />
                    <p>詳しくはこちら→</p>
                  </div>

                  <div className="cardTitle">
                    <p className="appTitle">アイスブレイクシャッフル</p>
                    <p className="finishedDate">2021年2月9日</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to="/Works/homerun">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={homerun} alt="ほめるん" />
                    <p>詳しくはこちら→</p>
                  </div>

                  <div className="cardTitle">
                    <p className="appTitle">ほめるん</p>
                    <p className="finishedDate">2020年7月19日</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <h3 className="worksCategory">就職活動</h3>
      <div className="contentsBox">
        <div className="cardsList">
          <div className="cards">
            <div className="card">
              <NavLink to="/Works/jobHuntingProgressManage">
                <div className="cardContents">
                  <div className="worksImgs">
                    <img src={jhpm} alt="jhpm" />
                    <p>詳しくはこちら→</p>
                  </div>

                  <div className="cardTitle">
                    <p className="appTitle">Job Hunting Progress Manage</p>
                    <p className="finishedDate">2020年10月24日</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
