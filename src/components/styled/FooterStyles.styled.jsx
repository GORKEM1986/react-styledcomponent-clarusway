import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #8A1C4A;
  font-size: 1.2rem;
  & p{
    opacity: 1;
    
  }
  & img{
    width: 300px;       
  };
  color: white;
  padding: 8rem 0rem;
  
  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & li{
    list-style-type: none;
  }
  & a{
    text-decoration: none;
    color: white;
    line-height: 2;
  }
  & span{
    margin-right: .8rem;
  }
  
`;

export default FooterStyles;
