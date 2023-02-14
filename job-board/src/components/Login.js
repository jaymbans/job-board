import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

import { LoginContainer, LoginPanel, LoginInput, LoginButton } from '../StyledComponents';



export default function Login({ loggedIn, setLoggedIn }) {

  // state
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  // Cosmetic Functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Functional Functions
  const logIn = () => {
    if (userName && password) {
      setLoggedIn(true);
      return;
    } else {
      return toast.error('Please enter valid username and password (hint: any string!)')
    }
  }


  return (
    <LoginContainer>
      <LoginPanel>
        <Typography variant="h5" gutterBottom sx={{ color: '#5C5B5E' }}>
          Log in
        </Typography>
        <FormGroup variant="standard" sx={{ width: '70%' }}>
          <ToastContainer />
          <LoginInput
            id="email"
            onChange={(e) => setUserName(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            placeholder='Username or Email'
          />
          <LoginInput
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } />
          <LoginButton onClick={logIn} variant="contained">Continue with Email</LoginButton>
        </FormGroup>
      </LoginPanel>
    </LoginContainer>
  )
}