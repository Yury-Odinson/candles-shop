import {CheckoutBlock, CheckoutSidebar} from "@/components/shared";
import {Input} from "@/components/ui/input"
import {Label, Textarea} from "@/components/ui";

export default function Page() {
    return (
        <div className="w-full h-screen bg-secondary">

            <div className="mx-auto mt-5 py-4 max-w-[1440px]">
                <h1 className="px-4 text-2xl font-bold text-center md:text-left">Оформление заказа</h1>
                <div className="flex flex-col gap-6 sm:p-4 md:flex-row">

                    <div className="flex flex-1 flex-col lg:w-3/4">

                        <CheckoutBlock title="1. Корзина" className="">
                            <p>cart data</p>
                            <p>cart data</p>
                            <p>cart data</p>
                            <p>cart data</p>
                        </CheckoutBlock>

                        <CheckoutBlock title="2. Персональные данные" className="">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="first-name">Имя</Label>
                                    <Input type="text" placeholder="Имя" id="first-name"/>
                                </div>

                                <div>
                                    <Label htmlFor="last-name">Фамилия</Label>
                                    <Input type="text" placeholder="Фамилия" id="last-name"/>
                                </div>

                                <div>
                                    <Label htmlFor="email">E-Mail</Label>
                                    <Input type="text" placeholder="E-Mail" id="email"/>
                                </div>

                                <div>
                                    <Label htmlFor="phone">Телефон</Label>
                                    <Input type="text" placeholder="Телефон" id="phone"/>
                                </div>
                            </div>
                        </CheckoutBlock>

                        <CheckoutBlock title="3. Адрес доставки" className="">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <Label htmlFor="address">Телефон</Label>
                                    <Input type="text" placeholder="Введите адрес" id="address"/>
                                </div>

                                <div>
                                    <Label htmlFor="comment">Комментарий к заказу</Label>
                                    <Textarea placeholder="Укажите дополнительную информацию"/>
                                </div>
                            </div>
                        </CheckoutBlock>

                    </div>

                    <div className="lg:w-4/12">
                        <CheckoutSidebar/>
                    </div>

                </div>

            </div>
        </div>
    );
};
