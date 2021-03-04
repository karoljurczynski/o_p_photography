import React from 'react';
import '../styles/components/footer/footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../img/long_logo_white.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <footer className="footer">

        <section className="footer__about">
          <img className="footer__about__title" src={logo} alt="Logo"/>

          <span className="footer__about__content">
            <a className="footer__about__content__icon" href="tel:+48 213 769 420" ><FaPhone /></a>
            <a className="footer__about__content__text" href="tel:+48 213 769 420">+48 213 769 420</a>
          </span>

          <span className="footer__about__content">
            <a className="footer__about__content__icon" href="mailto:oliwierpakula@gmail.com"><FaEnvelope /></a>
            <a className="footer__about__content__text" href="mailto:oliwierpakula@gmail.com">oliwierpakula@gmail.com</a>
          </span>

          <span className="footer__about__content">
            <span className="footer__about__content__icon"><FaMapMarkerAlt /></span>
            <p className="footer__about__content__text">Wrocław / Częstochowa</p>
          </span>

          <section className="footer__about__social-media">

              <a className="footer__about__social-media__link" href="https://github.com/karoljurczynski" target="blank">
                <span className="footer__about__social-media__link__icon">
                  <FaFacebookF />
                </span>
              </a>

              <a className="footer__about__social-media__link" href="https://github.com/karoljurczynski" target="blank">
                <span className="footer__about__social-media__link__icon">
                  <FaInstagram />
                </span>
              </a>

              <a className="footer__about__social-media__link" href="https://github.com/karoljurczynski" target="blank">
                <span className="footer__about__social-media__link__icon">
                  <FaLinkedin />
                </span>
              </a>
              
              <a className="footer__about__social-media__link" href="https://github.com/karoljurczynski" target="blank">
                <span className="footer__about__social-media__link__icon">
                  <FaLinkedin />
                </span>
              </a>
            </section>

        </section>

        <section className="footer__categories">
          <h4 className="footer__categories__title">CATEGORIES</h4>
          <ul className="footer__categories__list">

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">FEATURED</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">PEOPLE</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">NATURE</a>
            </li>

            <li className="footer__categories__list__item">
              <a className="footer__categories__list__item__content" href="#">ACTS</a>
            </li>

          </ul>
        </section>

        <section className="footer__email">

          <h4 className="footer__email__title">CONTACT ME</h4>
          <form className="footer__email__form">
            <input className="footer__email__form__email-input" type="email" placeholder="E-mail"/>
            <textarea className="footer__email__form__message-input" placeholder="Message"></textarea>
            <input className="footer__email__form__submit-button" type="submit" value="Send" />
          </form>
        </section>

      </footer>

      <span className="footer__copyright">
        <a className="footer__copyright__text" href="https://github.com/karoljurczynski" target="blank">© 2021 Karol Jurczyński</a>
      </span>

      </>
    );
  }
}
export default Footer;