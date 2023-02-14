import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useState } from 'react'

import { LoginContainer, LoginPanel, LoginInput, LoginButton } from '../StyledComponents';



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginPanel>
        <Typography variant="h5" gutterBottom sx={{ color: '#5C5B5E' }}>
          Log in
        </Typography>
        <FormControl variant="standard" sx={{ width: '70%' }}>
          <LoginInput
            id="email"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            placeholder='Username or Email'
          />
          <LoginInput
            id="password"
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
          <LoginButton variant="contained">Continue with Email</LoginButton>
        </FormControl>
      </LoginPanel>
    </LoginContainer>
  )
}