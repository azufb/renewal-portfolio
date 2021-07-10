import React from 'react';
import eventsRecorderVideo from './WorksPhotos/eventsRecorderVideo.mp4';

const EventsRecorder = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">Events Recorder</h2>
      <div className="contentsBox">
        <p>
          <strong>※現在、ブラウザ版のみのご提供となっております。</strong>
        </p>
        <p>
          「これまで参加したイベントなんだっけ？」「このイベントで何やったんだっけ？」「イベントで色々学んだけど、ブログにするほどではないな...」と思ったことはないでしょうか？
        </p>
        <p>
          そんなときは、このEvent
          Recorderで、参加したイベントについて記録してみましょう！
          <br />
          参加したということだけでなく、学んだこと・感じたことなどをコメントとして簡単に残すことで、いつでもそのイベントについて思い出すことができます。
          また、記録に残しておくことでより、学びが定着しやすくなるかもしれませんね！
        </p>
      </div>

      <h3>使い方</h3>
      <div className="contentsBox">
        <div className="howtouse">
          <div className="number">
            <span>1</span>
          </div>
          <p>
            Eventsページにて、イベント名(必須)・タグ2種(必須)・コメント(必須)・イベントURL・参加日(必須)を入力し、登録します。
          </p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>
            登録したイベントがリスト表示されます。詳細ボタンをクリックすると、コメントが表示されます。
            <br />
            また、編集ボタンで、イベント名やコメント、イベントURL、参加日を編集することも可能です。
          </p>
        </div>
        <div className="videoBox">
          <video
            src={eventsRecorderVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
          <p>
            ※デモ動画では、架空のイベントを入力しているため、URLもサンプルとなっております。
          </p>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://event-recorder.vercel.app/"
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
          参加したイベントを記録する必要が出てきたとき、イベントを申し込むサイトでは、参加済みのイベントを探しにくく感じていました。
          <br />
          そこで、自分で、見やすく管理できるアプリケーションを作ってみようと考えました。
          <br />
          さらに、参加した感想・学んだことも一緒に記録することで、イベントがどういうものだったのか、思い出すきっかけにもなると思います。
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>React.js・React Router・Redux・Material UI</p>
        <p>データの保存は、Local Storage利用。</p>
      </div>
    </div>
  );
};

export default EventsRecorder;
