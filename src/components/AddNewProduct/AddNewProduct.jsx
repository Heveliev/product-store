import { Formik,Form,ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { InputField,ErrorText  } from './AddNewProduct.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/products/products-thunk';

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
    rating:1,
}

const FormError = ({ name }) => {
    return(
      <ErrorMessage
      name={ name }
      render={ message => <ErrorText>{ message}</ErrorText>}/>
  )
}

export const AddNewProduct = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { title, author, year, rating } = values;
    dispatch(addProduct({title, author, year, rating}))    
resetForm()
    }
    
    return(
      <>
        <Heading fontSize="30px">Please, enter values in the fields to add a new product:</Heading>
            <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}>
    <Form>
  <Stack padding="15px" spacing="4">
    <Flex justifyContent="space-between">
      <FormControl flex="1">
        <FormLabel>Title
                            <InputField name="title" type="text" />
        <FormError name="title" />
        </FormLabel>

      </FormControl>
      <FormControl flex="1" marginLeft="10px">
          <FormLabel>Author
          <InputField name="author" type="text" />
        <FormError name="author" /></FormLabel>
        
      </FormControl>
    </Flex>
    <Flex justifyContent="space-between">
      <FormControl flex="1">
        <FormLabel>Year
        <InputField name="year" type="number" />
        <FormError name="year" />
        </FormLabel>
        
      </FormControl>
      <FormControl flex="1" marginLeft="10px">
        <FormLabel>Rating
          <InputField name="rating" />
        <FormError name="rating" />
        </FormLabel>
        
      </FormControl>
    </Flex>
    <Button type="submit">Add Product</Button>
  </Stack>
</Form>
                </Formik>
        </>
    )
}
