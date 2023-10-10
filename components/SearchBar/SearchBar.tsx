"use client";

import { FormEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {
  const [setsearchPrompt, setSetsearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const isValidLinkProduct = async(link: string) => {
    try{
      setIsLoading(true);
      const parseUrl = new URL(link);
      const hostname = parseUrl.hostname;
      console.log(hostname);
      if (hostname.includes("amazon") || hostname.includes("magazineluiza")) {
        return true;
      }
    }catch(error){
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(setsearchPrompt);
    const isValidLink = await isValidLinkProduct(setsearchPrompt);

    if(isValidLink){
      toast.success('Link válido, redirecionando para a página de resultados ...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true
      });
    }else{
      toast.error('Link inválido, tente novamente ...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true
      });
    }
  };

  return (
    
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
    
      <input
        type="text"
        placeholder="Adicione o link do produto ..."
        className="searchbar-input"
        value={setsearchPrompt}
        onChange={(e) => setSetsearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn" disabled={setsearchPrompt === ''}>
        {isLoading ? "Carregando ..." : "Pesquisar"}
      </button>
    </form>
  );
};

export default SearchBar;
