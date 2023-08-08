import Form from "@/app/components/tools/form";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="">
      <div className="flex justify-center pt-4 pb-4">

      <div className="contain  border rounded-2xl w-3/4 border-red-500 lg:w-1/2">

      <h1 className="flex justify-center pt-4">Contact</h1>
      <p className="flex justify-center pt-2 pb-4 px-6">
       Si vous avez besoins de plus d'informations veuillez ecrire dans se formulaire
      </p>
      <Form/>
      <div className="flex justify-center">

      <div className="grid grid-cols-2 lg:flex lg:justify-center">
        <Link href="/" className="p-8"><Image src="/Phone.svg" width={50} height={50} alt="Reseaux"/> Tel</Link>
        <Link href="/" className="p-8"><Image src="/Email.svg" width={50} height={50} alt="Reseaux"/>Email</Link>
        <Link href="/" className="p-8"><Image src="/Linkedin.svg" width={50} height={50} alt="Reseaux"/>Linkedin</Link>
        <Link href="/" className="p-8"><Image src="/GitHub.svg" width={50} height={50} alt="Reseaux"/>GitHub</Link>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};
export default Contact;
