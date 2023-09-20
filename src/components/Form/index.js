import React from 'react';

import { Container,Title } from './styles';

export default function Form({title}) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>    
    );
}