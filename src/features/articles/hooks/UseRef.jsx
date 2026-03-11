import { useRef, useEffect } from "react";
import { Paper, TextField, Button, Stack } from "@mui/material";

export function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
                <Stack spacing={2}>
                    <TextField
                        label="Escribe algo"
                        inputRef={inputRef}
                        fullWidth
                    />
                    <Button variant="contained" onClick={() => inputRef.current.focus()}>
                        Volver a enfocar
                    </Button>
                </Stack>
            </Paper>
        </>
    );
}