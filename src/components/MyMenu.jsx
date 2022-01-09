import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MyIcon from '../parts/MyIcon';

function MyMenu() {
  return (
    <List>
      {/* ここの '' の部分を入れるのはなんとかしたい... */}
      {['', '', '', '', 'Activity', 'Chat', 'Team', 'Calendar', 'Call'].map((text, index) => (
        <ListItem button key={text}
        style={{
          textAlign:'center',
          justifyContent:'center',
          }}>
          <div>
          <MyIcon name={text}/>
          <Typography style={{color:'white'}}>{text}</Typography>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

export default MyMenu;
