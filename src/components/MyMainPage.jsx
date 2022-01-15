import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const MainPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'lightGreen',
}));
function MyMainPage() {
  return (
    <MainPageWrapper>
    めいん
    </MainPageWrapper>
  );
}
export default MyMainPage;