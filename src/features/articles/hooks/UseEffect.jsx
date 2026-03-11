import React, { useState, useEffect } from "react";
import { Paper, Typography, Stack } from "@mui/material";

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                textAlign: "center"
            }}
        >
            <Stack spacing={1} alignItems="center">

                <Typography variant="h3">
                    {seconds}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    segundos
                </Typography>

            </Stack>
        </Paper>
    );
};