import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #000;
  border-radius: 7px;
  margin-left: 14px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px; 
  text-align: center;
`;

export const ElementList = styled.li`
  border: 2px solid #000;
  border-radius: 7px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
