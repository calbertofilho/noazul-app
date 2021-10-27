import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  width: 70%;
  text-align: center;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;
