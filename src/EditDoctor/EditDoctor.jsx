import { FormProvider, useForm } from 'react-hook-form';
import EditDoctorForm from './EditDoctorForm';

export const EditDoctor = () => {
    const methods = useForm({
        mode: 'onChange',
        // defaultValues: {
        //     higher_education: [{}], для динамических блоков
        // },
    });

    return (
        <FormProvider {...methods}>
            <EditDoctorForm methods={methods} />
        </FormProvider>
    );
};

