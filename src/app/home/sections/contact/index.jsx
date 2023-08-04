import Form from "@/app/components/tools/form";

const Contact = () => {
  return (
    <section className="">
      <div className="flex justify-center pt-4">

      <div className="border rounded-2xl w-3/4 border-red-500">

      <h1 className="flex justify-center pt-4">Contact</h1>
      <p className="flex justify-center pt-2 pb-4 px-6">
       Si vous avez besoins de plus d'informations veuillez ecrire dans se formulaire
      </p>
      <Form/>
      </div>
      </div>
    </section>
  );
};
export default Contact;
