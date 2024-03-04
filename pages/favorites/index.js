import ArtPieces from "@/components/ArtPieces";
import Head from "next/head";

export default function FavoritePage({ data, onToggleFavorite }) {
  let filteredPieces = data.filter((piece) => piece.isFavorite === true);
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <ArtPieces pieces={filteredPieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
