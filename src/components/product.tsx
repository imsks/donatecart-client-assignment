import { ProductCardProps } from "../interfaces"

const ProductCard = ({ name, imageUrl, price }: ProductCardProps) => (
    <div className="homepage__container_cards__item">
        <div className="homepage__container_cards__item__container">
            <img
                src={imageUrl}
                className="homepage__container_cards__item__container__image"
                alt="product"
            />
            <div className="homepage__container_cards__item__container__content">
                <h2 className="homepage__container_cards__item__container__content__heading">
                    {name}
                </h2>
                <h3 className="homepage__container_cards__item__container__content__subheading">
                    {price}
                </h3>
            </div>
        </div>
    </div>
)

export default ProductCard
