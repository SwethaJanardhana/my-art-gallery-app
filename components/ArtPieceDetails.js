import Image from "next/image";
import { styled } from "styled-components";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";
import Head from "next/head";

const StyledSection = styled.section`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 0.1rem solid gray;
  border-radius: 2rem;
  padding: 1rem;
`;

const StyledPara = styled.p`
  margin: 0 0 1rem 2.2rem;
`;

const StyledDiv = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.07rem solid black;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

export default function ArtPieceDetails({
  piece,
  onToggleFavorite,
  onSubmitComment,
  onDeleteComment,
  onBackgroundSelection,
}) {
  const {
    imageSource,
    name,
    artist,
    year,
    genre,
    isFavorite,
    slug,
    comments,
    colors,
    selectedColor,
  } = piece;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <StyledSection $backgroundColor={selectedColor}>
        <FavoriteButton
          isFavorite={isFavorite}
          slug={slug}
          onToggleFavorite={onToggleFavorite}
        />
        <Image src={imageSource} alt={name} width={100} height={100} />
      </StyledSection>

      <StyledList>
        {colors.map((color) => (
          <li key={color}>
            <StyledDiv
              $color={color}
              onClick={() => onBackgroundSelection(slug, color)}
            ></StyledDiv>
          </li>
        ))}
        <li>
          <StyledDiv
            $color={"white"}
            onClick={() => handleBackground("#000000")}
          ></StyledDiv>
        </li>
      </StyledList>

      <StyledPara>
        <strong>{artist}</strong> : <i>{name}</i>
      </StyledPara>
      <StyledPara>
        {genre} in the year {year}
      </StyledPara>
      {comments && (
        <Comments
          comments={comments}
          slug={slug}
          onDeleteComment={onDeleteComment}
        />
      )}

      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
    </>
  );
}
