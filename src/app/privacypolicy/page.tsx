import React from "react";
import { Head } from "./Head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head />

      <div className="bg-white px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-red-600">
          Política de Privacidade
        </h1>
        <p className="text-gray-800">
          Esta Política de Privacidade descreve como o Supermercado Baratão
          coleta, usa, protege e divulga as informações pessoais dos usuários
          que acessam o nosso site. Ao utilizar este site, você concorda com as
          práticas descritas nesta política.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Informações Coletadas
        </h2>
        <p className="text-gray-800">
          Durante a sua interação com o site, poderemos coletar informações
          pessoais, tais como nome, endereço de e-mail, número de telefone,
          endereço residencial, informações de pagamento e histórico de compras.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Uso das Informações
        </h2>
        <p className="text-gray-800">
          As informações coletadas são utilizadas para processar pedidos,
          entregar produtos, fornecer suporte ao cliente, personalizar a
          experiência de compra, enviar ofertas e promoções relevantes, realizar
          análises de dados para melhorar os nossos serviços, entre outras
          finalidades legítimas.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Compartilhamento de Informações
        </h2>
        <p className="text-gray-800">
          Podemos compartilhar as informações pessoais dos usuários com
          terceiros, incluindo fornecedores de serviços e parceiros de negócios,
          desde que seja necessário para fornecer os serviços solicitados ou
          para cumprir obrigações legais. Tomamos medidas para garantir a
          segurança e a confidencialidade das informações durante o
          compartilhamento.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Cookies e Tecnologias de Rastreamento
        </h2>
        <p className="text-gray-800">
          Utilizamos cookies e outras tecnologias de rastreamento para melhorar
          a experiência do usuário, analisar o tráfego do site, personalizar
          anúncios e fornecer serviços relevantes. Ao utilizar o nosso site,
          você concorda com o uso de cookies, conforme descrito na nossa
          Política de Cookies.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Segurança das Informações
        </h2>
        <p className="text-gray-800">
          Tomamos medidas de segurança para proteger as informações pessoais dos
          usuários contra acesso não autorizado, uso indevido, divulgação ou
          alteração. No entanto, nenhuma transmissão de dados pela Internet ou
          sistema de armazenamento eletrônico é totalmente seguro. Portanto, não
          podemos garantir a segurança absoluta das informações.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Seus Direitos
        </h2>
        <p className="text-gray-800">
          Você tem o direito de acessar, corrigir, atualizar ou excluir suas
          informações pessoais. Se desejar exercer esses direitos ou tiver
          alguma dúvida sobre a nossa Política de Privacidade, entre em contato
          conosco através dos canais de atendimento indicados no site.
        </p>

        <h2 className="mb-4 mt-8 text-xl font-bold text-red-600">
          Alterações nesta Política
        </h2>
        <p className="text-gray-800">
          Esta Política de Privacidade poderá ser atualizada periodicamente.
          Recomendamos que você revise-a regularmente para se manter informado
          sobre as nossas práticas de privacidade. A data da última atualização
          será indicada no topo desta página.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
