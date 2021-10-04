import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/HollowKnight_logo.webp";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router";
import DrawerCart from "../components/DrawerCart";
import { logRoles } from "@testing-library/dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const [openDrawerCart, setDrawerCart] = useState(false);
  const history = useHistory();

  const hanbleOpenDrowerCart = () => {
    setDrawerCart(true);
  };

  const hanbleCloseDrowerCart = () => {
    setDrawerCart(false);
  };

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/hk-ecommerce">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img className={classes.image} src={`./${logo}`} />
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hello {user ? user.email : "Guest"}
          </Typography>
          <div className={classes.button}>
            <Link to="/singin" style={{ textDecoration: "none" }}>
              <Button variant="outlined" onClick={handleAuth}>
                <strong>{user ? "Sing Out" : "Sing In"}</strong>
              </Button>
            </Link>
            {/* <Link to="/checkout-page">
                <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={basket?.length} color="secondary">
                        <ShoppingCart fontSize="large" color="primary"/>
                    </Badge>
                </IconButton>
              </Link> */}
            <IconButton
              onClick={hanbleOpenDrowerCart}
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart fontSize="large" color="primary" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerCart open={openDrawerCart} close={hanbleCloseDrowerCart} />
    </div>
  );
}
