import React from "react";
import icebreakshuffleVideo from "./WorksPhotos/icebreakshuffleVideo.mp4";

export default class IBS extends React.Component {
  render() {
    return (
      <div className="detailContents">
        <h2 className="detailTitle">アイスブレイクシャッフル</h2>
        <div className="contentsBox">
          <p>
            話す話題に困ったことってありませんか？そんなときは、「アイスブレイクシャッフル」に頼ってみませんか？
          </p>
          <p>
            このアプリは、相手と話してみたい話題をシャッフル形式で出してくれます。
          </p>
          <p>
            入力したいくつかの話題から、ランダムで出てくるので、その場の雰囲気も柔らかくなるかも！
          </p>
        </div>

        <h3>使い方</h3>
        <div className="contentsBox">
          <div className="howtouse">
            <div className="number">
              <span>1</span>
            </div>
            <p>入力欄に話のネタを1つずつ入力して追加。</p>
          </div>
          <div className="howtouse">
            <div className="number">
              <span>2</span>
            </div>
            <p>シャッフルボタンを押す！</p>
          </div>
          <div className="howtouse">
            <div className="number">
              <span>3</span>
            </div>
            <p>何度か押すと、次々に別のネタが出てきます。</p>
          </div>
          <div className="videoBox">
            <video
              src={icebreakshuffleVideo}
              controls
              className="video"
              controlsList="nodownload"
            ></video>
          </div>
          <div className="appLink">
            <p>
              <a
                href="https://random-ice-break.vercel.app/"
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
            社内コミュニケーション活性化のために始まった企画で、雑談をすることになって、そんなとき、リストアップされた話題を順番に話すより、ランダムで出てきた方が面白いと考えたことがきっかけです。
          </p>
        </div>

        <h3>使用技術</h3>
        <div className="contentsBox">
          <p>React</p>
          <p>
            <a
              href="https://github.com/azufb/randomIceBreak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
