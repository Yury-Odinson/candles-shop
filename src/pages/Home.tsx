import {useEffect, useState} from "react";
import {CandlesCartProps} from "../tools/types";
import {getData} from "../tools/utils";
import {CandlesCart} from "../components/CandlesCart";

export const Home = () => {

    const [data, setData] = useState<CandlesCartProps[]>([]);

    useEffect(() => {
        getData().then((candles) => setData(candles));
    }, []);

    return (
        <>
            <h1>Ассортимент</h1>
            <div className="content">
                {data?.map(e => (
                    <CandlesCart id={e.id} name={e.name} description={e.description} img={e.img} price={e.price} key={e.id}/>
                ))}
            </div>
        </>

    )
};
