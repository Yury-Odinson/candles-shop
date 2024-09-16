import {Card} from "@/components/shared";


export default function Home() {
    return (
        <div className="wrapper p-5">
            <section className="grid grid-cols-4 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    );
};
