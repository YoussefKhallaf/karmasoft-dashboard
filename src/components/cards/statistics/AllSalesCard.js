import PropTypes from 'prop-types';

// material-ui
import { Box, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';

// assets
// import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const AllSalesCard = ({ title1, count1, title2, count2, title3, count3, children }) => (
  <MainCard content={false}>
    <Box sx={{ p: 2.25 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Item>
          <Typography variant="h6" color="textSecondary" wrap="nowrap">
            {title1}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            {count1}
          </Typography>
        </Item>
        <Item>
          <Typography variant="h6 no-wrap" color="textSecondary">
            {title2}
          </Typography>
          <Typography variant="h5" color="textPrimary" wrap="nowrap">
            {count2}
          </Typography>
        </Item>
        <Item>
          <Typography variant="h6" color="textSecondary">
            {title3}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            {count3}
          </Typography>
        </Item>
      </Stack>
    </Box>
    {children}
  </MainCard>
);

AllSalesCard.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  count1: PropTypes.string,
  count2: PropTypes.string,
  count3: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  color: PropTypes.string,
  item: PropTypes.string,
  children: PropTypes.node
};

export default AllSalesCard;
