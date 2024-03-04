import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error..</h1>;
  }

  let updatedPieces = artPiecesInfo.length ? artPiecesInfo : data;

  function handleFavourite(slug) {
    let arrayAfterFavoritePiece = updatedPieces.map((piece) =>
      piece.slug === slug ? { ...piece, isFavorite: !piece.isFavorite } : piece
    );
    setArtPiecesInfo(arrayAfterFavoritePiece);
  }

  function handleSubmitComment(slug, comment) {
    let arrayAfterComments = updatedPieces.map((piece) => {
      if (piece.slug === slug) {
        const comments = piece.comments ? [...piece.comments] : [];
        const commentObject = { id: uid(), comment: comment };
        comments.push(commentObject);
        piece.comments = comments;
      }
      return piece;
    });
    setArtPiecesInfo(arrayAfterComments);
  }

  function handleDeleteComment(slug, id) {
    let arrayAfterCommentsDeletion = updatedPieces.filter((piece) => {
      if (piece.slug === slug) {
        const updatedComments = piece.comments.filter(
          (comment) => comment.id !== id
        );
        piece.comments = updatedComments;
      }
      return piece;
    });
    setArtPiecesInfo(arrayAfterCommentsDeletion);
  }

  function handleBackgroundSelection(slug, color) {
    let arrayAfterBackgroundSelection = updatedPieces.map((piece) =>
      piece.slug === slug ? { ...piece, selectedColor: color } : piece
    );
    setArtPiecesInfo(arrayAfterBackgroundSelection);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          data={updatedPieces}
          onToggleFavorite={handleFavourite}
          onSubmitComment={handleSubmitComment}
          onDeleteComment={handleDeleteComment}
          onBackgroundSelection={handleBackgroundSelection}
        />
      </Layout>
    </>
  );
}
