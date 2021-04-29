import React from "react";
import taskList from "./works/worksPhotos/taskList.png";
import ToDoKanri from "./works/worksPhotos/ToDoKanri.png";
import tagMemo from "./works/worksPhotos/tagMemo.png";
import iceBreakShuffle from "./works/worksPhotos/iceBreakShuffle.png";
import homerun from "./works/worksPhotos/homerun.png";
import negapuchi from "./works/worksPhotos/negaPuchi.png";
import jhpm from "./works/worksPhotos/JobHuntingProgressManage.png";
import { NavLink } from "react-router-dom";

export default class Works extends React.Component {
  render() {
    return (
      <div className="works">
        <h2 className="pageTitle">Works</h2>
        <div className="contentsBox">
          <p>
            プログラミングを勉強している過程で開発したWebアプリケーションをご紹介致します。
            <br />
            技術の学習のために開発に挑戦してみたもの、自分が課題・問題に感じたことに対して、1つの解決策として開発したものなど、様々なアプリケーションを開発しています。
          </p>
        </div>
        <h3 className="worksCategory">タスク管理</h3>
        <div className="contentsBox">
          <div className="cardsList">
            <div className="cards">
              <div className="card">
                <NavLink to="/Works/todokanri">
                  <div className="cardContents">
                    <div className="worksImgs">
                      <img src={ToDoKanri} alt="todo管理" />
                      <p>詳しくはこちら→</p>
                    </div>
                    <p>
                      ToDo管理
                      <br />
                      <span className="finishedDate">2020年9月12日</span>
                    </p>
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
                    <p>
                      タスクリスト
                      <br />
                      <span className="finishedDate">2020年7月5日</span>
                    </p>
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

                    <p>
                      タグメモ！
                      <br />
                      <span className="finishedDate">2020年8月11日</span>
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <h3 className="worksCategory">エンタメ</h3>
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

                    <p>
                      ネガプチッ！
                      <br />
                      <span className="finishedDate">2021年3月26日</span>
                    </p>
                  </div>
                </NavLink>
              </div>
              <div className="card">
                <NavLink to="/Works/iceBreakShuffle">
                  <div className="cardContents">
                    <div className="worksImgs">
                      <img
                        src={iceBreakShuffle}
                        alt="アイスブレイクシャッフル"
                      />
                      <p>詳しくはこちら→</p>
                    </div>

                    <p>
                      アイスブレイクシャッフル
                      <br />
                      <span className="finishedDate">2021年2月9日</span>
                    </p>
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

                    <p>
                      ほめるん
                      <br />
                      <span className="finishedDate">2020年7月19日</span>
                    </p>
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

                    <p>
                      Job Hunting Progress Manage
                      <br />
                      <span className="finishedDate">2020年10月24日</span>
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
