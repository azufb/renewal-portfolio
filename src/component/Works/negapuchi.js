import React from "react";
import negapuchiVideo from "./WorksPhotos/negapuchiVideo.mp4";

const Negapuchi = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">ネガプチッ！</h2>
      <div className="contentsBox">
        <p>
          冷たく言い放たれて受け止めきれない...でも、仕事の話だからスルーすることができない...！
          <br />
          そんなとき、この「ネガプチッ！」を使って、送られてきた文章を絵文字や「！(エクスクラメーションマーク)」で彩り、柔らかく、受け止めやすく、変換してみませんか？
        </p>
        <p>
          このアプリケーションは、あなたとメッセージの送り主の緩衝材(プチプチ)です。
        </p>
        <p>
          リモートワークが普及し、ビデオ会議をすることも増えましたが、チャットで会話し、連絡を取ることも増えたのではないでしょうか？
        </p>
        <p>
          文章の書き方は人それぞれ。絵文字を使う人もいれば、全く使わない人もいます。これまでは、顔を見て、声を聞いて話をしていたのに、「急に冷たくなった？」「あれ、なんかこの人怖いな...」と感じるようになった人もいると思います。
        </p>
        <p>
          顔を合わせていれば、表情がわかります。声を聞いていれば、声の調子がわかります。笑って冗談を言っているのかもしれないし、とても落ち込んで辛い気持ちなのかもしれない...。でも、テキストだと、その発言の「背景」が見えにくい！
        </p>
        <p>
          そんなとき、ネガティブな印象の文章との間に「プチッ！」と緩衝材(このアプリ)を挟んでみて下さい！冷たい印象、ネガティブな印象を受けていたテキストも、絵文字付きで、元気な印象に変身！少し、受け止めやすくなるかもしれないです！
        </p>
      </div>

      <h3>使い方</h3>
      <div className="contentsBox">
        <div className="howtouse">
          <div className="number">
            <span>1</span>
          </div>
          <p>
            誰かから送られてきた受け止めきれないようなテキストを入力。コピペでOK！
          </p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>
            プチッ！とボタンを押すと、絵文字付きで元気なテキストが表示されます！
          </p>
        </div>
        <div className="videoBox">
          <video
            src={negapuchiVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://negapuchi.netlify.app/"
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
          仕事で、リモートワーク普及による問題点について調べていたときに、「チャットアプリなどを使って、テキストでコミュニケーションをとることが増え、表情や声の調子などの非言語情報が不足し、誤解を与えやすい」と知りました。自分自身も、面と向かって話すと何でもないような文章でも、絵文字のないテキストで送られてきて、落ち込んだことがあります。しかし、相手に文章の書き方を変えて下さいとは言いづらいですし、その人のこだわりがあるでしょう。そこで、送られてきた側が、そのテキストを受け止める段階で、緩和できれば...と思い、開発してみました！
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>React</p>
        <p>
          <a
            href="https://github.com/azufb/negapuchi"
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

export default Negapuchi;
