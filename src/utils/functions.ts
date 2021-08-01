import axios from "axios"
import { ExchangeAPIResponseData } from "../interfaces"

export const fetchCurrencyData = async () => {
    const exchangeResponse = await axios.get(
        `${process.env.REACT_APP_CURRENCY_EXCHANGE_BASE_ENDPOINT}/${process.env.REACT_APP_CURRENCY_EXCHANGE_API}/latest/USD`
    )

    return exchangeResponse.data as ExchangeAPIResponseData
}
