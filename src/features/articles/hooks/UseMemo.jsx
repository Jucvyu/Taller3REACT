import { useState, useMemo } from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";

export function ExpensiveCalculation() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const heavyCalculation = (num) => {
        for (let i = 0; i < 100000000; i++) { }
        return num * 2;
    };

    const result = useMemo(() => heavyCalculation(number), [number]);

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    maxWidth: 400,
                    mx: "auto",
                    mt: 5,
                    backgroundColor: dark ? "#121212" : "#fff",
                    color: dark ? "#fff" : "#000"
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h6">
                        Resultado: {result}
                    </Typography>

                    <Button variant="contained" onClick={() => setNumber(number + 1)}>
                        Cambiar número
                    </Button>

                    <Button variant="outlined" onClick={() => setDark(!dark)}>
                        Cambiar tema
                    </Button>
                </Stack>
            </Paper>
        </>
    );
}