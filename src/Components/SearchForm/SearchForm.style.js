import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export const Form = styled.form`
  position: relative;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 15px;
  background-color: #ddd;
`;

export const Icon = styled(BiSearchAlt)`
  position: absolute;
  color: gray;
  left: 10px;
  top: 10px;
`;
