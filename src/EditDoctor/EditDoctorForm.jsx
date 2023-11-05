import React from 'react';
import { useFormContext } from 'react-hook-form';

// import { useDispatch } from 'react-redux';
// import {
//     PostDoctorAdvancedTraining,
//     PostDoctorCreateDisease,
//     PostDoctorHigherEducation,
//     fetchDoctor_create,
//     postDoctorExpiriens,
//     postDoctorSpecialization,
// } from '../../../api/doctorUserProfileSlice';
// import { dateToUnix, dateToUnixMY } from '../../../../share/helpers';
// import HigherEducationForm from './HigherEducationForm';
// import AdvancedTraining from './AdvancedTraining';
// import WorkExperience from './WorkExperience';
// import Specialization from './Specialization';
// import Diagnostic from './Diagnostic';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import UserData from './EditDoctorBlocks/UserData';
import { EditDoctorFormStyled } from './EditDoctorForm.styled';

const EditDoctorForm = ({ methods }) => {
    // const doctorPersonalData = useSelector((state) => state.doctorProfile?.doctorProfile);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const isPreloader = useSelector((state) => state.doctorProfile.isPreloader);

    const onSubmit = (data) => {
      console.log(data);
        // const birthday = data?.user?.birthday?.split('/');
        // const promises = [];

        // promises.push(
        //     dispatch(
        //         fetchDoctor_create({
        //             user: { ...data.user, birthday: dateToUnix(birthday[2], birthday[1], birthday[0]) },
        //             category: data.specialization.category,
        //             scientific_degree: data.specialization.scienceDegree,
        //             video_chat_price: data.diagnostic.price,
        //         })
        //     )
        // );
        // // Образование
        // if (data.higher_education.length > 0) {
        //     data.higher_education.forEach((el) => {
        //         promises.push(
        //             dispatch(
        //                 PostDoctorHigherEducation({
        //                     ...el,
        //                     start_date: 0,
        //                     end_date: new Date(el.end_date, 1, 2).getTime() / 1000,
        //                 })
        //             )
        //         );
        //     });
        // } else {
        //     promises.push(
        //         dispatch(
        //             PostDoctorHigherEducation({
        //                 ...data.higher_education[0],
        //                 start_date: 0,
        //                 end_date: new Date(data.higher_education[0].end_date, 1, 2).getTime() / 1000,
        //             })
        //         )
        //     );
        // }
        // // Квалификация
        // if (data.advanced_training.length > 0) {
        //     data.advanced_training.forEach((el) => {
        //         promises.push(
        //             dispatch(
        //                 PostDoctorAdvancedTraining({
        //                     ...el,
        //                     end_date: new Date(el.end_date, 1, 2).getTime() / 1000,
        //                 })
        //             )
        //         );
        //     });
        // } else {
        //     promises.push(
        //         dispatch(
        //             PostDoctorAdvancedTraining({
        //                 ...data.advanced_training[0],
        //                 end_date: new Date(data.advanced_training[0].end_date, 1, 2).getTime() / 1000,
        //             })
        //         )
        //     );
        // }

        // // Опыт работы
        // if (data.work_experience.length > 0) {
        //     data.work_experience.forEach((el) => {
        //         promises.push(
        //             dispatch(
        //                 postDoctorExpiriens({
        //                     ...el,
        //                     start_date: dateToUnixMY(el.start_date),
        //                     end_date: dateToUnixMY(el.end_date),
        //                 })
        //             )
        //         );
        //     });
        // } else {
        //     promises.push(
        //         dispatch(
        //             postDoctorExpiriens({
        //                 ...data.work_experience[0],
        //                 start_date: dateToUnixMY(data.work_experience.start_date),
        //                 end_date: dateToUnixMY(data.work_experience.end_date),
        //             })
        //         )
        //     );
        // }

        // Специализация
        // data.specialization.specialization.forEach((el) => {
        //     promises.push(dispatch(postDoctorSpecialization(el.value)));
        // });
        // promises.push(dispatch(PostDoctorCreateDisease(data.diagnostic.text)));

        // Promise.all(promises)
        //     .then(() => navigate('/lk/doctor-profile/profile/view'))
        //     .catch((error) => {
        //         console.error(error.message);
        //     });
        // User
        // Диагностика
    };
    const {
        formState: { isValid },
    } = useFormContext();
    return (
        <EditDoctorFormStyled>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <UserData />
                {/* <HigherEducationForm /> */}
                {/* <AdvancedTraining /> */}
                {/* <WorkExperience /> */}
                {/* <Specialization /> */}
                {/* <Diagnostic /> */}
                <button disabled={!isValid} className="btn__recive">
                    {/* {isPreloader ? 'Загрузка...' : 'Отправить данные'} */}
                    Отправить данные
                </button>
            </form>
        </EditDoctorFormStyled>
    );
};

export default EditDoctorForm;
