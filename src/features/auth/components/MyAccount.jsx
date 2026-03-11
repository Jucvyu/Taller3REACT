import React, { useState, useEffect } from "react";
import {
    Box,
    Grid,
    TextField,
    Button,
    Typography,
    Paper,
    IconButton,
    InputAdornment
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const MyAccount = () => {

    const [showPassword, setShowPassword] = useState(false); // poner estdo de showPassword como falso

    const [form, setForm] = useState({    // poner estdo de form como un objeto vacio
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({   // poner estado predeterminado de errores como un objeto vacio
        email: "Ingrese un correo en el campo",
        password: "Ingrese una contraseña en el campo"
    });

    const [isFormValid, setIsFormValid] = useState(false);    // poner estado de validación de formulario como falso

    // VALIDAR EMAIL
    const validateEmail = (email) => {     // funcion para validar el email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            return "Formato de correo inválido";
        }

        return "";
    };

    // VALIDAR PASSWORD
    const validatePassword = (password) => {

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasMinLength = password.length >= 8;
        const hasNumber = /[0-9]/.test(password);

        const errors = [];

        if (!hasLowerCase) errors.push("1 minúscula");
        if (!hasUpperCase) errors.push("1 mayúscula");
        if (!hasMinLength) errors.push("8 caracteres");
        if (!hasNumber) errors.push("1 número");

        if (errors.length > 0) {
            return "Debe contener " + errors.join(", ");
        }

        return "";
    };

    const handleChange = (e) => {     // funcion para manejar los cambios en el formulario

        const { name, value } = e.target;

        setForm({     // poner el estado de form como un objeto con el nombre y el valor del campo
            ...form,
            [name]: value     // recoge el nombre del campo y el valor del campo
        });

        let error = "";

        if (name === "email") {
            error = validateEmail(value);
        }

        if (name === "password") {
            error = validatePassword(value);
        }

        setErrors({     // poner el estado de errores como un objeto con el nombre y el error del campo
            ...errors,
            [name]: error
        });
    };

    // VALIDAR FORMULARIO COMPLETO
    useEffect(() => {

        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);

        if (!emailError && !passwordError && form.email && form.password) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }

    }, [form]);

    const handleSubmit = () => {
        alert("Ingresando como: " + form.email);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f4f6f8",
                p: 2
            }}
        >
            <Grid container justifyContent="center">

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                    <Paper
                        elevation={4}
                        sx={{
                            p: 5,
                            borderRadius: 4,
                            textAlign: "center"
                        }}
                    >

                        <Typography variant="h4" fontWeight="bold" mb={1}>
                            Bienvenido
                        </Typography>

                        <Typography color="text.secondary" mb={4}>
                            Inicia sesión para continuar
                        </Typography>

                        <Grid container direction="column" spacing={3}>

                            {/* EMAIL */}
                            <Grid size={12}>
                                <TextField
                                    fullWidth
                                    label="Correo electrónico"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            {/* PASSWORD */}
                            <Grid size={12}>
                                <TextField
                                    fullWidth
                                    label="Contraseña"
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    className='btn-mostrar'
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                        
                                                    }
                                                >
                                                    {showPassword
                                                        ? <VisibilityOff />
                                                        : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            {/* BOTON */}
                            <Grid size={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    disabled={!isFormValid}
                                    onClick={handleSubmit}
                                    sx={{
                                        borderRadius: 3,
                                        py: 1.5,
                                        textTransform: "none",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Grid>

                            <Grid size={12}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        cursor: "pointer",
                                        color: "primary.main",
                                        textAlign: "center"
                                    }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Typography>
                            </Grid>

                            <Grid size={12}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    textAlign="center"
                                >
                                    ¿No tienes cuenta?{" "}
                                    <span style={{ color: "#1976d2", cursor: "pointer" }}>
                                        Regístrate
                                    </span>
                                </Typography>
                            </Grid>

                        </Grid>

                    </Paper>

                </Grid>

            </Grid>
        </Box>
    );
};