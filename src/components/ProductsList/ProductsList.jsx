import { Box, Flex, Image, Spacer, Stack, Text, IconButton, Portal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/filter/filter-select";
import { getProducts } from "redux/products/products-selectors";
import { CloseIcon,EditIcon } from "@chakra-ui/icons";
import { deleteProduct } from "redux/products/products-thunk";
import { getIsOpen } from "redux/modal/modal-select";
import { useState } from "react";
import { isOpen } from 'redux/modal/modal-slice';
import { ModalWindow } from "components/ModalWindow/ModalWindow";

export const ProductsList = () => {
   const [id, setId] = useState();
  const dispatch = useDispatch();
  const products = useSelector(getProducts)
  const filter = useSelector(getFilter);
    const isOpenModal = useSelector(getIsOpen);
  
    const filterProducts = () => {
      return products?.filter(product =>
        product.title.toLowerCase().includes(filter) ||
      product.category.toLowerCase().includes(filter))
  }
    
  
 const findProduct = id => {
  return products?.find(item => item.id === id);
};

    return ( <>
    <Stack padding="10px" spacing={4}>
      {filterProducts().map(product => (
        <Flex key={product.id} align="center" position="relative">
          <Image border="green 3px solid" boxSize="100px" objectFit="cover" src={product.images[0]} alt={product.title} />
          <Box ml={4}>
            <Text fontWeight="bold">{product.title}</Text>
            <Text>{product.description}</Text>
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              ${product.price}
            </Text>
            <Text>Rating: {product.rating}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Category: {product.category}</Text>
          </Box>
          <Spacer />
          <Box><IconButton
            width="100px"
                      position='absolute'
                      top="50%"
                      right="0"
              icon={<CloseIcon />}
              aria-label="Delete Product"
              variant="ghost"
              onClick={() =>dispatch(deleteProduct(product.id))}
          />
          <IconButton
          data-id={product.id}
              width="100px"
            position='absolute'
            bottom="0"
                      right="0"
              icon={<EditIcon/>}
              aria-label="Edit Product"
              variant="ghost"
              onClick={() => {  dispatch(isOpen()); setId(product.id) }}
          /></Box>
           
        </Flex>
      ))}
      </Stack>
      <Portal>{isOpenModal && <ModalWindow id={id} values={findProduct(id)} />}</Portal>
    </>
  );
}
