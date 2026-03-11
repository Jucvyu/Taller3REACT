import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartBadge = ({ count }) => {
    return (
        <Badge badgeContent={count} color="error">
            <ShoppingCartIcon />
        </Badge>
    );
};