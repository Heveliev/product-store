import { NavLink, Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Flex, Spacer, IconButton, useColorMode, HStack, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'; 


export const AppBar = () => {


    const { colorMode, toggleColorMode } = useColorMode();
    return ( <>
        <div>
        <Flex fontSize="xl" bg="gray.700" w="100%" p={4} color="white" alignItems="center">
          <Box marginRight="15px"><NavLink  to='/'>Products</NavLink></Box>
         
          <NavLink  to ='/add-product'>Add new product</NavLink>
            <Spacer />
      <HStack spacing={4}>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </HStack>
        </Flex>
   
      </div>
      <Suspense fallback={<Box position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)">
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>}>
          <Outlet />
          </Suspense>

        </>
  )
}
