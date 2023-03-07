import styled from 'styled-components';

const CardStyles = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 1rem;
  
  &:nth-child(odd){
    flex-direction: row-reverse;
  }
  &:nth-child(even){
    flex-direction: row;
  }
  
  & img{
    width: 300px;
    margin: auto;
  }
  & .img{
    text-align: center;
  }
  & div{   
    flex: 1;
    padding: 3rem 4rem;
  }
`;

export default CardStyles;
