import styled from "styled-components";
import img from "../../assets/img/city.jpg";

export const Image = styled.div`
  background: url(${img}) center center/cover no-repeat;
  border-radius: 30px;
  margin-bottom: 10px;
  height: 30vh;
  padding: 50px 0 0 50px;
`;

export const City = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
`;

export const Country = styled.p`
  font-weight: lighter;
  color: white;
  margin-bottom: 20px;
`;

export const Temp = styled.h1`
  font-weight: 500;
  color: white;
`;
