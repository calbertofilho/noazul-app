import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 15px gray;
  border-radius: 10px;
  margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightSteelBlue;
    border-radius: 5px;
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightSteelBlue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightSteelBlue;
    border-radius: 5px;
    background-color: lightSteelBlue; {/* #B0C4DE */}
    color: black;
    cursor: pointer;
    &:hover {
        background-color: steelBlue; {/* #4682B4 */}
        color: white;
    }
`;
