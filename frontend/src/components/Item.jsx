import React from "react";

const Item = () => {
  return (
    <a href="/" className=" flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-1232068778989705676/original/7bbdd57b-2fe7-4088-9409-993603c9eec0.jpeg?im_w=1200"
        alt="Imagem do lugar"
        className="aspect-square object-cover rounded-3xl"
      />

      <div className="">
          <h3 className="text-xl font-semibold">João Pessoa, Brasil</h3>
          <p className="truncate text-gray-600">
            Curta uma experiência elegante neste lugar bem-localizado. Localização,
            privilegiada, próximo à praia, boas opções de alimentação, mercado,
            padarias, farmácia. Próximo ao Busto de Tamandaré, Jampa, próximo
            feirinhas de artezanato. Orla movimentada, com quiosques, atividades
            esportivas, ofertas de passeios, ótimas praias para banho. Ítens do
            Aptº: frigobar, Ar , TV, cafeteira, liquidificador, sanduicheira, micro
            ondas, ferro de passar, cama Queen Estacionamento Rotativo - não
            garantimos vaga Acesso do hóspede Apartamento 209 Área de Lazer:
            Piscina, academia Estacionamento rotativo. Obs. Não garantimos vaga
            Outras observações Não aceitamos Petes Estacionamento Rotativo Obs: não
            garantimos vagas
          </p>
          <p>
            <span className="font-semibold">R$ 497</span> por duas noite
          </p>
      </div>
    </a>
  );
};

export default Item;
