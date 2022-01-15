import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MyIcon from '../parts/MyIcon';
const MenuIconWrapper = styled('div')(({ theme }) => ({
  color: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
}));
function MyMenu() {
  return (
    <List>
      {/* ここの '' の部分を入れるのはなんとかしたい... */}
      {['Activity', 'Chat', 'Team', 'Calendar', 'Call', 'File', 'Planner'].map((text, index) => (
        <ListItem button key={text}
        style={{
          textAlign:'center',
          justifyContent:'center',
          }}>
          <MenuIconWrapper>
          <MyIcon name={text}/>
          <Typography>{text}</Typography>
          </MenuIconWrapper>
        </ListItem>
      ))}
    </List>
  );
}
export default MyMenu;