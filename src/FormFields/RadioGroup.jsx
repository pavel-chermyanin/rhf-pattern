import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const DivStl = styled.div`
    user-select: none;
    > .radio-group {
        margin-bottom: 10px;
        display: inline-block;
        font-size: 14px;
    }
`;

const LabelStl = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    input {
        appearance: none;
        &:checked + div svg .radio-dot {
            fill: #19be6f;
        }
    }
    div {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    &:hover .radio-outline {
        stroke: #19be6f;
    }
    &:active .radio-outline {
        fill: #c9fce3;
    }
    &:focus-within .radio-outline {
        stroke: #19be6f;
    }
`;

const RadioGroup = ({ name, label, options, defaultValue }) => {
    const { register } = useFormContext();


    return (
        <DivStl>
            <span className="radio-group">{label}</span>
            {options.map((option, index) => {
                return (
                    <LabelStl key={index}>
                        <input
                            {...register(name)}
                            name={name}
                            type="radio"
                            defaultChecked={defaultValue == index}
                            value={index}
                        />
                        <div>
                            <svg className="svg" height="24px" width="24px">
                                <circle
                                    className="radio-outline"
                                    cx="12"
                                    cy="12"
                                    r="11"
                                    fill="white"
                                    stroke="#B6B7BA"
                                    strokeWidth="2"
                                />
                                <circle className="radio-dot" cx="12" cy="12" r="8" fill="none" />
                            </svg>
                        </div>
                        <span>{option}</span>
                    </LabelStl>
                );
            })}
        </DivStl>
    );
};

export default RadioGroup;
