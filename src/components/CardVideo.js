import React from "react";

export function CardVideo(props) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={props.funcao}>
        <img src={props.imagem} alt="" />
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
}
