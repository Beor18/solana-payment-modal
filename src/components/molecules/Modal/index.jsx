import {
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalHeader,
    Text,
} from '@chakra-ui/react';
import { ButtonGeneric } from '../../atoms/ButtonGeneric';

export const ModalCustom = ({ open, close, children }) => {
    return (
        <Modal
            closeOnOverlayClick={false}
            blockScrollOnMount={false}
            isOpen={open}
            onClose={close}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Test Modal</ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                    {/* <ButtonGeneric text='Close' onClick={close} /> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
