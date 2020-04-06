import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { FC } from "react";

export interface ErrorModalStateProps {
    showError: boolean,
    error: string,
}

export interface ErrorModalActionProps {
    clearError: () => void,
}

export type ErrorModalProps = ErrorModalStateProps & ErrorModalActionProps;

export const ErrorModal: FC<ErrorModalProps> = (props) => {

    const { showError, error, clearError } = props;
    const isDev = true; //process?.env?.NODE_ENV === "development";

    return (
        <Modal isOpen={showError} toggle={clearError}>
            <ModalHeader toggle={clearError}>Unexpected error</ModalHeader>
            <ModalBody>
                { isDev && error ? error : 'Unable to get data from server. Please try again later.' }
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={clearError}>OK</Button>
                </ModalFooter>
        </Modal>
    );
}