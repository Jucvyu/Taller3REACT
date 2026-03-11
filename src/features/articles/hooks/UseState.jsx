import { useState } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5, mb: 5 }}>
                <Stack spacing={3} alignItems="center">
                    <Typography variant="h4" fontWeight="bold">
                        {count}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={() => setCount(count - 1)}>
                            -1
                        </Button>
                        <Button variant="contained" onClick={() => setCount(count + 1)}>
                            +1
                        </Button>
                        <Button variant="contained" onClick={() => setCount(count + 10)}>
                            +10
                        </Button>
                        <Button variant="text" color="error" onClick={() => setCount(0)}>
                            Reset
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
}