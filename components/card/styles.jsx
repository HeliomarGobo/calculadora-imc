import styled from "styled-components/native";

export const BaseCard = styled.View`
  background-color: #ffffff;
  border: 1px solid #e7ecf3;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex: 1;
`;

export const BaseCardValue = styled(BaseCard)`
  height: 150px;
`;

export const BaseCardBmi = styled(BaseCard)`
  flex: none;
  padding: 32px;
`;
