import React, {FC} from 'react';
import classes from "./Modal.module.css"

interface ModalProps {
    active: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({active, title, onClose, children}) => {
    if (!active) {
        return null;
    }

    return (
        <div
            className={classes.Modal}
            onClick={onClose}>
            <div
                className={classes.ModalContent}
                onClick={event => event.stopPropagation()}>
                <div className={classes.ModalHeader}>
                    <div className={classes.ModalTitle}>
                        {title}
                    </div>
                </div>
                <div className={classes.ModalBody}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;