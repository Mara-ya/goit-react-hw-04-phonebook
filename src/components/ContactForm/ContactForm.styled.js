import styled from "styled-components";
import { Field } from 'formik';

export const Form = styled.form`
    display: table-caption;
`

export const InputForm = styled(Field)`
    padding: 5px 0;
    margin: 10px 0;
    border-radius: 15px;
`

export const SubmitBtn = styled.button`
    margin: 5px 0;
    padding: 7px 0;
    border-radius: 15px;
`