import React from "react";




function Conteiner(props){
    return (
        <>
            <div className="h-[100dvb] w-full bg-black">{props.children}</div>
        </>
    )
}

export default Conteiner