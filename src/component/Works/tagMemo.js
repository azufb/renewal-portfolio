import React from "react";
import tagmemoVideo from "./WorksPhotos/tagmemo.mp4";

const TagMemo = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">タグメモ！</h2>
      <div className="contentsBox">
        <p>
          その場でささっとメモ！...でも後で見返したとき、「あれ...これ何について書いたメモなのか、わからん！仕事関連なのだろうか...？それともプライベートだろうか...？」と悩むことはありませんか？
        </p>
        <p>
          そんなときは、この「タグメモ」を使って、メモをしてみましょう！内容はささっと簡潔に書いても、分類タグを付けることで、断片的な情報でも、仕事に関することなのか、プライベートに関することなのか、お金に関することなのかが区別でき、思い出すヒントになります。
        </p>
        <p>
          使用できる分類タグは、3つ。
          <ul>
            <li>Work・・・仕事関連</li>
            <li>Vacation・・・プライベート関連</li>
            <li>Money・・・お金や家計関連</li>
          </ul>
        </p>
      </div>

      <h3>使い方</h3>
      <div className="contentsBox">
        <div className="howtouse">
          <div className="number">
            <span>1</span>
          </div>
          <p>メモを入力し、分類タグを選択。</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>メモを追加。</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>
            削除したいときには、削除したいメモをドロップダウンから選んで、削除！
          </p>
        </div>
        <div className="videoBox">
          <video
            src={tagmemoVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://tagmemo.netlify.app/"
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
          私自身、メモをするときは、要件だけささっと書いてしまうことが多いのですが、それでも、後で見返したときに、何についてなのかが、わかるように、気が付くことができるようにしておくと便利だと思い、開発しました。
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>React・Redux・Redux Persist</p>
        <p>
          <a
            href="https://github.com/azufb/MemoAppwithRedux"
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

export default TagMemo;
