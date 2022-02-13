import { Avatar } from "@mui/material";
import { List, ListItem } from '@mui/material/';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { stringAvatar } from '../common/Common.js'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const feedData = [
    {
        name: 'Test Taro',
        reaction: 'good',
        time: '8:00',
        message: 'this message is test'
    },
    {
        name: 'Test Hanako',
        reaction: 'reply',
        time: '7:00',
        message: 'this message is test2'
    },
    {
        name: 'Test Jiro',
        reaction: 'mention',
        time: '6:30',
        message: 'this message is test3'
    },
    {
        name: 'Test Taro',
        reaction: 'good',
        time: '8:00',
        message: 'this message is test'
    },
    {
        name: 'Test Hanako',
        reaction: 'reply',
        time: '7:00',
        message: 'this message is test2'
    },
    {
        name: 'Test Jiro',
        reaction: 'mention',
        time: '6:30',
        message: 'this message is test3'
    },
    {
        name: 'Test Taro',
        reaction: 'good',
        time: '8:00',
        message: 'this message is test'
    },
    {
        name: 'Test Hanako',
        reaction: 'reply',
        time: '7:00',
        message: 'this message is test2'
    },
    {
        name: 'Test Jiro',
        reaction: 'mention',
        time: '6:30',
        message: 'this message is test3'
    },
    {
        name: 'Test Taro',
        reaction: 'good',
        time: '8:00',
        message: 'this message is test'
    },
    {
        name: 'Test Hanako',
        reaction: 'reply',
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

function makeFeed(data){
    let content = ''
    switch (data.reaction) {
        case 'good':
            content = (
                <Box width={1} style={{ paddingLeft: '8%' }}>
                    <Typography><ThumbUpOffAltIcon />{data.name} さんがいいねしました。</Typography>
                    <Typography style={{color: '#777777'}}>{data.message}</Typography>
                </Box>
            )
            break;
        case 'reply':
            content = (
                <Box width={1} style={{ paddingLeft: '8%' }}>
                    <Typography><ReplyIcon />{data.name} さんが返信しました。</Typography>
                    <Typography style={{color: '#777777'}}>{data.message}</Typography>
                </Box>
            )
            break;
        case 'mention':
            content = (
                <Box width={1} style={{ paddingLeft: '8%' }}>
                    <Typography><AlternateEmailIcon />{data.name} さんがメンションしました。</Typography>
                    <Typography style={{color: '#777777'}}>{data.message}</Typography>
                </Box>
            )
            break;   
            default:
            content = ''        
    }

    return content
}

function MyFeed(props) {
    return (
        <List style={{maxHeight: '93.5vh', overflow: 'auto'}}>
            {feedData.map((element, index) => (
            <ListItem button>
                <Box width={1/20} style={{ padding: '5%' }}>
                    <Avatar {...stringAvatar(element.name)} />
                </Box>
                {makeFeed(element)}
                <Box style={{ paddingBottom: '20%' }}>
                    <Typography>{element.time}</Typography>
                </Box>   
            </ListItem>
            ))}
        </List>
    )
}

export default MyFeed;
