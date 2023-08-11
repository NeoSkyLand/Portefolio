import Form from "@/app/components/tools/form";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contain mx-4 p-4 mt-8 ">
        <div className="flex justify-center items-center py-4">
          <h1 className="">Contact</h1>
        </div>
        <div className="flex justify-center py-4">
          <div className="">
            <div className="flex justify-center items-center py-4 px-3 text-[#ebc5f5] font-tiltprismRegular">
              <p >
                Si vous avez besoins de plus d'informations veuillez ecrire dans
                se formulaire
              </p>
            </div>
            <div className="text-[#ebc5f5]">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="contain mt-8 p-4 mx-4 mb-20">
        <div className="flex justify-center text-[#ebc5f5]">
          <div className="grid grid-cols-2 lg:flex lg:justify-center">
            <Link href="/" className="p-8">
              <Image src="/Phone.svg" width={50} height={50} alt="Reseaux" />{" "}
              Tel
            </Link>
            <Link href="/" className="p-8">
              <Image src="/Email.svg" width={50} height={50} alt="Reseaux" />
              Email
            </Link>
            <Link href="/" className="p-8">
              <Image src="/Linkedin.svg" width={50} height={50} alt="Reseaux" />
              Linkedin
            </Link>
            <Link href="/" className="p-8">
              <Image src="/GitHub.svg" width={50} height={50} alt="Reseaux" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
