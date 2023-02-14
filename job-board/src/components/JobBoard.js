import {
  SearchBar,
  NavigationBar,
  NavLink,
  JobsContentContainer,
  JobsSearchContainer,
  GreenButton,
  JobsDescriptionsContainer,
  Categories,
  PRIMARY_GREEN,
  JobsContainer
}
  from "../StyledComponents"

import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Jobs from '../jobs'
import Job from "./Job";

export default function JobBoard() {
  return (
    <>
      <NavigationBar>
        <SearchBar
          sx={{
            width: '50%',
            marginRight: '20%'
          }}
          placeholder="Search" />
        <NavLink href="#">Find a Job</NavLink>
        <NavLink href="/">Login</NavLink>
      </NavigationBar>
      <JobsContentContainer>
        <JobsSearchContainer>
          <Typography variant="h5" gutterBottom
            sx={{ padding: 0, margin: 0, width: '15%' }} >
            Find Work
          </Typography>
          <SearchBar placeholder="Search" sx={{ width: '79%' }} />
          <GreenButton sx={{ borderRadius: '0' }}>
            <SearchIcon />
          </GreenButton>
        </JobsSearchContainer>
        <JobsDescriptionsContainer>
          <Categories sx={{ padding: 0, margin: 0, width: '15%' }} >
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            <Typography variant="body2" gutterBottom >
              Front End Dev
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: PRIMARY_GREEN }} >
              Design
            </Typography>
            <Typography variant="body2" gutterBottom >
              E-Commerce
            </Typography>
          </Categories>
          <JobsContainer>
            {Jobs.map(job => {
              return (
                <Job
                  key={job.id} />
              )
            })}
          </JobsContainer>
        </JobsDescriptionsContainer>
      </JobsContentContainer>
    </>
  )
}