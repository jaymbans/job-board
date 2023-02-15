// Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const PRIMARY_GREEN = '#37B54B';
export const SECONDARY_GRAY = '#5C5C5C';

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

export const GreenButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  color: 'white'
}))

// Jobs Page

export const SearchBar = styled(Input)(() => ({
  background: 'white',
  padding: '0 10px'
}))


export const NavigationBar = styled(Box)(() => ({
  backgroundColor: '#2A5468',
  width: '100%',
  padding: '20px 10%',
  display: 'flex',
  alignItems: 'center'
}))


export const NavLink = styled(Link)(() => ({
  color: 'white',
  width: '10%',
  margin: '0 5%',
  textAlign: 'center'
}))


export const JobsContentContainer = styled(Box)(() => ({
  width: '80%',
  margin: '30px auto',
  color: SECONDARY_GRAY
}))

export const JobsSearchContainer = styled(Box)(() => ({
  padding: '5px 0',
  display: 'flex',
  marginBottom: 40
}))


export const JobsDescriptionsContainer = styled(Box)(() => ({
  display: 'flex',
}))

export const Categories = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
}))

export const JobsContainer = styled(Box)(() => ({
  width: '85%',
  display: 'flex',
  flexDirection: 'column',
}))

export const JobListing = styled(Box)(() => ({
  padding: '25px',
  borderBottom: '2px solid #f1f1f1',
  backgroundColor: 'white'
}))