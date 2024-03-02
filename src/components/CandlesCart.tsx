import {CandlesCartProps} from "../tools/types";

export const CandlesCart = ({name, description, img, price,  id}: CandlesCartProps) => {

    console.log(price)
    return (
        <div className="card">
            <img className="card__image" src={img} alt="candles" />
            <p className="card__name">{name}</p>
            <p className="card__description">{description}</p>
            <div className="card-actions">
                <p className="card__price"><span className="card__priceNum">{price}</span> BYN</p>
                <button className="card__add">
                    в корзину
                </button>
            </div>
        </div>
    )
};
