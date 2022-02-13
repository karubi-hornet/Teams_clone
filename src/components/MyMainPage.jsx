import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const MainPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'lightGreen',
  marginTop: '4.5%'
}));
function MyMainPage() {
  return (
    <MainPageWrapper>
    Main Contents.
    </MainPageWrapper>
  );
}
export default MyMainPage;