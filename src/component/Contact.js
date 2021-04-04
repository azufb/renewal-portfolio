import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>お問い合わせ</h2>
                <p>
                    お問い合わせは、以下のフォームから受付しております。<br />
                </p>
                <p>
                    <a href='https://forms.gle/orrcWKjtYrPiXdfx5' className='formLink' target='_blank' rel='noopener noreferrer'>
                        お問い合わせフォームはこちら<i className="fas fa-external-link-alt"></i>
                    </a>
                </p>
            </div>
        );
    }
}