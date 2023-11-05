import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { useFormContext } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';

const DateFieldStl = styled(FieldWrapper)`
    max-width: max-content;
    > input {
        padding: 11px 16px 12px 16px;
        width: 156px;
    }
`;

const InputDate = ({ name, label, placeholder, defaultValue = '  /  /    ', validation = {} }) => {
    const {
        register,
        formState: { errors },
        setValue,
        watch,
        trigger,
    } = useFormContext();

    const [blocks, blockIndex, blockField] = name?.split('.');
    // если динамический блок то берет ошибку с индексом, если нет то индекс становится названием поля
    const error = blockField ? errors?.[blocks]?.[blockIndex]?.[blockField] : errors?.[blocks]?.[blockIndex];
    const inputValue = watch(name);

    const defaultValidation = {
        required: 'Введите дату',
        pattern: {
            value: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            message: 'Неверная дата',
        },

        ...validation,
    };

    const handleClearInput = () => {
        setValue(name, ''); // Очищаем
        trigger();
    };

    return (
        <DateFieldStl error={error} label={label} clearCondition={inputValue} onClear={handleClearInput}>
            <InputMask
                {...register(name, defaultValidation)}
                className={`${!error ? '' : 'invalid'}`}
                placeholder={placeholder}
                id={name}
                type="text"
                mask={defaultValue}
                maskChar=""
            />
        </DateFieldStl>
    );
};

export default InputDate;
