import { Input,Box,Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { filter } from "redux/filter/filter-slice";

export const InputFilter = () => {
    const dispatch = useDispatch();

    const filterProducts = evt => {
    const evtTarget = evt.currentTarget.value.toLowerCase();
    dispatch(filter(evtTarget)) 
  }
    return (<Box p={4}>
        <Text fontSize="xl" mt={2}>Enter the name or category of the product you are looking for:</Text>
      <Input
                onChange={filterProducts}
        type="text"
        name="name"
        placeholder="Search products"
        mb={4}
      />     
          </Box>
        )
}