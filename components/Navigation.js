import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const SytledLink = styled(Link)`
  text-decoration: none;
  padding: 0.7rem 0;
  width: 33.3%;
  align-items: center;
  color: white;
  text-align: center;

  &:hover {
    background: orange;
  }
`;

export default function Navigation() {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;
  return (
    <>
      <SytledLink href="/" className={isActive("/") ? "active" : ""}>
        Spotlight
      </SytledLink>
      <SytledLink
        href="/art-pieces/"
        className={isActive("/art-pieces") ? "active" : ""}
      >
        Art Pieces
      </SytledLink>
      <SytledLink
        href="/favorites/"
        className={isActive("/favorites") ? "active" : ""}
      >
        Favourites
      </SytledLink>
    </>
  );
}
