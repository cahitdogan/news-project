import Carousel from "./Carousel";
import Currency from "./Currency.tsx";

export default function HeroSection() {
    return(
        <section className="mb-10 m-auto w-full md:w-4/5 lg:w-full lg:flex lg:justify-center lg:gap-6 lg:px-5">
            <Carousel/>
            <Currency/>
        </section>
        
    );
}