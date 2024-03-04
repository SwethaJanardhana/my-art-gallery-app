import Link from "next/link";
import { styled } from "styled-components";

const SytledLink = styled(Link)`
  text-decoration: none;
  padding: 0.7rem;
  width: 30%;
  align-items: center;
  color: white;

  &:hover {
    background: orange;
  }
`;

export default function Navigation() {
  return (
    <>
      <SytledLink href="/">Spotlight</SytledLink>
      <SytledLink href="/art-pieces/">Art Pieces</SytledLink>
      <SytledLink href="/favorites/">Favourites</SytledLink>
    </>
  );
}
