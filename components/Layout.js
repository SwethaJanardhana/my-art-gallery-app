import Navigation from "./Navigation";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background: gray;
  gap: 2rem;
  color: #eee;
`;

const StyledMain = styled.main`
  margin-bottom: 3rem;
  margin-top: 4rem;
  max-height: 86vh;
  overflow-y: auto;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  background: gray;
  color: #eee;
  padding: 0.7rem;
  text-align: center;
  font-size: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>Art Gallery</StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <Navigation />
      </StyledFooter>
    </>
  );
}
