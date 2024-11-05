import Carousel from "./Carousel";
import Currency from "./Currency.tsx";

export default function HeroSection() {
    return(
        <section className="m-auto w-11/12 justify-center md:w-4/5 lg:w-full lg:flex lg:gap-6 lg:px-5">
            <Carousel/>
            <Currency/>
        </section>
        
    );
}