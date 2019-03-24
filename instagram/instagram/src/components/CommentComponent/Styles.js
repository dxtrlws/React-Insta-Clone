import styled from "styled-components";

const FormComment = styled.form`
  display: flex;
`;

const Comment = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #fafafa;

  &::placeholder {
    font-size: 14px;
    font-weight: bold;
    color: darkgray;
  }
`;

export {FormComment, Comment}