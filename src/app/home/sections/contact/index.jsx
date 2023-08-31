import Form from "@/app/components/tools/form";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <section id="contact">
      <div className="flex justify-center">

      <div className="contain mx-4 p-4 mt-8 lg:w-1/2 w-3/4">
        <div className="flex justify-center items-center py-4 font-tiltprismRegular text-[#07061b] dark:text-[#5ce1e6] text-2xl">
          <h1 className="">Contact</h1>
        </div>
        <div className="flex justify-center py-4">
          <div className="">
            <div className="flex justify-center items-center py-4 px-3 text-[#611a8d] dark:text-[#ebc5f5] font-handjetRegular text-2xl">
              <p >
                Si vous avez besoins de plus d'informations veuillez ecrire dans
                se formulaire
              </p>
            </div>
            <div className="dark:text-[#ebc5f5] text-[#611a8d] font-handjetRegular text-2xl">
              <Form />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center">

      <div className="contain mt-8 p-4 mx-4 mb-20 lg:w-1/2 w-3/4">
        <div className="flex justify-center text-[#611a8d] dark:text-[#ebc5f5] text-2xl">
          <div className="grid grid-cols-2 lg:flex lg:justify-center font-handjetRegular">
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
      </div>
    </section>
  );
};
export default Contact;
