import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const SubPageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'yellow',
}));
function MySubPage() {
  return (
     <SubPageWrapper>
    <List>
      {['AAAAAAAAAAAAAAAaa', 'AAAAAAAAAAAAAAAaa', 'AAAAAAAAAAAAAAAaa', 'AAAAAAAAAAAAAAAaa'].map((text, index) => (
        <ListItem button key={text}
        style={{
          textAlign:'center',
          justifyContent:'center',
          }}>
          {text}
        </ListItem>
      ))}
    </List>
    </SubPageWrapper>
  );
}
export default MySubPage;