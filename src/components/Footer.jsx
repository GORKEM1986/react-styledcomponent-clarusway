import Container from "./styled/Container.styled";
import FooterStyles from "./styled/FooterStyles.styled";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import A from "styled-components";

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
              <A href="#">About</A>
            </li>
            <li>
              <A href="#">What We Do?</A>
            </li>
            <li>
              <A href="#">FAQ</A>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <A href="#">Career</A>
            </li>
            <li>
              <A href="#">Blog</A>
            </li>
            <li>
              <A href="#">Contact Us</A>
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
