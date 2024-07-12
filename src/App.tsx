import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Box, Button as ChakraButton } from '@chakra-ui/react';
import { Container, Button as MuiButton, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ChakraButton colorScheme="blue" mt="4">Click Me</ChakraButton>
      <MuiButton variant="contained" color="primary" style={{ marginRight: '8px' }}>
        MUI Button
      </MuiButton>
    <Box textAlign="center" fontSize="2xl" color="blue.600">
      Hello, Chakra UI with TypeScript! 
    </Box>
 
    <div className="text-center text-2xl text-blue-600">
      Hello, Tailwind CSS with TypeScript!
    </div>
    </div>
  );
}

export default App;
