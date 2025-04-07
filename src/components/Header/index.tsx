import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface Props {
  title?: string;
}

function Header({ title = "GOSTYLE" }: Props) {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <IconButton
          sx={{
            backgroundColor: "background.secondary",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          fontWeight={600}
          width="100%"
          variant="caption"
          align="center"
          color="#0C0D34"
          letterSpacing="1.5px"
        >
          {title}
        </Typography>
        <IconButton
          sx={{
            backgroundColor: "background.secondary",
          }}
        >
          <Badge badgeContent={5} color="primary">
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
