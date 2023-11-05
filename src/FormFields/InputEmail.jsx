import React from 'react';
import { FieldWrapper } from './FieldWrapper';
import { useFormContext } from 'react-hook-form';

const InputEmail = ({ name, placeholder, validation, label }) => {
    const {
        register,
        formState: { errors },
        setValue,
        watch,
        trigger,
    } = useFormContext();

    const [blocks, blockField] = name.split('.');
    const error = errors?.[blocks]?.[blockField];

    const inputValue = watch(name);

    const defaultValidation = {
        required: 'Поле обязательно для заполнения',
        pattern: {
            value: /^[\p{L}\d\S]+([\p{L}\d\S._-]*)@[a-z\d.-]+\.[a-z]{2,}$/u,
            message: 'Допустимый формат почты: test@test.ru',
        },
        ...validation,
    };
    const handleClearInput = () => {
        setValue(name, 'Example@gmail.com'); // Очищаем
        trigger();
    };


    return (
        <FieldWrapper
        error={error} label={label} clearCondition={inputValue} onClear={handleClearInput}
        >
            <input
                {...register(name, defaultValidation)}
                className={`${!error ? '' : 'invalid'}`}
                placeholder={placeholder}
                id={name}
                type="email"
            />
        </FieldWrapper>
    );
};

export default InputEmail;
