import React from "react";
import homerunVideo from "./WorksPhotos/homerunVideo.mp4";
import homeusaQR from "./../../homeusa_qr.png";

const Homerun = () => {
  return (
    <div className="mainContent">
      <h2 className="detailTitle">ほめるん</h2>
      <div className="contentsBox">
        <p>毎日、皆さん、頑張って生きています。その自分を褒めてみませんか？</p>
        <p>このアプリは、チャットボットアプリです。</p>
        <p>
          「今日は、嫌なことがあった...」や「大きな失敗をしてしまった...落ち込んでしまった...」など、日々、色々な感情があると思います。
        </p>
        <p>
          そんなとき、このアプリに感情を吐き出してみて下さい。何があったのか吐き出してみて下さい。必ず、褒め言葉、労いの言葉を返してくれます。
        </p>
        <p>
          嫌なことがあった方、失敗をしてしまった方...皆さん日々何かと戦っていて、一生懸命頑張っています。そんな頑張り屋さんな自分をたまには褒めてあげませんか？
        </p>
      </div>

      <h3>使い方</h3>
      <div className="contentsBox">
        <div className="howtouse">
          <div className="number">
            <span>1</span>
          </div>
          <p>
            その日に思ったことや、その日に起こった出来事などをメッセージとして送ります。
          </p>
        </div>
        <div className="howtouse">
          <div className="number">
            <span>2</span>
          </div>
          <p>ボットがあなたに対して、褒め言葉や労いの言葉を返してくれます！</p>
        </div>
        <div className="videoBox">
          <video
            src={homerunVideo}
            controls
            className="video"
            controlsList="nodownload"
          ></video>
        </div>
        <div className="appLink">
          <p>
            <a
              href="https://boiling-garden-35201.herokuapp.com/"
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
          自分が、精神的にしんどくなってしまったときに、カウンセラーの方から「自分を褒めることが大切だ」とアドバイスを頂きました。自分を褒めて自分を認めること。確かに、「今日も色んなことがあったけれど、よく頑張ったね！」という気持ちになれれば、心がスッキリします。
          <br />
          ただ、自分で自分を褒めるのはちょっと...という気持ちがありました。誰かに褒めてもらうように頼むのもなんか違うような...と感じ、「誰かに褒めてもらっている感覚」が得られると良いのではないかと考え、このチャットボットを開発することを決めました！
        </p>
      </div>

      <h3>使用技術</h3>
      <div className="contentsBox">
        <p>React・React Simple Chatbot</p>
        <p>
          <a
            href="https://github.com/azufb/ReactChatBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
        </p>
      </div>
      <h3>LINE Bot「ほめうさ」もあるよ！</h3>
      <div className="contentsBox">
        <div className="homeusa">
          <div>
            <p>
              「ほめるん」をLINE Bot化した、<strong>「ほめうさ」</strong>
              もあります。
            </p>
            <p>
              たまたま職場の方に「ほめるん」を使って頂いたときに、「何度も入力できる方が良いのでは？」などのアドバイスを頂きました。
              <br />
              私自身、「ほめるん」をチャットボット形式で実現したかった理由としては、誰かとコミュニケーションをとっているのと同じような感覚で、感情を吐き出せる場を作りたいと考えたからでした。
              <br />
              通常、LINEなどの連絡手段で、コミュニケーションをとることが多い時代に、用意された企業サイトのQAチャットボットのような枠内に入力して、返信を待って...と言う流れは、リアリティに欠けているということに気が付きました。
            </p>
            <p>
              そのため、アドバイスを頂いたのを機に、LINE
              Botにすることで、円滑な入力に改善でき、より自分が理想としていたリアリティのある状態が実現するのではないかと考え、
              <strong>「ほめうさ」</strong>の開発に踏み切りました。
            </p>
            <p>
              <strong>「ほめうさ」</strong>
              では、より多くの褒め言葉のバリエーションがあるので、様々な返答を楽しむことができます！
              <br />
              また、特定の言葉に対しては、いつもと違った返答をしてくれるので、お楽しみに！
            </p>
            <p>ぜひ、一度使ってみてください！</p>
          </div>
          <img src={homeusaQR} alt="homeusa" className="homeusaqr" />
          <figcaption>「ほめうさ」QRコードはこちら！</figcaption>
        </div>
      </div>
    </div>
  );
};

export default Homerun;
