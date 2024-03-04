import Image from "next/image";
import { styled } from "styled-components";
import Head from "next/head";

const StyledSession = styled.section`
  margin: 2rem;
  border: 0.1rem solid gray;
  background: linear-gradient(orange, pink);
  border-radius: 2rem;
  padding: 1rem;
  margin: 1rem;
`;

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      <StyledSession>
        <p>{artist}</p>
        <Image
          src={image}
          alt="Spotlight random pic"
          width={100}
          height={100}
        />
      </StyledSession>
    </>
  );
}
