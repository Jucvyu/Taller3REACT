import React, { useCallback } from "react";
import { Button, Stack } from "@mui/material";

export const CallbackBasic = () => {

    const showMessage = useCallback(() => {
        alert("Hola, soy un mensaje de callback");
    }, []);

    return (
        <Stack alignItems="center">
            <Button variant="contained" onClick={showMessage}>
                Mostrar mensaje
            </Button>
        </Stack>
    );
};