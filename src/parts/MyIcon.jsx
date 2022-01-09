import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import ChatIcon from '@mui/icons-material/Chat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import PeopleIcon from '@mui/icons-material/People';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import EventNoteIcon from '@mui/icons-material/EventNote';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

function getIcon(name){
    switch(name){
        case 'Activity':
            return  <NotificationsNoneOutlinedIcon />
        case 'Chat':
            return <ChatOutlinedIcon />
        case 'Team':
            return <PeopleAltOutlinedIcon />
        case 'Calendar':
            return <EventNoteOutlinedIcon />
        case 'Call':
            return <PhoneOutlinedIcon />
        case 'File':
            return <InsertDriveFileOutlinedIcon />
        default: 
            return <div></div>
  }
}

function MyIcon(props) {
            return (
                <div>
                    {getIcon(props.name)}
                </div>
            )
    }

export default MyIcon;
