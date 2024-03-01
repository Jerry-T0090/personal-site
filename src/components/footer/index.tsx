import { Button } from '@suid/material';
const Footer = () => {
  return (
    <div class="w-[100vw] h-fit absolute left-0 flex flex-col bg-black items-center">
      <a target="_blank" href="https://github.com/Jerry-T0090">
        <Button sx={{ color: '#df4c38' }}>Github</Button>
      </a>
      <Button sx={{ color: '#df4c38' }}>Resume</Button>
      <Button sx={{ color: '#df4c38' }} href="mailto:jerrytheronier@gmail.com">
        Contact
      </Button>
    </div>
  );
};

export default Footer;
