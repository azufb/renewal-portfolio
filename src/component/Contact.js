import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mail, setMail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const confirmContact = window.confirm('お問い合わせを送信して良いですか？');

    if (confirmContact) {
      const userID = process.env.REACT_APP_USER_ID;
      const emailjsServeiceID = process.env.REACT_APP_EMAILJSSERVICE_ID;
      const templateID = process.env.REACT_APP_TEMPLATE_ID;

      if (
        userID !== undefined &&
        emailjsServeiceID !== undefined &&
        templateID !== undefined
      ) {
        init(userID);

        const template_param = {
          to_name: name,
          company: company,
          from_email: mail,
          title: title,
          message: message,
        };

        send(emailjsServeiceID, templateID, template_param).then(() => {
          window.alert('お問い合わせを送信致しました。');

          setName('');
          setCompany('');
          setMail('');
          setMessage('');
          setTitle('');
        });
      }
    }
  };

  const disableSend =
    name === '' || mail === '' || title === '' || message === '';

  return (
    <div className="mainContent">
      <h2 className="pageTitle">お問い合わせ</h2>
      <div className="contentsBox">
        <p>
          お問い合わせは、以下のフォームから受け付けております。
          <br />
          SNSからのご連絡でも大丈夫です！
        </p>
        <form>
          <div>
            <label htmlFor="nameForm">ご氏名：</label>
          </div>
          <input
            type="text"
            id="nameForm"
            className="formInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <label htmlFor="companyNameForm">会社名：</label>
          </div>
          <input
            type="text"
            id="companyNameForm"
            className="formInput"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <div>
            <label htmlFor="mailForm">メールアドレス：</label>
          </div>
          <input
            type="email"
            id="mailForm"
            className="formInput"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <div>
            <label htmlFor="mailTitleForm">件名：</label>
          </div>
          <input
            type="text"
            id="mailTitleForm"
            className="formInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label htmlFor="mailContentForm">お問い合わせ内容：</label>
          </div>
          <textarea
            type="text"
            id="mailContentForm"
            className="formInput"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <Button
              variant="contained"
              color="default"
              endIcon={<SendIcon />}
              onClick={handleClick}
              disabled={disableSend}
            >
              <strong>お問い合わせを送信する</strong>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
