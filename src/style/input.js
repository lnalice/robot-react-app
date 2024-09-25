import styled from 'styled-components';

const BasicInput = styled.input`
    line-height: 18px;
    color: var(--fgColor-default, var(--color-fg-default, #1F2328));
    vertical-align: middle;
    background-color: var(--bgColor-default, var(--color-canvas-default, #ffffff));
    border: 1px solid var(--control-borderColor-rest, var(--borderColor-default, var(--color-border-default, #d0d7de)));
    border-radius: 6px;
    outline: none;
    box-shadow: var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(208, 215, 222, 0.2)));
    -webkit-box-align: stretch;
    align-items: stretch;
    min-height: 32px;
    min-width: 300px;
    padding: 3px;
`;


export default BasicInput;