const Contact = () => {
  return (
    <main className="">
        <form action="">
                <article className="flex justify-center items-center">
            <section className="grid grid-cols-2">

          <div >
            <input type="text" className="border rounded" />
          </div>
          <div className="pl-8 pb-3">
            <input type="text" className="border rounded " />
          </div>
          <div>
          <input type="text" className="border rounded" />
          </div>
          <div className="pl-8">
            <input type="text" className="border rounded" />
            </div>
            
            </section>
                </article>
            <div className="flex justify-center pt-5">
                <input type="text" className="border rounded py-24" />
          </div>
      
            <button type="button">Envoyer</button>
        </form>
    </main>
  );
};
export default Contact;
