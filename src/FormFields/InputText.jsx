import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';

export const InputText = ({ name, placeholder, validation, label }) => {
    const {
        register,
        formState: { errors },
        setValue,
        watch,
        trigger,
    } = useFormContext();

    // вытаскиваем ошибку, которая сработала
    const [blocks, blockField] = name.split('.');
    const error = errors?.[blocks]?.[blockField];
    
    // следим за инпутом для отображения крестика
    const inputValue = watch(name);

    // дефолтная валидация
    // если мы хотим в определенном месте переопределить валидацию
    // то объявляем инпут так, проп validation принимает свойства которые перезапишут дефолт
    // <InputText defaultValue="Иван" name="user.last_name" label="Имя" placeholder="Иван" validation={{
    //   requared: false, // необязательное
    //   pattern ...
    // }}/>
    const defaultValidation = {// свойства из библиотеки
        required: { value: true, message: 'Поле обязательно для заполнения' },
        pattern: {
            value: /^[\p{L}]*$/u,
            message: 'Имя может содержать только символы алфавита',
        },
        maxLength: {
            value: 30,
            message: 'Максимальная длина: 30 символов',
        },
        ...validation,
    };
    
    const handleClearInput = () => {
        setValue(name, ''); // Очищаем
        trigger();
    };

    return (
        <FieldWrapper error={error} label={label} clearCondition={inputValue} onClear={handleClearInput}>
            <input
                {...register(name, defaultValidation)}
                className={`${!error ? '' : 'invalid'}`}
                placeholder={placeholder}
                type="text"
            />
        </FieldWrapper>
    );
};

