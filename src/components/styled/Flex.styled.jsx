import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;

  /* @media (max-width: 700px) {
    flex-direction: column;
 } */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
  /* @media (max-width: 357px) {
    text-align: center;
 } */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
  & div {
    flex: 2;
  }
`;

export default Flex;
