import { useState } from "react"

function StockItem(data) {
    
    const [style, setStyle] = useState(defaultStyle)

    const onMouseOver = () => {
        setStyle({...defaultStyle, ...mouseOverStyle})
    }

    const onMouseLeave = () => {
        setStyle(defaultStyle)
    }
    
    return (
        <a style={style} href={"/stock/"+ data["1. symbol"]} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <div>
                <span>{data["1. symbol"]} - {data["2. name"]}</span>
            </div>
        </a>        
    )
}

const defaultStyle =  {
    textDecoration: "none",
    color: "black",
    borderBottom: "1px solid #dedede",
    display: "block",
    padding: "10px 0px 10px 15px"    
}

const mouseOverStyle = {
    backgroundColor: "#d64000",
    color: "white"
}

export default StockItem