import React, {FunctionComponent} from "react";

export  const Container:FunctionComponent = (props) => {
    return(
        <div className="max-w-8xl mx-auto py-2 p-8">{props.children}</div>
    )
}