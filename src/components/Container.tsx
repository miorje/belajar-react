import React, {FunctionComponent} from "react";

export  const Container:FunctionComponent = (props) => {
    return(
        <div className="max-w-8xl mx-auto py-2 lg:px-8 sm:px-6 xs:px-5">{props.children}</div>
    )
}