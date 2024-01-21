import { Button as ChackaButton} from '@chakra-ui/react';
import React from 'react';

export  const Button = ({ children, ...restProps }: any) => {
  return (
    <ChackaButton
      width="198px"
      height="48px"
      borderRadius={'20px'}
      display="flex"
      padding="0px 16px"
      justifyContent="center"
      color="black"
      boxShadow="0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(120, 40, 200, 0.40)"
      fontSize="16px"
      fontWeight={500}
      
      {...restProps}
     
    >
      {children}
    </ChackaButton>
  );
};


