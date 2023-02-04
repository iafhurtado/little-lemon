import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
        <h3> Doormat Navigation </h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </div>
        <div
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
        <h3> Contact </h3>
        <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        </div>
        
      </footer>
    </div>
  );
};
export default Footer;
