import { MantineTransition, Modal, ModalProps } from '@mantine/core';

interface IProps {
  title?: string;
  fullScreen?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  centered?: boolean;
  size?: string;
  closeOnClickOutside?: boolean;
  padding?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  transition?: MantineTransition;
  zIndex?: number;
  overflow?: ModalProps['overflow']
  onClose?: () => void;
}

export function IModal({
  title,
  isOpen,
  setIsOpen,
  fullScreen,
  children,
  centered,
  size,
  closeOnClickOutside,
  padding,
  radius,
  transition,
  zIndex,
  overflow,
  onClose
}: IProps) {
  return (
    <Modal
      title={title || ""}
      opened={isOpen}
      onClose={function (): void {
        setIsOpen(false);
        onClose && onClose();
      }}
      centered={centered}
      overflow={overflow}
      size={size}
      closeOnClickOutside={closeOnClickOutside}
      padding={padding || 'xl'}
      radius={radius || 'md'}
      transition={transition || "pop"}
      zIndex={zIndex}
    >
      {children}
    </Modal>
  );
}
