import styled from '@emotion/styled'
import {Field} from 'formik';

export const InputField = styled(Field)`
 width: 100%;
  height: 8;
  font-size: 16px;
  padding: 0;
  background-color: #EDF2F7; 
  border: 1px solid #E2E8F0; 
  border-radius: 0;
  outline: none;
  box-sizing: border-box;
   padding: 2 3;
  border-color: #CBD5E0;
  color:black;
  border-radius:4px;
`;

export const ErrorText = styled.p`
color:red;`;