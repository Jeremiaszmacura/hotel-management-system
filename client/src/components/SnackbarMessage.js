import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const SnackbarMessage = ({isOpen, setIsOpen, message, appearance}) => {

    const handleValidationErrorSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false)
    };

    return (
            <Snackbar open={isOpen} autoHideDuration={5000}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      onClose={handleValidationErrorSnackbarClose}>
                <Alert onClose={() => setIsOpen(false)} severity={appearance} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
    );
};

export default SnackbarMessage;
