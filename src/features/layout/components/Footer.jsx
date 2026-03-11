import React from "react"
import { Box, Container, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f7",
                py: 6,
                borderTop: "1px solid #000000"
            }}
        >
            <Container maxWidth="lg">
                {/* Línea inferior */}
                <Box
                    sx={{
                        borderTop: "1px solid #ddd",
                        pt: 3,
                        textAlign: "center"
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2026 Juan Andrés. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}