import { styled } from "styled-components";

const StyledForm = styled.form`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(slug, data.comment);
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment :</label>

      <textarea id="comment" name="comment" required maxLength={100} />

      <button>Send</button>
    </StyledForm>
  );
}
