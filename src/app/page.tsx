import {ProductsGroup, TopBar} from "@/components/shared";

export default function Home() {
    return (
        <div className="mx-auto py-5 px-4 max-w-[1440px]">

            <TopBar/>

            <ProductsGroup title={"Свечи"} items={[
                {
                    name: "Свеча №1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus laboriosam minus officia! Cumque dicta et inventore obcaecati quas recusandae, voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut.",
                    imageURL: "",
                    price: "124",
                    id: "1",
                },
                {
                    name: "Свеча №2",
                    description: "dadadad",
                    imageURL: "",
                    price: "326",
                    id: "2",
                },
                {
                    name: "Свеча №3",
                    description: "consectetur adipisicing elit. Aspernatur ducimus consectetur adipisicing elit. Aspernatur ducimus",
                    imageURL: "",
                    price: "566",
                    id: "3",
                },
                {
                    name: "Свеча №4",
                    description: " Aspernatur ducimus laboriosam minus officia! Cumque dicta et inventore obcaecati quas recusandae, voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut.",
                    imageURL: "",
                    price: "300",
                    id: "4",
                },
                {
                    name: "Свеча №5",
                    description: "voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut",
                    imageURL: "",
                    price: "69",
                    id: "5",
                }
            ]} categoryId={1}
            />

            <ProductsGroup title={"Наборы"} items={[
                {
                    name: "Набор №1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus laboriosam minus officia! Cumque dicta et inventore obcaecati quas recusandae, voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut.",
                    imageURL: "",
                    price: "123457364574",
                    id: "6",
                },
                {
                    name: "Набор №2",
                    description: "dadadad",
                    imageURL: "",
                    price: "32235463476",
                    id: "7",
                },
                {
                    name: "Набор №3",
                    description: "consectetur adipisicing elit. Aspernatur ducimus consectetur adipisicing elit. Aspernatur ducimus",
                    imageURL: "",
                    price: "54365766",
                    id: "8",
                },
                {
                    name: "Набор №4",
                    description: " Aspernatur ducimus laboriosam minus officia! Cumque dicta et inventore obcaecati quas recusandae, voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut.",
                    imageURL: "",
                    price: "13132500",
                    id: "9",
                },
                {
                    name: "Набор №5",
                    description: "voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut",
                    imageURL: "",
                    price: "634679",
                    id: "10",
                }
            ]} categoryId={1}
            />



            {/*<CarouselTpl/>*/}

        </div>
    );
};
