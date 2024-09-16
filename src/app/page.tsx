import {Card} from "@/components/shared";
import {Carousel} from "@/components/ui";
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

import ImgCar1 from "../assets/images/carousel1.jpg";
import ImgCar2 from "../assets/images/carousel2.jpg";
import ImgCar3 from "../assets/images/carousel3.jpg";


export default function Home() {
    return (
        <div className="mx-auto py-5 px-4 max-w-[1440px]">
            <Carousel>

                <CarouselContent className="h-[400px]">
                    <CarouselItem>
                        <Image src={ImgCar1} alt="carousel"/>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={ImgCar2} alt="carousel"/>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={ImgCar3} alt="carousel"/>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious/>
                <CarouselNext/>

            </Carousel>
            <section className="grid grid-cols-4 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    );
};
