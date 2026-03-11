import React from "react"
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent
} from "@mui/material"

import { Link } from "react-router-dom";

export const Content = () => {
    return (
        <Box>

            {/* HERO */}
            <Box
                sx={{
                    textAlign: "center",
                    py: 12,
                    backgroundImage: `url(./img/fondoTienda.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: "black",
                    borderRadius: 4,
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    overflow: "hidden"
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Tienda virtual Supermercado
                    </Typography>

                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Todos los productos disponibles en tienda virtual
                    </Typography>

                    <Box mt={4}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: "30px",
                                px: 4,
                                mr: 2
                            }}
                        >
                            Comprar
                        </Button>

                        <Button
                            variant="text"
                            size="large"
                        >
                            Más información
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* PRODUCT HIGHLIGHT */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 5 }}>
                        Productos destacados
                    </Typography>
                    <Grid container spacing={4} alignItems="center">

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Frutas y Verduras"
                                    subheader="Frutas frescas y verduras de calidad"
                                />
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="./img/frutas.jpg"
                                    alt="Frutas"
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">
                                        Frutas frescas y verduras de calidad, directamente a tu puerta. <br />
                                        <Button variant="contained" sx={{ mt: 1, borderRadius: "30px", px: 2 }}>Ver más</Button>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Productos para el Hogar"
                                    subheader="Todo lo que necesitas para tu hogar"
                                />
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="./img/productosLimpieza.jpg"
                                    alt="Productos de Limpieza"
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary"> Todos los productos de limpieza necesarios para el hogar. <br /></Typography>
                                    <Button variant="contained" sx={{ mt: 1, borderRadius: "30px", px: 2 }}>Ver más</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Panadería y Parva"
                                    subheader="Comidas sencillas para el desayuno "
                                />
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="./img/panaderia.jpg"
                                    alt="Panadería y Parva"
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">
                                        Pan fresco y delicioso, ideal para el desayuno y comidas ligeras. <br />
                                    </Typography>
                                    <Button variant="contained" sx={{ mt: 1, borderRadius: "30px", px: 2 }}>Ver más</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* FEATURES */}
            <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 5 }}>
                        Características de nuestra Tienda
                    </Typography>
                    <Grid container spacing={6} textAlign="center">

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Domicilios Rápidos"
                                />
                                <CardMedia
                                    component="img"
                                    image="./img/domicilios.jpg"
                                    height="140"
                                    alt="Domicilios Rápidos"
                                    sx={{ objectFit: 'cover', objectPosition: 'center'}}
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">Recibe tus productos en tiempo récord, sin importar dónde estés.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Productos de Calidad"
                                />
                                <CardMedia
                                    component="img"
                                    image="./img/calidad.jpg"
                                    height="140"
                                    alt="Productos de Calidad"
                                    sx={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">Obten todos los mejores productos del mercado al mejor precio.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title="Gran Variedad de Productos"
                                />
                                <CardMedia
                                    component="img"
                                    image="./img/variedad.jpg"
                                    height="140"
                                    alt="Domicilios Rápidos"
                                    sx={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">Encuentra una gran variedad de productos para satisfacer tus necesidades.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* CALL TO ACTION */}
            <Box
                sx={{
                    py: 12,
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white"
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Ver en el Respositorio <br />Aquí puedes ver el proyecto completo
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 3,
                            borderRadius: "30px",
                            px: 5
                        }}
                        href="https://github.com/Jucvyu/Taller3REACT"
                        target="_blank"
                    >
                        Ver en GitHub
                    </Button>
                </Container>
            </Box>
        </Box>
    )
}
