import ArtPiecePreview from "./ArtPiecePreview";
import { styled } from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

export default function ArtPieces({
  pieces,
  onToggleFavorite,
  onBackgroundSelection,
}) {
  return (
    <StyledList>
      {pieces.length > 0 ? (
        pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              isFavorite={piece.isFavorite}
              selectedColor={piece.selectedColor}
              onBackgroundSelection={onBackgroundSelection}
            />
          </li>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </StyledList>
  );
}
