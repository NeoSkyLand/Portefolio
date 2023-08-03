"use client";
import Link from "next/link";
import Input from "../input";

const Form = () => {
  const SubmitForm = () => {
    alert("Formulaire envoyé");
  };

  return (
    <form action="">
      <div className="flex flex-col items-center">
        <label htmlFor="">Votre prénom et nom :</label>
        <Input type={"text"} placeholder={"prénom/nom"} />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Votre adresse email :</label>
        <Input type={"email"} placeholder={"email"} />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Votre téléphone :</label>
        <Input type={"tel"} placeholder={"téléphone"} />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="">Objet du message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-56 border border-green-300 rounded-lg"
        ></textarea>
      </div>
      <div className="flex flex-col items-center py-4">
        <button
          className="border border-green-300 rounded-lg p-4"
          onClick={() => SubmitForm()}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
