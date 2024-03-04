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

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <StyledFooter>
        <Navigation />
      </StyledFooter>
    </>
  );
}
