import React from 'react';
import styled from '@emotion/styled';
import CrossIcon from '@atlaskit/icon/glyph/cross';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 30px;
    word-break: break-word;
    background-color: #fff;
    padding: 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    justify-content: space-between;
`;

const StyledDelete = styled.button`
    color: #a6a6a6;
    border: none;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: #172b4d;
    }
`;

const StyledParagraph = styled.p`
    max-width: 250px;
`;

export const Card = ({ task, index, onDeleteClick }) => (
    <Container>
        <StyledParagraph>{task}</StyledParagraph>
        <StyledDelete onClick={() => onDeleteClick(index)}><CrossIcon /></StyledDelete>
    </Container>
);