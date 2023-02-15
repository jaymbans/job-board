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
  JobsContainer,
  InvisibleButton
}
  from "../StyledComponents"

import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Jobs from '../jobs'
import Job from "./Job";

import { useState, useEffect } from 'react';

export default function JobBoard() {
  const [jobFilter, setJobFilter] = useState('');
  const [jobsToDisplay, setJobsToDisplay] = useState(Jobs);

  useEffect(() => {
    if (!jobFilter) {
      return
    }

    setJobsToDisplay(
      Jobs.filter(job => job.category === jobFilter)
    )
  }, [jobFilter])


  const switchJobCategory = (e) => {
    document.querySelectorAll('.invis-btn').forEach(btn => btn.style.color = 'inherit');
    e.target.style.color = PRIMARY_GREEN;
    setJobFilter(e.target.textContent)
    return;
  }

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
            <InvisibleButton variant="body2" className='invis-btn' onClick={switchJobCategory} >
              Front End Dev
            </InvisibleButton>
            <InvisibleButton variant="body2" className='invis-btn' onClick={switchJobCategory}>
              Design
            </InvisibleButton>
            <InvisibleButton variant="body2" className='invis-btn' onClick={switchJobCategory}>
              E-Commerce
            </InvisibleButton>
          </Categories>
          <JobsContainer>
            {jobsToDisplay.map(job => {
              return (
                <Job
                  key={job.id}
                  title={job.title}
                  postedTime={job.postedTime}
                  location={job.location}
                  description={job.description}
                  hourlyUSD={job.hourlyUSD}
                />
              )
            })}
          </JobsContainer>
        </JobsDescriptionsContainer>
      </JobsContentContainer>
    </>
  )
}