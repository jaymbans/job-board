import { InputWithIcon, PasswordInput } from "../StyledComponents";
import Box from '@mui/material/Box';

export default function Login() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: 450,
        height: 350,
        padding: '40px 0',
        margin: '50px auto',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <h3>Log in</h3>
      <InputWithIcon />
      <PasswordInput />
    </Box>
  )
}