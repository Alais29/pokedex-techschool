import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
