import { useLocation, useNavigate } from '@solidjs/router';
import MenuIcon from '@suid/icons-material/Menu';
import { IconButton, Menu, MenuItem, MenuList } from '@suid/material';
import { createMemo, createSignal } from 'solid-js';
import { ExperienceContainer } from '../experience';
import { ProjectContainer } from '../projects';
import { setOpenModal } from '../resume';

const NavButton = () => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="nav-button"
        class="w-14 h-14 fixed top-10 left-10 z-50"
        onClick={event => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MenuIcon class="w-14 h-14 text-secondary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#d7c898',
          },
        }}
      >
        <MenuItem
          style={{ color: '#df4c38' }}
          sx={{
            '& .MuiMenuItem-root': {
              color: '#df4c38',
            },
          }}
          onClick={() => {
            ExperienceContainer?.scrollIntoView({ behavior: 'smooth' });
            handleClose();
          }}
        >
          Experience
        </MenuItem>

        <MenuItem
          style={{ color: '#df4c38' }}
          onClick={() => {
            ProjectContainer?.scrollIntoView({ behavior: 'smooth' });
            handleClose();
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
          style={{ color: '#df4c38' }}
          onClick={() => {
            setOpenModal(prev => !prev);
            handleClose();
          }}
        >
          Resume
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavButton;
