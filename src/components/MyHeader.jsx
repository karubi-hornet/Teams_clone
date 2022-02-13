import { IconButton } from "@mui/material";
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled, alpha } from '@mui/material/styles';
import { stringAvatar } from '../common/Common.js'



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  color: 'darkgray',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledIconBase = styled(IconButton)(({ theme }) => ({
  color: 'white',
}));

// todo
// 1. ヘッダーの幅を少し縮める

function MyHeader() {
  return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <StyledIconBase ><ChevronLeftIcon /></StyledIconBase>
          <StyledIconBase ><ChevronRightIcon /></StyledIconBase>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <StyledIconBase ><MoreHorizIcon /></StyledIconBase>
          <StyledIconBase ><Avatar {...stringAvatar('Test User')} /></StyledIconBase>
          </Toolbar>
      </AppBar>
    );
}

export default MyHeader;
