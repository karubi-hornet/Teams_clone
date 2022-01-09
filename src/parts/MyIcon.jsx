import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function getIcon(name){
    switch(name){
        case 'Activity':
            return  <NotificationsIcon color='info'/>
        case 'Chat':
            return <ChatIcon color='info'/>
        case 'Team':
            return <PeopleIcon color='info' />
        case 'Calendar':
            return <EventNoteIcon color='info' />
        case 'Call':
            return <PhoneInTalkIcon color='info' />
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
