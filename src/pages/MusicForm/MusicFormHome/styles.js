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
    margin-top: 20px; 
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
    display: flex;
    flex-direction: column;
    color: #131313;
    font-size: 20px;
    position: absolute; 
    left: 0; 
    top: 270px;
`;

export const ElementList = styled.li`   
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 40px;
    margin-top: 20px;
    margin-right: 20px;
    color: #131313;
    font-size: 20px;

`;