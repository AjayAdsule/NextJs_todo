import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader } from '../ui/dialog';

interface ModalProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, defaultOpen = false }) => {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
