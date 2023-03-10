import Typography from '@mui/material/Typography';
import { JobListing, PRIMARY_GREEN } from '../StyledComponents';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom'

export default function Job({ title, postedTime, location, description, hourlyUSD, id }) {
  return (
    <JobListing>
      <Typography variant="h6" gutterBottom >
        <Link to={'/job/' + id} path='relative' style={{ textDecoration: 'none', color: 'inherit' }}>{title}</Link>
      </Typography>
      <Typography variant="subtitle2" gutterBottom >
        Hourly: ${hourlyUSD}.00
      </Typography>
      <Typography variant="subtitle2" gutterBottom >
        Posted: {postedTime}
      </Typography>
      <Typography variant="subtitle2" gutterBottom
        sx={{ display: 'flex', alignItems: 'center' }} >
        <FmdGoodIcon sx={{ color: PRIMARY_GREEN }} />
        Remote, {location}
      </Typography>
      <Typography variant="body2" gutterBottom >
        {description}
      </Typography>
    </JobListing>
  )
}