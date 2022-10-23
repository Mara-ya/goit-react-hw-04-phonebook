import styled from "styled-components";
import { Form, Field } from 'formik';

export const WrapperForm = styled(Form)`
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
