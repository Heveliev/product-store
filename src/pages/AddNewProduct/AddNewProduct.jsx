import { Formik,Form,ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
} from '@chakra-ui/react';
import { InputField,ErrorText  } from './AddNewProduct.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
    year: yup.number().required(),
    rating:yup.number().required(),
}) 

const initialValues = {
    title: '',
    author: '',
    year: 1995,
    rating:0,
}

const FormError = ({ name }) => {
    return(
      <ErrorMessage
      name={ name }
      render={ message => <ErrorText>{ message}</ErrorText>}/>
  )
}

const AddNewProduct = () => {
    const handleSubmit = (values,{resetForm}) => {
        
resetForm()
    }
    
    return(
        <>
            <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}>
    <Form>
      <Stack padding="15px" spacing="4">
        <FormControl>
          <FormLabel>Title
          <InputField 
          name="title"
            type="text"
            
          />
          <FormError name="title"/>
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>Author
          <InputField
          name="author"
            type="text"
          
          /><FormError name="author"/></FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>Year
          <InputField
          name="year"
            type="number"
          /><FormError name="year"/></FormLabel>
        </FormControl>
        <FormControl >
          <FormLabel>Rating
          <InputField
          name="rating"
          /><FormError name="rating"/></FormLabel></FormControl>
        <Button type="submit">Add Product</Button>
      </Stack>
    </Form>         
                </Formik>
        </>
    )
}

export default AddNewProduct