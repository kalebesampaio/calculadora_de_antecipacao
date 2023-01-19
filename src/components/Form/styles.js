import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  label {
    margin-top: 30px;
    font-family: "SourceSansPro";
    font-size: 14px;
    color: #656565;
    padding: 5px;
  }
  input {
    padding: 5px;
    background: #ffffff;
    border: 1px solid #dde6e9;
    font-family: "SourceSansPro";
    font-weight: bold;
    border-radius: 4px;
    width: 70%;
    height: 35px;
  }
  span {
    font-family: "SourceSansPro";
    font-size: 11px;

    color: #cecece;
  }

  input:hover {
    border: #66afe9 1px solid;
  }
  button {
    margin-top: 7%;
    color: #656565;
    border: #656565 1px solid;
    width: 50%;
    margin-left: 45%;
    border-radius: 15px;
    font-family: "SourceSansPro";
    cursor: pointer;
    :hover {
      border: #66afe9 1px solid;
      color: #66afe9;
    }
  }
`;
