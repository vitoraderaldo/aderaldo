import { useState } from "react"
import alphaVantage from "../../services/AlphaVantage"
import StockItem from "../StockItem"
import style from './StockSearch.module.css'

const AlphaVantage = new alphaVantage()

function StockSearch() {

  const [stock, setStock] = useState("")
  const [stocks, setStocks] = useState([])
  const [error, setError] = useState(null)

  const handleStockChange = (stock) => {    
    setStock(stock)  
  }

  const handleSubmit = async (event) => {
    try {        
      event.preventDefault()     
      setStocks([])
      if (stock.length < 3) {
        throw Error("Type at least 3 characters")
      }
      let result = await AlphaVantage.searchStock(stock)              
      setStocks(result)   
      setError(false)
    } catch (e) {
      console.log(e)
      setError(e)
    }
  }
  
  const Failed = () => {
    let ErrorMessage = (
      <div className={style.error}>
        <p>{error?.message}</p>
      </div>
    )
    return error ? ErrorMessage : null
  }
  const StockList = () => {
    return stocks.length > 0 ? <div className={style.searches}>{stocks.map(item => <StockItem key={item["1. symbol"]} {...item} />)}</div>: null
  }

  return (  
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.searchField}>
          {/* <span>Lupa</span> */}
          <input className={style.input} type="text" placeholder="Company Name" value={stock} onChange={e => handleStockChange(e.target.value)} />
          {/* <span>Load</span> */}
        </div>      
      </form>       
      <StockList />      
      <Failed />
    </div> 
    
  )
}

export default StockSearch