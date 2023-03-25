
import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSort } from 'redux/sort/sort-selector';
import { sort } from 'redux/sort/sort-slice';

export const ButtonsSort = () => {
    const dispatch = useDispatch();
    const sortType = useSelector(getSort);

 
  const handleSort = (type) => {
dispatch(sort(type))
  };

  return (
    <>
      <ButtonGroup margin="0" display="flex" flexWrap="wrap" variant="outline" rowGap="10px" >
        <Button
          margin="0 0 0 8px"
          leftIcon={<Icon as={sortType === "priceAsc" ? FaSortAmountUp : FaSortAmountDown} />}
          onClick={() => handleSort(sortType === "priceAsc" ? "priceDesc" : "priceAsc")}
        >
          Sort by Price
        </Button>
        <Button
          leftIcon={<Icon as={sortType === "ratingAsc" ? FaSortAmountUp : FaSortAmountDown} />}
          onClick={() => handleSort(sortType === "ratingAsc" ? "ratingDesc" : "ratingAsc")}
        >
          Sort by Rating
        </Button>
        <Button
          leftIcon={<Icon as={sortType === "stockAsc" ? FaSortAmountUp : FaSortAmountDown} />}
          onClick={() => handleSort(sortType === "stockAsc" ? "stockDesc" : "stockAsc")}
        >
          Sort by Stock
        </Button>
       
      </ButtonGroup>
    </>
  );
};