import styled from 'styled-components';
import React from 'react';
import { ReactComponent as Cleaner } from './cross-gray.svg';

export const FieldWrapperStl = styled.label`
    --primary-accent: #19be6f;
    --secondary-error: #ff3636;
    --secondary-grey: #b6b7ba;
    --secondary-accent-hover: #169056;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    > input,
    > textarea {
        appearance: none;
        border: 1px solid var(--secondary-grey);
        border-radius: 8px;
        padding: 11px 68px 12px 16px;
        font-size: 16px;
        margin-bottom: 3px;
        &::placeholder {
            color: var(--secondary-grey);
        }
        &:hover {
            border-color: var(--primary-accent);
        }
        &:focus {
            outline: none;
            border-color: var(--primary-accent);
            &::placeholder {
                color: transparent;
            }
        }
        &.invalid {
            border-color: var(--secondary-error);
        }
    }

    @media (max-width: 768px) {
        > input,
        > textarea {
            &::placeholder {
                font-size: 14px;
            }
        }
    }
`;

export const LabelStl = styled.span`
    font-weight: 400;
    margin-bottom: 7px;
    line-height: 130%;
    font-size: 14px;
`;

export const ClearStl = styled.svg`
    position: absolute;
    right: 24px;
    top: 33px;
`;

export const ErrorStl = styled.p`
    min-height: 14px;
    color: #ff3636;
    font-size: 12px;
`;
export const FieldWrapper = ({ error, label, children, onClear, clearCondition }) => {
    return (

        // рисует ошибки и крестик удаления
        <FieldWrapperStl>
            {label !== undefined && <LabelStl>{label}</LabelStl>}
            {children}
            {clearCondition && clearCondition !== '+7 (' && <ClearStl as={Cleaner} onClick={onClear} />}
            <ErrorStl>{error?.message}</ErrorStl>
        </FieldWrapperStl>
    );
};
