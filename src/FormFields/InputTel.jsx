import InputMask from 'react-input-mask';
import { useFormContext } from 'react-hook-form';
import { FieldWrapper } from './FieldWrapper';

const InputTel = ({ name, placeholder, validation, label }) => {
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
            value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            message: 'Неполный номер',
        },
        ...validation,
    };

    const handleClearInput = () => {
        setValue(name, ''); // Очищаем
        trigger();
    };

    const handleBlur = (e) => {
        const value = e.target.value;
        if (value === '+7 (') {
            value = ''; // Если введено только "+7 (", затрите значение
        }
        trigger();
    };

    return (
        <FieldWrapper error={error} label={label} clearCondition={inputValue} onClear={handleClearInput}>
            <InputMask
                {...register(name, defaultValidation)}
                className={`${!error ? '' : 'invalid'}`}
                mask={'+7 (999) 999-99-99'}
                placeholder={placeholder}
                id={name}
                type="tel"
                maskChar={''}
                onBlur={handleBlur}
            />
        </FieldWrapper>
    );
};

export default InputTel;
