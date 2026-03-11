import React from 'react';
import {
    Button,
    Stack,
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Box,
    IconButton,
    Tooltip
} from '@mui/material';

// Iconos
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

// Hook del contexto
import { useCart } from "../../layout/hooks/ContextCart";

export const MyFavourite = () => {
    const { cart, buyItem, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleRemoveIndividual = (index) => {
        buyItem(index); // Reutilizamos la lógica de quitar del arreglo
    };

    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Carrito de Compras
            </Typography>

            {cart.length === 0 ? (
                <Box textAlign="center" sx={{ mt: 5 }}>
                    <RemoveShoppingCartIcon sx={{ fontSize: 60, color: 'text.disabled' }} />
                    <Typography color="text.secondary" sx={{ mt: 2 }}>
                        No hay productos en el carrito.
                    </Typography>
                </Box>
            ) : (
                <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                    <List>
                        {cart.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    secondaryAction={
                                        <Stack direction="row" spacing={1}>
                                            {/* Botón Eliminar Individual */}
                                            <Tooltip title="Eliminar del carrito">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="delete"
                                                    color="error"
                                                    onClick={() => handleRemoveIndividual(index)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>

                                            {/* Botón Comprar Individual */}
                                            <Button
                                                variant="contained"
                                                color="success"
                                                size="small"
                                                onClick={() => {
                                                    alert(`Compraste: ${item.title}`);
                                                    buyItem(index);
                                                }}
                                            >
                                                Comprar
                                            </Button>
                                        </Stack>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar src={item.image} variant="rounded" sx={{ width: 50, height: 50 }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={item.price.toLocaleString("es-CO", {
                                            style: "currency",
                                            currency: "COP",
                                            minimumFractionDigits: 0
                                        })}
                                        sx={{ ml: 2 }}
                                    />
                                </ListItem>
                                {index < cart.length - 1 && <Divider variant="inset" />}
                            </React.Fragment>
                        ))}
                    </List>

                    <Box sx={{ mt: 3, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h5" fontWeight="bold">
                                Total: {total.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 })}
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                {/* Botón Borrar Todo */}
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => {
                                        if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
                                            clearCart();
                                        }
                                    }}
                                >
                                    Vaciar Carrito
                                </Button>

                                {/* Botón Comprar Todo */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<CheckCircleIcon />}
                                    onClick={() => {
                                        alert("¡Compra exitosa!");
                                        clearCart();
                                    }}
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Comprar Todo
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};