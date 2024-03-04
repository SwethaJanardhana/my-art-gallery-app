import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { styled } from "styled-components";

const StyledSection = styled.section`
  border: 0.1rem solid gray;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 2rem;
  padding: 1rem;
  margin: 1rem 1rem 0 1rem;
  position: relative;
  align-items: center;
`;

const StyledPara = styled.p`
  margin: 0 0 2rem 2.2rem;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  isFavorite,
  selectedColor,
}) {
  return (
    <>
      <StyledSection $backgroundColor={selectedColor}>
        <FavoriteButton
          isFavorite={isFavorite}
          slug={slug}
          onToggleFavorite={onToggleFavorite}
        />
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} alt={title} width={100} height={100} />
        </Link>
      </StyledSection>

      <StyledPara>
        <strong>{title}</strong> by <i>{artist}</i>
      </StyledPara>
    </>
  );
}
