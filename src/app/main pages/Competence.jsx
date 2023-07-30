import Image from "next/image";
const Competence = () => {
    return(
        <main>

<div className="flex justify-center">
    <h1>
        Mes Compétences
    </h1>
</div>
<section className="flex justify-center">
            <article className="grid grid-cols-2">
    <div>
        <Image src="/the.jpg" alt="image comme sa" width={100} height={100}/>
        <p>CSS</p>
    </div>
    <div>
    <Image src="/images.png" alt="image comme sa" width={100} height={100}/>
        <p>Html</p>
    </div>
    <div>
    <Image src="/RE.jpg" alt="image comme sa" width={100} height={100}/>
    <p>JavaScript</p>
    </div>
            </article>
</section>
        </main>
    );
};

export default Competence;