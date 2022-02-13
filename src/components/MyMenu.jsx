import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MyIcon from '../parts/MyIcon';

const MyMenuWrapper = styled('div')(({ theme }) => ({
  color: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5vh',
}));

const MenuIconWrapper = styled('div')(({ theme }) => ({
  color: 'gray',

}));
function MyMenu() {
  return (
    <MyMenuWrapper>
      <List style={{maxHeight: '80vh'}}>
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
    </MyMenuWrapper>
  );
}
export default MyMenu;