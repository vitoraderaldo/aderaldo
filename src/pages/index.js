import StockSearch from '../components/StockSearch/StockSearch'
import styles from './index.module.css'

function Home() {
  return (    
    <div className={styles.stockSearch}>
      <h1>
        <img src="/static/logo.png"/>
      </h1>      
      <StockSearch/>
    </div>
  )
}

export default Home