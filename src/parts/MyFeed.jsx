import { Avatar } from "@mui/material";
import { List, ListItem } from '@mui/material/';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { stringAvatar } from '../common/Common.js'

// function stringToColor(string) {
//     let hash = 0;
//     let i;
  
//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//       hash = string.charCodeAt(i) + ((hash << 5) - hash);
//     }
  
//     let color = '#';
  
//     for (i = 0; i < 3; i += 1) {
//       const value = (hash >> (i * 8)) & 0xff;
//       color += `00${value.toString(16)}`.substr(-2);
//     }
//     /* eslint-enable no-bitwise */
//     return color;
// }

// function stringAvatar(name) {
//     return {
//       sx: {
//         bgcolor: stringToColor(name),
//       },
//       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//     };
// }

function makeFeed(data){

}

const data = [
{
    name: 'Test Taro',
    reaction: 'good',
    time: '8:00',
    message: 'this message is test'
},
{
    name: 'Test Hanako',
    reaction: 'return',
    time: '7:00',
    message: 'this message is test2'
},
{
    name: 'Test Jiro',
    reaction: 'mention',
    time: '6:30',
    message: 'this message is test3'
},
]

function MyFeed(props) {
            return (
                <List>
                    {data.map((element, index) => (
                    <ListItem button>
                        <Box width={1/20} style={{ padding: '5%' }}>
                            <Avatar {...stringAvatar(element.name)} />
                        </Box>
                        <Box width={1} style={{ padding: '8%' }}>
                            <Typography>{element.name} san ga iine shimashi ta.</Typography>
                            <Typography style={{color: '#777777'}}>{element.message}</Typography>
                        </Box>
                        <Box style={{ paddingBottom: '20%' }}>
                            <Typography>{element.time}</Typography>
                        </Box>   
                    </ListItem>
                    ))}
                </List>

            )
    }

export default MyFeed;
