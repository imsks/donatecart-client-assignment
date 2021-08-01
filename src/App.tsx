import React, { useState } from "react"
import { ProductCard } from "./components"
import Data from "./data/products.json"
import { fetchCurrencyData } from "./utils"

const App = () => {
    const [products, setProducts] = useState(Data.products)

    const handleCurrencyChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        // 1. Get currency code
        const currency = event.target.value

        // if currency is USD, Get data from JSON only
        if (currency === "USD") {
            setProducts(Data.products)
            return
        }

        // 2. Fetch currency data
        const exchangeData = await fetchCurrencyData()

        // 3. Get exchange rate
        const newProductData = products.map((product) => {
            return {
                ...product,
                price:
                    "₹ " +
                    parseInt(product.price.substring(1)) *
                        Math.round(exchangeData.conversion_rates.INR),
            }
        })

        // 4. Set products
        setProducts(newProductData)
    }

    return (
        <section className="homepage">
            <div className="homepage__container">
                <div className="homepage__container_cards">
                    {products.map((product, key) => {
                        const { name, imageUrl, price } = product

                        return (
                            <ProductCard
                                name={name}
                                imageUrl={imageUrl}
                                price={price}
                                key={key}
                            />
                        )
                    })}
                </div>

                <div className="homepage__container__action">
                    <div className="homepage__container__action__container">
                        <label className="homepage__container__action__container__label">
                            Choose currency
                        </label>

                        <select
                            className="homepage__container__action__container__select"
                            onChange={handleCurrencyChange}
                        >
                            {Data.currency.map((currencyName, key) => {
                                return (
                                    <option
                                        key={key}
                                        className="homepage__container__action__container__option"
                                    >
                                        {currencyName}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
