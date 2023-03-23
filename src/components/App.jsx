import { lazy } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import { AppBar } from "./AppBar/AppBar";

const Products = lazy(() => import('../pages/Products/Products'));
const AddNewProduct = lazy(() => import('../pages/AddNewProduct/AddNewProduct'));

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
      <Route path='/' element={<AppBar />}>
        
  <Route index path='/' element={<Products/>}/>
  <Route path='/add-product' element={<AddNewProduct />}/>

        </Route>
</Routes>
    </ChakraProvider>
  );
};


// iPhone 9

// An apple mobile which is nothing like apple

// $549

// Rating: 4.69

// Stock: 94

// Category: smartphones