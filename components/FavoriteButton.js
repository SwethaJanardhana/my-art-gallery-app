import Heart from "@/public/assets/heart.svg";
import { styled } from "styled-components";

const StyledButton = styled.button`
  fill: ${({ $isFavorite }) => ($isFavorite ? "red" : "green")};
  width: 2.5rem;
  position: absolute;
  right: 1rem;
  alt: "favourite";
  cursor: pointer;
  background: transparent;
  border: none;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <StyledButton
      $isFavorite={isFavorite}
      onClick={() => onToggleFavorite(slug)}
    >
      <Heart />
    </StyledButton>
  );
}
