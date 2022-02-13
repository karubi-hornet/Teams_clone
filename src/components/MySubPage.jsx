import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import MyFeed from '../parts/MyFeed';

const SubPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#eeeeee',
  marginTop: '60px',
}));
function MySubPage() {
  return (
     <SubPageWrapper>
      <MyFeed />
    </SubPageWrapper>
  );
}
export default MySubPage;