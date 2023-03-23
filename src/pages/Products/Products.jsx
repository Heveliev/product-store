import { InputFilter } from "components/InputFilter/InputFilter";
import { useSelector } from "react-redux";
import { Spinner,Box, Heading } from "@chakra-ui/react";
import { ProductsList } from "components/ProductsList/ProductsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIsLoading, getProducts } from "redux/products/products-selectors";
import { fetchAllProducts } from "redux/products/products-thunk";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts)
      const loading = useSelector(getIsLoading);

     useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);
    
    return(
        <>
            {loading ?
                <Box position="fixed"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)">
                    <Spinner thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Box>
                : <><Heading textAlign="center">Products list:</Heading>
                    <InputFilter />
                    {products?.length ? <ProductsList /> : <Heading margin="20px">Sorry, but we have sold all the products</Heading>}
                    </>}
            
        </>
    )
}
export default Products