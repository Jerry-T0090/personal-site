import { Modal, Paper } from '@suid/material';
import { createSignal } from 'solid-js';

export const [openModal, setOpenModal] = createSignal(false);

const Resume = () => {
  const closeModel = () => setOpenModal(false);
  return (
    <Modal open={openModal()} onClose={closeModel}>
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          background: 'transparent',
        }}
      >
        <div class="w-full h-full flex items-center justify-center">
          <iframe
            src="src/assets/files/J.Theronier_Resume.pdf"
            width={800}
            height={800}
            class="max-w-full max-h-full slim-scrollbar"
          />
        </div>
      </Paper>
    </Modal>
  );
};

export default Resume;
