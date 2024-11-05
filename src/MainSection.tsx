import test from "./images/test.png"

export default function MainSection() {
    return(
        <main>
            <h2 
                className="text-center text-2xl font-bold mb-5">
                En Son Haberler</h2>
            <section
                className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 lg:grid-cols-3">
                    <article
                        className="bg-slate-100 rounded-xl p-5">
                            <img src={test} alt="..." className="m-auto"/>
                            <h3 className="font-bold">Başlık</h3>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, animi a eligendi dolore quibusdam?</p>
                            <time className="text-sm" dateTime="2024-11-05">05.11.2024</time>
                    </article>
                    <article
                        className="bg-slate-100 rounded-xl p-5">
                            <img src={test} alt="..." className="m-auto"/>
                            <h3 className="font-bold">Başlık</h3>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, animi a eligendi dolore quibusdam?</p>
                            <time className="text-sm" dateTime="2024-11-05">05.11.2024</time>
                    </article>
                    <article
                        className="bg-slate-100 rounded-xl p-5">
                            <img src={test} alt="..." className="m-auto"/>
                            <h3 className="font-bold">Başlık</h3>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, animi a eligendi dolore quibusdam?</p>
                            <time className="text-sm" dateTime="2024-11-05">05.11.2024</time>
                    </article>
                    <article
                        className="bg-slate-100 rounded-xl p-5">
                            <img src={test} alt="..." className="m-auto"/>
                            <h3 className="font-bold">Başlık</h3>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, animi a eligendi dolore quibusdam?</p>
                            <time className="text-sm" dateTime="2024-11-05">05.11.2024</time>
                    </article>
            </section>
        </main>
    );
}