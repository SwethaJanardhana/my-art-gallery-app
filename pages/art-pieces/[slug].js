import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import LeftArrow from "@/public/assets/arrow-left.svg";
import { styled } from "styled-components";
import Link from "next/link";

const StyledLeftArrow = styled(LeftArrow)`
  width: 2rem;
`;

const StyledSection = styled.section`
  margin: 1rem;
`;

export default function ArtPieceDetailsPage({
  data,
  onToggleFavorite,
  onSubmitComment,
  onDeleteComment,
  onBackgroundSelection,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = data.find((piece) => piece.slug === slug);

  return (
    <StyledSection>
      <Link href="/art-pieces/">
        <StyledLeftArrow />
      </Link>

      <ArtPieceDetails
        piece={piece}
        onToggleFavorite={onToggleFavorite}
        onDeleteComment={onDeleteComment}
        onSubmitComment={onSubmitComment}
        onBackgroundSelection={onBackgroundSelection}
      />
    </StyledSection>
  );
}
