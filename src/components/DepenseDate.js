 import React from "react"
 import classes from './DepenseDate.module.css'
function DepenseDate(props){
    
    return (<div className={classes.expense_date}>
            <div>{props.date}</div>
            <div>{props.date}</div>
            <div>{props.date}</div>
    </div>)
}

export default DepenseDate