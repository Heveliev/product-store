import { lazy } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import { AppBar } from "./AppBar/AppBar";

const Products = lazy(() => import('../pages/Products/Products'));

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
      <Route path='/' element={<AppBar />}>
        
  <Route index path='/' element={<Products/>}/>
        </Route>
</Routes>
    </ChakraProvider>
  );
};
