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
                    id: "1",
                },
                {
                    name: "Свеча №4",
                    description: " Aspernatur ducimus laboriosam minus officia! Cumque dicta et inventore obcaecati quas recusandae, voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut.",
                    imageURL: "",
                    price: "300",
                    id: "1",
                },
                {
                    name: "Свеча №5",
                    description: "voluptas? Accusamus consequatur obcaecati placeat quae, quaerat rerum soluta ut",
                    imageURL: "",
                    price: "69",
                    id: "1",
                }
            ]} categoryId={1}
            />

            {/*<CarouselTpl/>*/}

        </div>
    );
};
