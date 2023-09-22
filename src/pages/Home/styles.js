import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  color: #333;
`;

export const Header = styled.header`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export const Section = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  font-size: 1rem;
  color: #777;
`;
