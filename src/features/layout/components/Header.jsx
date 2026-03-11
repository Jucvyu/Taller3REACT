// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'

// //MUI
// import { AppBar, Button, Stack, Box, Typography, Icon, Container } from '@mui/material';

// // MUI Icons
// import HomeIcon from '@mui/icons-material/Home';
// import ArticleIcon from '@mui/icons-material/Article';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';

// export const Header = () => {
//     return (
//         <Box>
//             <AppBar position="static" color='primary'>
//                 <Container maxWidth="xl">

//                     {/* Logo */}
//                     <Typography variant='h5'>
//                         Carrito de Compras
//                     </Typography>

//                     {/* Links */}
//                     <Stack direction="row" spacing={5}>
//                         <Button startIcon={<HomeIcon />} to="/" variant='contained'>Home</Button>
//                         <Button startIcon={<ArticleIcon />} to="/articles" variant='contained'>Articulos</Button>
//                         <Button startIcon={<LocalOfferIcon />} to="/offers" variant='contained'>Ofertas</Button>
//                         <Button startIcon={<AccountBoxIcon />} to="/myaccount" variant='contained'>Mi cuenta</Button>
//                         <Button startIcon={<AccountBoxIcon />} to="/login" variant='contained'>Inciar Sesión</Button>
//                         <Button startIcon={<ShoppingBagIcon />} to="/mybuys" variant='contained'>Mis compras</Button>
//                         <Button startIcon={<ShoppingCartIcon />} to="/myfavourite" variant='contained'>Mis favoritos</Button>
//                     </Stack>
//                     {/* Buscador */}
//                     <Container maxWidth="xl">
//                         <input
//                             type="search"
//                             placeholder="Buscar productos..."
//                         />
//                         <Button variant='contained' color='success' endIcon={<SearchIcon />}>
//                             Buscar
//                         </Button>
//                     </Container>


//                 </Container>
//             </AppBar>
//         </Box>
//     )
// }
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// MUI
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    InputBase
} from '@mui/material'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SearchIcon from '@mui/icons-material/Search'
import BookmarkIcon from '@mui/icons-material/Bookmark';

// Hooks
import { useCart } from "../../layout/hooks/ContextCart";
import { CartBadge } from "./BadgeCart";

export const Header = () => {

    const { cartCount } = useCart();

    const [open, setOpen] = useState(false)

    const menuItems = [
        { text: 'Home', path: '/', icon: <HomeIcon /> },
        { text: 'Artículos', path: '/articles', icon: <ArticleIcon /> },
        { text: 'Favoritos', path: '/favourite', icon: <BookmarkIcon /> },
        { text: 'Mi Cuenta', path: '/myaccount', icon: <AccountBoxIcon /> },
        { text: 'Mis Compras', path: '/mybuys', icon: <ShoppingBagIcon /> },
        { text: 'Carrito', path: '/cart', icon: <CartBadge count={cartCount} /> }
    ]
return (
    <>
        <AppBar
            position="fixed"
            sx={{ backgroundColor: '#2685b1' }}
        >
            <Toolbar>

                {/* Botón menú móvil */}
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
                    onClick={() => setOpen(true)}
                    className='btn-movil'
                >
                    <MenuIcon />
                </IconButton>

                {/* Logo */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    Supermercado
                </Typography>

                {/* Links Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.text}
                            color="inherit"
                            component={Link}
                            to={item.path}
                            startIcon={item.icon}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>

                {/* Buscador Desktop */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: '2px 10px',
                        borderRadius: 1,
                        ml: 2
                    }}
                >
                    <InputBase
                        placeholder="Buscar..."
                        sx={{ color: 'white', ml: 1 }}
                        id='input'
                    />
                    <IconButton sx={{ color: 'white' }}>
                        <SearchIcon />
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>

        {/* Drawer Mobile */}
        <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton component={Link} to={item.path}>
                                {item.icon}
                                <ListItemText sx={{ ml: 2 }} primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>

        {/* Espacio para que el contenido no quede debajo del AppBar */}
        <Toolbar />
    </>
)
}