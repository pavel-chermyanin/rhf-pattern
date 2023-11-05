import styled from 'styled-components';

export const EditDoctorFormStyled = styled.div`
    max-width: 300px;
    margin-bottom: 60px;
    .title {
        font-family: Rubik;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        margin-bottom: 25px;
    }

    .button {
        margin-top: 25px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        background-color: transparent;
        border: none;
        color: #19be6f;
        transition: all 0.3s ease-in-out;
        display: flex;
        align-items: center;
        gap: 4px;
        width: 100%;
        cursor: pointer;
        .span {
            font-size: 18px;
            color: #19be6f;
        }
        &:hover {
            opacity: 0.6;
        }
        &_border {
            border-bottom: 1px dashed #d2d2d2;
        }
        &_del {
            padding-bottom: 8px;
            margin: 25px 0px 40px;
            color: red;
        }
    }
    .work__date-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
    .price__wrapper {
        margin-top: 100px;
    }
    .date__container {
        display: grid;
        column-gap: 20px;
        align-items: start;
        grid-template-columns: repeat(2, max-content);
        grid-template-areas:
            'title title'
            'start end';
        & input {
            max-width: 156px;
        }
        & label {
            max-width: 156px;
        }

        .date__title {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            grid-area: title;
        }
    }
    .btn__recive {
        padding: 16px 32px;
        border-radius: 10px;
        border: 2px solid #19be6f;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #fff;
        background-color: #19be6f;
        transition: opacity 0.3s linear;
        width: 100%;
        cursor: pointer;
        padding: 17px;
        &:hover {
            opacity: 0.7;
        }
        &:disabled {
            opacity: 0.4;
            text-align: center;
            cursor: default;
        }
    }
`;
