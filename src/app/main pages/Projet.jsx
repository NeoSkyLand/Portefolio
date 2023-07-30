import Image from "next/image";
const Projet = () => {
    return(
        <main className="">
            <div className="flex justify-center">

            <h1 className="flex justify-center items-center">
                Mes Projets
            </h1>
            </div>

            <section className="flex justify-center">
            <article className="grid grid-cols-2">
                <div>
                <Image src="/R.jpg" alt="Flash" width={100} height={100}/>
                    <p>Flash Not Dead</p>
                </div>
                <div>
                <Image src="/th.jpg" alt="Flash" width={100} height={100}/>
                    <p>Agence Web</p>
                </div>
            </article>
                
            </section>
        </main>
    )
}

export default Projet;