import React from "react";
import Button from "./styled/Button.styled";
import Flex from "./styled/Flex.styled";
import Image from "./styled/Image.styled";
import Nav from "./styled/Nav.styled";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" width={"300px"} alt="logo" />
        </div>

        <div>
          <Button color="#af3a53">Apply Courses</Button>
          <Button bg="#af3a53">Tak To Adviser</Button>
        </div>
      </Nav>

      <Flex>
        <div>
            <h1>The IT Career of Your Dreams Starts Here! </h1>
            <p>Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.</p>
            <Button bg="#af3a53">Start your New Carier</Button>
            
        </div>
        <Image src="./images/hero.jpg"/>

      </Flex>



    </div>
  );
};

export default Header;
