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
import { getSort } from "redux/sort/sort-selector";


export const ProductsList = () => {
   const [id, setId] = useState();
  const dispatch = useDispatch();
  const products = useSelector(getProducts)
  const filter = useSelector(getFilter);
  const isOpenModal = useSelector(getIsOpen);
  const sortType = useSelector(getSort);
  


  const sortProducts = (products, sortType) => {
    switch (sortType) {
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'ratingAsc':
        return [...products].sort((a, b) => a.rating - b.rating);
      case 'ratingDesc':
        return [...products].sort((a, b) => b.rating - a.rating);
      case 'stockAsc':
        return [...products].sort((a, b) => a.stock - b.stock);
      case 'stockDesc':
        return [...products].sort((a, b) => b.stock - a.stock);
      default:
        return products;
    }
  };
  const sortedProducts = sortProducts(products, sortType);
    const filterProducts = () => {
      return sortedProducts?.filter(product =>
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
          {product.images[0] &&
            <Image border="green 3px solid" boxSize="100px" objectFit="cover" src={product.images[0]} alt={product.title} />}
          <Box ml={4}>
            <Text fontWeight="bold">{product.title}</Text>
            {product.description && <Text>{product.description}</Text>}
            {product.price && <Text fontSize="xl" fontWeight="bold" mt={2}>${product.price}</Text>}
            {product.rating && <Text>Rating: {product.rating}</Text>}
            {product.stock && <Text>Stock: {product.stock}</Text>}
            {product.category && <Text>Category: {product.category}</Text>}
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
