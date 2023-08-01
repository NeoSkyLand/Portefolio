import Link from "next/link";

const Contact = () => {
  return (
    <main className="">
        <form action="">
                <article className="flex justify-center items-center">
            <section className="grid grid-cols-2">

          <div >
            <input type="text" className="border rounded-full" />
          </div>
          <div className="pl-8 pb-3">
            <input type="text" className="border rounded-full " />
          </div>
          <div>
          <input type="text" className="border rounded-full" />
          </div>
          <div className="pl-8">
            <input type="text" className="border rounded-full" />
            </div>
            
            </section>
                </article>
            <div className="flex justify-center pt-5">
                <input type="text" className="border rounded py-24" />
          </div>
      <div className="flex justify-center py-2">

            <button type="button" className="border rounded-full">Envoyer</button>
      </div>
      <section>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </section>
        </form>
    </main>
  );
};
export default Contact;
