import React, { useReducer } from "react";
import { Button, Typography, Stack } from "@mui/material";

function reducer(state, action) {
    if (action.type === "toggle") {
        return !state;
    }
    return state;
}

export const ToggleReducer = () => {
    const [isOn, dispatch] = useReducer(reducer, false);

    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">
                Estado: {isOn ? "Encendido" : "Apagado"}
            </Typography>

            <Button
                variant="contained"
                onClick={() => dispatch({ type: "toggle" })}
            >
                Cambiar
            </Button>
        </Stack>
    );
};