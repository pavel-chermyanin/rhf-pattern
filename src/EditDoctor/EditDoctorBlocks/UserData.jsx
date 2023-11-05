import InputDate from "../../FormFields/InputDate";
import InputEmail from "../../FormFields/InputEmail";
import InputTel from "../../FormFields/InputTel";
import { InputText } from "../../FormFields/InputText";
import RadioGroup from "../../FormFields/RadioGroup";
import { EditDoctorFormStyled } from '../EditDoctorForm.styled';



const UserData = () => {
    return (
        <EditDoctorFormStyled>
            <h2 className="title">Личные данные</h2>
            <InputText
                defaultValue="Иванов"
                name="user.first_name"
                label="Фамилия"
                placeholder="Иванов"
                validation={{}}
            />
            <InputText defaultValue="Иван" name="user.last_name" label="Имя" placeholder="Иван" />
            <InputText defaultValue="Иванович" name="user.patronymic" label="Отчество" placeholder="Иванович" />
            <InputDate defaultValue="99/99/9999" name="user.birthday" label="Дата рождения" placeholder="ДД/ММ/ГГГГ" />
            <RadioGroup defaultValue="0" name="user.gender" label="Пол" options={['Мужской', 'Женский']} />
            <InputTel
                defaultValue="+7 (___) ___-__-__"
                name="user.phone"
                label="Номер телефона"
                placeholder="+7 (999) 999-99-99"
            />
            <InputEmail
                defaultValue="Example@gmail.com"
                name="user.email"
                label="Email"
                placeholder="Example@gmail.com"
            />
        </EditDoctorFormStyled>
    );
};

export default UserData;
