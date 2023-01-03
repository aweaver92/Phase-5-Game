import React from "react";
import MainContainer from "./MainContainer";


function ShopContainer( props ) {

    const {item} = props

    return(
        <div>
            <p>{item.name}</p>
            <p>{`Level: ${item.level}`}</p>
            <p>{`Price: ${item.price}`}</p>
        </div>
    )
}

export default ShopContainer;