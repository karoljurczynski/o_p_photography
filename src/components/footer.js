import React from 'react';
import '../styles/components/footer/footer';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">


        <section className="footer__about">
          <h4 className="footer__about__title"> </h4>

          <span className="footer__about__content">
            <span className="footer__about__content__icon"> </span>
            <p className="footer__about__content__text"> </p>
          </span>
        </section>


        <section className="footer__categories">
          <h4 className="footer__categories__title"> </h4>
          <ul className="footer__categories__list">

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">FIRST</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">SECOND</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">THIRD</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">FOURTH</a>
            </li>

          </ul>
        </section>


        <section className="footer__email">
          <h4 className="footer__email__title"> </h4>
          <form className="footer__email__form">

            <input className="footer__email__form__email-input" type="email"/>
            <textarea className="footer__email__form__message-input" rows="" cols=""></textarea>
            <input className="footer__email__form__submit-button" type="submit">Send</input>

          </form>
        </section>
      </footer>
    );
  }
}
export default Footer;