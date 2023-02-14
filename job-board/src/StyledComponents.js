// Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const PRIMARY_GREEN = '#37B54B'

// Login Page

export const LoginContainer = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const LoginPanel = styled(Box)(() => ({
  backgroundColor: 'white',
  height: 350,
  width: 475,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '25px 0'
}))

export const LoginInput = styled(Input)(() => ({
  border: '1px solid ' + PRIMARY_GREEN,
  borderRadius: '5px',
  padding: '3px 10px',
  margin: '7px 0',
}))

export const LoginButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  color: 'white'
}))