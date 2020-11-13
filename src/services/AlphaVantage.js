import axios from "axios"
const _ = require("lodash")

const URL = "https://www.alphavantage.co"
const API_KEY = process?.env?.NEXT_PUBLIC_ALPHA_VANTAGE_KEY

class AlphaVantage {

    constructor() {
        this.axiosService = axios.create({
            baseURL: URL
        })
    }
    
    async searchStock(stock = "") {        
        let result = await this.axiosService.get(`query?function=SYMBOL_SEARCH&keywords=${stock}&apikey=${API_KEY}`)                      
        //let result = JSON.parse('{"data": {"bestMatches": [{"1. symbol": "TSCDY","2. name": "Tesco PLC","3. type": "Equity","4. region": "United States","5. marketOpen": "09:30","6. marketClose": "16:00","7. timezone": "UTC-05","8. currency": "USD","9. matchScore": "0.7273"},{"1. symbol": "TSCDF","2. name": "Tesco PLC","3. type": "Equity","4. region": "United States","5. marketOpen": "09:30","6. marketClose": "16:00","7. timezone": "UTC-05","8. currency": "USD","9. matchScore": "0.7143"},{"1. symbol": "TSCO.LON","2. name": "Tesco PLC","3. type": "Equity","4. region": "United Kingdom","5. marketOpen": "08:00","6. marketClose": "16:30","7. timezone": "UTC+00","8. currency": "GBP","9. matchScore": "0.7143"},{"1. symbol": "TCO.DEX","2. name": "Tesco PLC","3. type": "Equity","4. region": "XETRA","5. marketOpen": "08:00","6. marketClose": "20:00","7. timezone": "UTC+01","8. currency": "EUR","9. matchScore": "0.7143"},{"1. symbol": "TCO1.FRK","2. name": "Tesco PLC","3. type": "Equity","4. region": "Frankfurt","5. marketOpen": "08:00","6. marketClose": "20:00","7. timezone": "UTC+01","8. currency": "EUR","9. matchScore": "0.7143"}]}}')        
        return _.get(result, 'data.bestMatches')        
    }
}

export default AlphaVantage