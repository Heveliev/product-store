
import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSort } from 'redux/sort/sort-selector';
import { sort } from 'redux/sort/sort-slice';

export const ButtonSort = () => {
    const dispatch = useDispatch();
    const sortType = useSelector(getSort);

 
  const handleSort = (type) => {
dispatch(sort(type))
  };

  return (
    <>
      <ButtonGroup variant="outline" spacing={4}>
        <Button
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