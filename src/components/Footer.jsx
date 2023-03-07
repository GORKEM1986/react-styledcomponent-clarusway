import Container from "./styled/Container.styled";
import FooterStyles from "./styled/FooterStyles.styled";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <div>
          <img src="./images/logo_white.png" alt="" />
          <p>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</p>
          <p>+1 (571) 360 66 77</p>
          <p>contact@clarusway.com</p>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">What We Do?</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <span>
            <RiFacebookCircleLine style={{ fontSize: "2.5rem" }} />
          </span>

          <span>
            <AiFillLinkedin style={{ fontSize: "2.5rem" }} />
          </span>
        </div>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
