import React from "react";
import todokanriVideo from "./WorksPhotos/todokanri.mp4";

const ToDoKanri = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">ToDo管理</h2>
      <div className="contentsBox">
        <p>このアプリは、タスク管理アプリです。</p>
        <p>
          皆さん、毎日色々なタスクを抱えていると思います。家事・育児、難しい勉強などなど...！
        </p>
        <p>
          そんな毎日の作業をちょっと楽しくできるのがこのアプリです！いつも通りタスクを完了していき、1日の終わりに全てのタスクをALL
          DONE！すると、皆さんの頑張りを労ってもらえます！
        </p>
        <p>明日も頑張るために、今日の自分を労ってみませんか？？</p>
      </div>

      <h3>使い方</h3>
      <div className="contentsBox">
        <div className="howtouse">
          <div className="number">
            <span>1</span>
          </div>
          <p>タスクを入力し、追加する。</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>タスクが完了すると、DONEボタンを押す。</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>3</span>
          </div>
          <p>全てのタスクが完了すると、ALL DONE!ボタンを押す！</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>4</span>
          </div>
          <p>あなたを労ってくれます。</p>
        </div>
        <div className="videoBox">
          <video
            src={todokanriVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://todokanri.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              使ってみる！<i className="fas fa-external-link-alt"></i>
            </a>
          </p>
        </div>
      </div>

      <h3>作成したきっかけ</h3>
      <div className="contentsBox">
        <p>
          ただ単にタスクをこなして、完了...という流れは、あまり面白くないと思いました。タスク管理アプリは、決めたタスクを書いて、終わったか終わっていないかを管理するだけではなく、タスクを継続していくためにも、明日、明後日につながる仕組みがあると良いと思いました。そこで、やりきった自分を「褒める」「労う」ことで、「また明日も頑張ろう！」と思うきっかけになるのではと考え、このアプリを思いつきました。
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>Vue.js・Vuex・Vuex PersistedState</p>
        <p>
          <a
            href="https://github.com/azufb/ToDoAppwithPraise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ToDoKanri;
