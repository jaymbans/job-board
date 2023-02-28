import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import {
  SearchBar,
  NavigationBar,
  NavLink,
  JobsContentContainer,
  JobDetailsContainer,
  JobDetailsPanel,
  PRIMARY_GREEN,
  GreenButton,
  PanelDivider,
  WhiteButton
}
  from "../StyledComponents"

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function JobDetails({ jobsData }) {
  const [currentJobDetails, setCurrentJobDetails] = useState({})
  const location = useLocation();
  useEffect(() => {

    const currentJobId = location.pathname[location.pathname.length - 1];
    const jobDetails = jobsData.filter(job => job.id == currentJobId);

    setCurrentJobDetails(jobDetails[0])
    return;
  }, [])

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
      <JobsContentContainer sx={{ display: 'flex' }}>
        <JobDetailsContainer>
          <Typography variant="h5" gutterBottom
            sx={{ paddingBottom: '20px', borderBottom: '1px solid #DBDDDD', margin: 0 }} >
            {currentJobDetails.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom
            sx={{ color: PRIMARY_GREEN, marginTop: 0, paddingTop: '20px' }} >
            {currentJobDetails.category}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {currentJobDetails.postedTime}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center', marginBottom: 0, paddingBottom: '20px', borderBottom: '1px solid #DBDDDD' }}>
            <FmdGoodIcon sx={{ color: PRIMARY_GREEN }} />Remote, {currentJobDetails.location}
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: 'flex', alignItems: 'center', marginBottom: 0, padding: '20px 0', borderBottom: '1px solid #DBDDDD', fontWeight: 'normal' }}>
            {currentJobDetails.description}
          </Typography>
        </JobDetailsContainer>
        <JobDetailsPanel>
          <PanelDivider>
            <GreenButton sx={{
              // fontSize: 11,
              borderRadius: 20,
              padding: 0,
              height: 40,
              marginBottom: 2,
              textTransform: 'capitalize',
              '@media (max-width: 700px)': {
                fontSize: '10px'
              }
            }}>
              Submit a Proposal
            </GreenButton>
            <WhiteButton sx={{
              borderRadius: 20,
              padding: 0,
              height: 40,
              textTransform: 'capitalize',
              '@media (max-width: 700px)': {
                fontSize: '9px'
              }
            }}>
              <FavoriteBorderIcon />  Save Job
            </WhiteButton>
          </PanelDivider>
          <PanelDivider>
            <Typography variant="h6" gutterBottom sx={{ fontSize: 13 }}>
              About the Client
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: 10, display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon sx={{ color: PRIMARY_GREEN, fontSize: 17 }} />
              Payment Verified
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: 10, display: 'flex', alignItems: 'center' }}>
              <FmdGoodIcon sx={{ color: PRIMARY_GREEN, fontSize: 17 }} />
              United States
            </Typography>
          </PanelDivider>
        </JobDetailsPanel>
      </JobsContentContainer>
    </>
  )
}