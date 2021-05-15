import React from "react";
import kyounoyarukotoVideo from "./WorksPhotos/kyouNoYarukoto.mp4";

const KyouNoYarukoto = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">今日のやること！</h2>
      <div className="contentsBox">
        <p>タスク管理アプリケーションです。</p>
        <p>
          その日に取り組む予定のタスクを入力して追加し、終了したら、「完了！」エリアに移動させることができます！
        </p>
        <p>
          「今日はやりたくないな...明日やろうかな...」と先延ばしにしてしまうことってありませんか？
          <br />
          このアプリケーションは、先延ばしにしようとしたあなたを応援することができます！一覧から削除しようとすると、「このまま先延ばしにして良いのですか？」と聞かれる仕組みになっています！
        </p>
        <p>
          もちろん、頑張って全てのタスクに挑んだあなたに祝福もしてくれます！
        </p>
        <p>ついつい先延ばしにしてしまいがちなあなた！一度使ってみませんか？</p>
        <p className="textAlert">
          ※もちろん、先延ばしにしないことを強制するものではありません。ご自身の体調や、タスクの優先順位をもとに、ご決定頂くことを推奨致します。
        </p>
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
          <p>1つのタスクが完了すれば、完了ボタンを押す。</p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>3</span>
          </div>
          <p>
            タスクの名前を編集する場合は、編集ボタンを押し、変更し、保存ボタンを押します。
          </p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>4</span>
          </div>
          <p>
            タスク一覧からタスクを削除する場合は、一度、「このまま先延ばしにして良いのですか？」と確認してきます。
            <br />
            キャンセルを押すと、応援してくれます！
          </p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>5</span>
          </div>
          <p>
            全てのタスクを完了すると、「おめでとう！達成できたね！」と祝福してくれます。
          </p>
        </div>
        <div className="videoBox">
          <video
            src={kyounoyarukotoVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
          <p>
            ※デモ動画は、2021年5月15日に録画したものです。
            <br />
            日付は、ご使用頂く日に合わせて変化します。
          </p>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://kyou-no-yarukoto.vercel.app/"
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
          新たに携わることになった案件では、React
          Hooksを使用していることがわかり、それまでは、React
          Hooksをほとんど使ったことがなかったので、勉強のために作成しました。
          <br />
          手っ取り早く開発するには、何が良いか考えたところ、タスク管理アプリケーションになりました。
        </p>
        <p>
          Udemyで、React
          Hooksの講座を受講し、すぐに、こちらの開発に取り掛かりました。
        </p>
        <p>
          今回は、今まで作ったことがなかった編集機能にも初めて挑戦してみました。
        </p>
        <p>
          また、「このまま先延ばしにして良いのですか？」と聞いてくる仕組みは、「今日はやめておこう」と思っても、自分に問いかけることで、一時の感情ではなく、考える機会を得ることができます。
          そのため、本当に今日やらなくて良いのか、自分で考え、決めることができます。
        </p>
        <p>
          さらに、moment.jsも、案件にて使われていたので、日付を表示する部分で使用してみました。日付部分は、毎日切り替わります！
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>React・Bootstrap</p>
        <p>
          <a
            href="https://github.com/azufb/Hooks-Todo"
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

export default KyouNoYarukoto;
