import { Companie } from 'core/types/companie';
import { makeResquet } from 'core/utils/request';
import { createContext, ReactNode, useContext, useState } from 'react'

//Tipagem funções
type HeaderUpContextData = {
  setName: (headerUp?: string) => void;
  headerUp: string;
  NameCompany: () => void;
}

export const HeaderUpContext = createContext({} as HeaderUpContextData);

type HeaderUpContextProvideProps = {
  children: ReactNode;
}

export function HeaderContextProvide({ children }: HeaderUpContextProvideProps) {
  const [headerUp, setHeaderUp] = useState('...');

  function setName(headerUp?: string) {
    setHeaderUp(headerUp || "...");
  }

  //Criar um função para pegar o nome da empresa
  function NameCompany() {

    var companyResponse: Companie;
    makeResquet({ url: '/companies/1' })
      .then(respose => companyResponse = respose.data)
      .finally(() => {
        if (companyResponse) {
          setName(companyResponse.name)
        }
      });

  }

  return (
    <HeaderUpContext.Provider
      value={{
        setName,
        headerUp,
        NameCompany
      }}
    >
      {children}
    </HeaderUpContext.Provider>
  )
}

export const useHeaderUp = () => {
  return useContext(HeaderUpContext);
}