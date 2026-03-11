import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';

import React, { useContext } from "react";
import { Counter } from "../hooks/UseState";
import { Timer } from "../hooks/UseEffect";
import { FocusInput } from "../hooks/UseRef";
import { ExpensiveCalculation } from "../hooks/UseMemo";
import { ThemeContext } from "../hooks/UseContext";
import { useOnline } from "../hooks/OnlineStatus";
import { ToggleReducer } from "../hooks/UseReducer";
import { CallbackBasic } from "../hooks/UseCallback";

import { Paper, Button, Stack, Typography, Grid, Container } from "@mui/material";

export const Favourite = () => {
    const { dark, setDark } = useContext(ThemeContext);
    const isOnline = useOnline();

    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={4}>
                {/* Contador */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseState
                    </Typography>
                    <Counter />
                </Grid>
                {/* Temporizador */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseEffect
                    </Typography>
                    <Timer />
                </Grid>

                {/* Input Focus */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseRef
                    </Typography>
                    <FocusInput />
                </Grid>

                {/* Cálculo pesado */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseMemo
                    </Typography>
                    <ExpensiveCalculation />
                </Grid>

                {/* useContext / Modo Oscuro */}
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        useContext
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: dark ? "#121212" : "#fff",
                            color: dark ? "#fff" : "#000"
                        }}
                    >
                        <Stack spacing={2} alignItems="center">
                            <Typography variant="h6">
                                Modo {dark ? "Oscuro" : "Claro"}
                            </Typography>

                            <Button
                                variant="contained"
                                onClick={() => setDark(!dark)}
                            >
                                Cambiar tema
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        useOnlineStatus
                    </Typography>
                    <Typography variant="h6" textAlign="center">
                        Estado: {isOnline ? <SignalWifiStatusbar4BarIcon /> : <SignalWifiStatusbarConnectedNoInternet4Icon/>}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseReducer
                    </Typography>
                    <ToggleReducer />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                        UseCallback
                    </Typography>
                    <CallbackBasic />
                </Grid>

            </Grid>
        </Container>
    );
};