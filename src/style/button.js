import styled from 'styled-components';

const BasicButton = styled.button`
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    appearance: none;
    user-select: none;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 32px;
    min-width: max-content;
    color: #24292f;
    background-color: #f6f8fa;
    box-shadow: 0 1px 0 rgba(31, 35, 40, 0.04);
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: rgba(31, 35, 40, 0.15);
    text-decoration: none;
    padding: 0px 12px;
    gap: 8px;
    margin: 3px;
`;


export default BasicButton;