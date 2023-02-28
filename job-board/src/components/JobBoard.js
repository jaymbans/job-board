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
import Job from "./Job";

import { useState, useEffect } from 'react';
// 
export default function JobBoard({ jobsData, loggedIn }) {
  const [jobFilter, setJobFilter] = useState('');
  const [jobsToDisplay, setJobsToDisplay] = useState(jobsData);

  useEffect(() => {
    if (!jobFilter) {
      return
    }

    setJobsToDisplay(
      jobsData.filter(job => job.category === jobFilter)
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
        <NavLink to={'/jobs'}>
          Find a Job
        </NavLink>
        <NavLink to={'/'}>
          Login
        </NavLink>
      </NavigationBar>
      <JobsContentContainer>
        <JobsSearchContainer>
          <Typography variant="h5" gutterBottom
            sx={{
              padding: 0, margin: '0', width: '15%',
              '@media (max-width: 915px)': {
                fontSize: '20px',
              },
              '@media (max-width: 700px)': {
                width: '100%',
                textAlign: 'center'
              }
            }} >
            Find Work
          </Typography>
          <SearchBar placeholder="Search" sx={{ width: '79%' }} />
          <GreenButton sx={{
            borderRadius: '0',
            '@media (max-width: 900px)': {
              width: '79%',
              textAlign: 'center',
              padding: '2px 0'
            }
          }}>
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
                  id={job.id}
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