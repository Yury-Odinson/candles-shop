import {ProductsGroup} from "@/components/shared";
import {prisma} from "../prisma/prisma-client";

export default async function Home() {

    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    return (
        <div className="mx-auto py-5 px-4 max-w-[1440px]">

            {
                categories.map(category => (

                    category.products.length > 0 && (

                        <ProductsGroup
                            key={category.id}
                            title={category.name}
                            items={category.products}
                            categoryId={category.id}
                        />

                    )
                ))
            }

        </div>
    );
};
