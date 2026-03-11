import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent
} from "@mui/material"

import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useCart } from "../../layout/hooks/ContextCart";

export const Articles = () => {
    const { addCartShopping } = useCart()
    let articles = [
        {
            title: "Aceite Vegetal 1L",
            description: "Aceite ideal para cocinar.",
            image: "./img/aceite.jpg",
            price: 9200,
            rating: 4.2,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Agua Mineral 1.5L",
            description: "Agua mineral sin gas.",
            image: "./img/agua.jpg",
            price: 2800,
            rating: 4.4,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Arroz 1kg",
            description: "Arroz blanco premium.",
            image: "./img/arroz.jpg",
            price: 4200,
            rating: 4.4,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Banano x 1kg",
            description: "Banano listo para consumir.",
            image: "./img/banana.jpg",
            price: 4200,
            rating: 4.3,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Café Molido 500g",
            description: "Café colombiano premium.",
            image: "./img/cafe.jpg",
            price: 14500,
            rating: 4.9,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Carne Molida x 1kg",
            description: "Carne de res fresca.",
            image: "./img/carneMolida.jpg",
            price: 24000,
            rating: 4.6,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Cebolla x 1kg",
            description: "Cebolla cebolla cabezona.",
            image: "./img/cebolla.jpg",
            price: 7200,
            rating: 4.3,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Detergente 1kg",
            description: "Detergente en polvo para ropa.",
            image: "./img/detergente.jpg",
            price: 12500,
            rating: 4.3,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Galletas Dulces 200g",
            description: "Galletas dulces surtidas.",
            image: "./img/galletas.jpg",
            price: 2800,
            rating: 4.2,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Huevos AA x 30",
            description: "Cubeta de huevos AA.",
            image: "./img/huevo.jpg",
            price: 18500,
            rating: 4.8,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Jugo de Naranja 1L",
            description: "Jugo de naranja natural.",
            image: "./img/jugo.jpg",
            price: 8900,
            rating: 4.3,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Leche Entera 1L",
            description: "Leche entera pasteurizada.",
            image: "./img/leche.jpg",
            price: 3800,
            rating: 4.6,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Manzana Roja x 1kg",
            description: "Manzana fresca seleccionada.",
            image: "./img/manzanaRoja.jpg",
            price: 6500,
            rating: 4.5,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Pan Tajado Integral",
            description: "Pan fresco integral.",
            image: "./img/panIntegral.jpg",
            price: 5200,
            rating: 4.1,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Papitas Snack 150g",
            description: "Papitas crujientes sabor clásico.",
            image: "./img/papitas.jpg",
            price: 4000,
            rating: 4.3,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Papel Higiénico x 12",
            description: "Papel higiénico doble hoja.",
            image: "./img/papel.jpg",
            price: 18900,
            rating: 4.5,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Pasta Spaghetti 500g",
            description: "Pasta de trigo duro.",
            image: "./img/pasta.jpg",
            price: 4100,
            rating: 4.2,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Pechuga de Pollo x 1kg",
            description: "Pechuga fresca sin piel.",
            image: "./img/pechuga.jpg",
            price: 18500,
            rating: 4.7,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Queso Fresco 250g",
            description: "Queso fresco colombiano.",
            image: "./img/queso.jpg",
            price: 7600,
            rating: 4.5,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Refresco 2L",
            description: "Refresco sabor cola.",
            image: "./img/refresco.jpg",
            price: 9800,
            rating: 4.0,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Tomate x 1kg",
            description: "Tomates frescos para ensalada.",
            image: "./img/tomate.jpg",
            price: 3800,
            rating: 4.4,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Yogur Natural 1 unidad",
            description: "Yogur natural bajo en grasa.",
            image: "./img/yogurt.jpg",
            price: 3600,
            rating: 4.1,
            author: "Supermercado",
            date: "2026-03-01"
        },
        {
            title: "Azúcar Blanca 1kg",
            description: "Azúcar blanca refinada.",
            image: "./img/azucar.jpg",
            price: 5500,
            rating: 4.0,
            author: "Supermercado",
            date: "2026-03-01"
        }
    ];
    return (
        // List Products
        <Box sx={{ py: 5 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 5 }}>
                    Catálogo de productos
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    {articles.map((article, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                            {/* <Grid item xs={12} sm={6} md={3} key={index}> */}
                            <Card
                                sx={{
                                    width: "100%", // ancho fijo total de la card
                                    height: 340, // altura fija total de la card
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: 2,
                                    transition: "0.3s",
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-4px)"
                                    }
                                }}
                            >
                                {/* Contenedor para centrar la imagen */}
                                <Box
                                    sx={{
                                        height: 180,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#f5f5f5", // fondo neutro
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={article.image}
                                        alt={article.title}
                                        sx={{
                                            width: 260,         // ancho fijo de la imagen
                                            height: 140,        // alto fijo de la imagen
                                            objectFit: "contain" // mantiene proporción y centra
                                        }}
                                    />
                                </Box>

                                {/* Contenido de la card */}
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <div>
                                        <Typography variant="subtitle1" fontWeight="600" noWrap>
                                            {article.title}
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "primary.main",
                                                fontWeight: "bold",
                                                mt: 1
                                            }}
                                        >
                                            {article.price.toLocaleString("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0
                                            })}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                mt: 1,
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical"
                                            }}
                                        >
                                            {article.description}
                                        </Typography>
                                    </div>
                                    <Box 
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        mt: 2
                                    }}
                                    >
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                mt: 2,
                                                borderRadius: 2,
                                                textTransform: "none",
                                                fontWeight: "bold"
                                                
                                            }}
                                            onClick={() => addCartShopping(article)}    
                                        >
                                            <ShoppingCartIcon></ShoppingCartIcon>Agregar al carrito
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
