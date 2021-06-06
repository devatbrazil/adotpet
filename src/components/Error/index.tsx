import React from "react";

type IError = {
  type: "Error404" | "FailLoading" | "FailPermission";
}

const Error: React.FC<IError> = ({ type }) => {
  return (
    <>
      {type === "Error404" && <h2>Error404: Página não encontrada </h2>}
      {type === "FailLoading" && (
        <h2>Falha no carregamento do conteúdo</h2>
      )}
      {type === "FailPermission" && <h2>Rota não pública</h2>}
    </>
  );
};

export default Error;