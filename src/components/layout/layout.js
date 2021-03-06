import React from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.module.css'
const layout = props => {
    return (
        <Aux>
        <div>Toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
        </Aux>

    )
}

export default layout