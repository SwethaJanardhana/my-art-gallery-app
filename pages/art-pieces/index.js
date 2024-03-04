import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  onToggleFavorite,
  onBackgroundSelection,
}) {
  return (
    <ArtPieces
      pieces={data}
      onToggleFavorite={onToggleFavorite}
      onBackgroundSelection={onBackgroundSelection}
    />
  );
}
