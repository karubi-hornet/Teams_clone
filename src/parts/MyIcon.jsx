import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

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
        case 'Planner':
            return <AssignmentOutlinedIcon />
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
