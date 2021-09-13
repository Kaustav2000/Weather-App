import styled from "styled-components";
import { LeftPanelIcon } from "../../Global.style";

export const Left = styled.aside`
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: white; */
  justify-content: center;
  border-right: 0.1px solid #ccc;
  box-shadow: 6px 1px 5px -1px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 6px 1px 5px -1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 6px 1px 5px -1px rgba(0, 0, 0, 0.09);
`;
export const Logo = styled(LeftPanelIcon)`
  &:hover {
    color: ${(props) => props.color && props.color};
  }
  ${LeftPanelIcon}
`;
