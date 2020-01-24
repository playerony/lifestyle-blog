import React from 'react'

import { SquareItem, LineItem } from './DashboardPage.style'

const Item = (props: any): any => {

    return (
        <div>
            {props.display ?
                < SquareItem >
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <p>{props.category}</p>
                    <p>{props.icon}</p>
                </SquareItem >
                :
                <LineItem>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <p>{props.category}</p>
                    <p>{props.icon}</p>
                </LineItem>
            }
        </div>
    )
}

export default Item