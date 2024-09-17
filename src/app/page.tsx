import {Card, TopBar} from "@/components/shared";
// import {CarouselTpl} from "@/components/shared/CarouselTpl";



export default function Home() {
    return (
        <div className="mx-auto py-5 px-4 max-w-[1440px]">

            <TopBar/>

            {/*<CarouselTpl/>*/}

            <section className="grid grid-cols-4 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    );
};
