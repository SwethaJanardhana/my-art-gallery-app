import { styled } from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  height: 17vh;
  overflow-y: scroll;
`;

const StyledListItem = styled.li`
  background: lightgray;
  padding: 0.5rem;
  width: 95%;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background: grey;
  }
`;

const StyledSpan = styled.span`
  color: white;
  float: right;
  cursor: pointer;
  padding-right: 1rem;
  font: bold;

  &:hover {
    color: red;
  }
`;

export default function Comments({ comments, onDeleteComment, slug }) {
  return (
    <section>
      <h2>Comments </h2>
      <StyledList>
        {comments.map((comment) => (
          <StyledListItem key={comment.id}>
            {comment.comment}
            <StyledSpan onClick={() => onDeleteComment(slug, comment.id)}>
              X
            </StyledSpan>
          </StyledListItem>
        ))}
      </StyledList>
    </section>
  );
}
