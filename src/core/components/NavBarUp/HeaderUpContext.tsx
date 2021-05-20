import { createContext, ReactNode, useContext, useState } from 'react'

//Tipagem funções
type HeaderUpContextData = {
  setName: (headerUp?: string) => void;
  headerUp: string;
  nameCompany: () => void;
}

export const HeaderUpContext = createContext({} as HeaderUpContextData);

type HeaderUpContextProvideProps = {
  children: ReactNode;
}

export function HeaderContextProvide({ children }: HeaderUpContextProvideProps) {
  const [headerUp, setHeaderUp] = useState('Empresa Teste');

  function setName(headerUp?: string) {
    setHeaderUp(headerUp || "...");
  }

  //Criar um função para pegar o nome da empresa
  function nameCompany() {
    setHeaderUp('Empresa Teste');
  }

  return (
    <HeaderUpContext.Provider
      value={{
        setName,
        headerUp,
        nameCompany
      }}
    >
      {children}
    </HeaderUpContext.Provider>
  )
}

export const useHeaderUp = () => {
  return useContext(HeaderUpContext);
}