import Image from "next/image";
import CandleImageMock from "../../assets/images/candleMock.jpg"

export const Card = () => {
    return (
        <article className="card rounded-2xl">
            <p className="p-4 text-2xl font-bold">name card</p>
            <Image src={CandleImageMock} alt="candles"/>

            <p className="mt-2 p-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
                dolorem est facere facilis hic illo ipsa, libero, molestiae molestias nemo nisi nobis odit officia
                quasi quo soluta vel vitae. Laborum!</p>

            <div className="flex mt-5 justify-between">
                <p className="text-2xl font-bold pl-4">234 р.</p>

                <label className="flex items-center w-fit font-bold text-2xl">
                    <button className="p-2 w-10 bg-red-100">-</button>
                    <p className="flex items-center justify-center w-10 bg-gray-100 h-full text-lg">2</p>
                    <button className="p-2 w-10 bg-sky-100 rounded-br-2xl">+</button>
                </label>
            </div>

        </article>
    );
};
