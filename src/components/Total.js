import React from 'react'
import accounting from 'accounting'
import { Button , makeStyles } from '@material-ui/core'
import { getTotalBasket } from '../reducer'
import { useStateValue } from "../StateProvider";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },
    button:{
        marginTop: "2rem"
    }

}))

const Total = ({close}) => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getTotalBasket(basket))}</h5>
            <Link to="/checkout" style={{ textDecoration: 'none' , marginTop:"-20px"}}>
                <Button  onClick={close}  className={classes.button} variant="contained" color="secondary">
                    Check out
                </Button>
            </Link>
        </div>
    )
}

export default Total
