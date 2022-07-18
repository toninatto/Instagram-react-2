import React from "react";

function Post (props) {

  const [clique, setClique] = React.useState(false);
  console.log(clique);
  return (
    <div class="post borda">
    <div class="post-title">
      <div>
        <img class="profile" src={props.imagep} alt={props.altp} />
        <h4>{props.name}</h4>
      </div>
      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
    </div>
    <div class="post-media">
      <img src={props.imageg} onClick={() => setClique(!clique)} alt={props.altg} />
    </div>
    <div class="post-actions">
      <div class="post-botoes">
        <div class="esquerda">
          
          {clique ? <ion-icon name="heart" onClick={() => setClique(!clique)}></ion-icon> : 
          <ion-icon name="heart-outline" onClick={() => setClique(!clique)}></ion-icon>}
          
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class="direita">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
      <div class="post-comentarios"></div>
    </div>
  </div>
  )
}

export default function Feed () {

    const objetos = [ {
        imagemp: "https://i.pinimg.com/736x/e6/67/3f/e6673fc4f4930a84277c3f88bc87978e.jpg",
        imagemg: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        altp: "one_piece_is_good",
        altg: "zoro1",
        name: "Zoro"
    },
    {
        imagemp: "https://i.pinimg.com/736x/e6/67/3f/e6673fc4f4930a84277c3f88bc87978e.jpg",
        imagemg: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        altp: "one_piece_is_good",
        altg: "zoro1",
        name: "Zoro"
    },
    {
        imagemp: "https://i.pinimg.com/736x/e6/67/3f/e6673fc4f4930a84277c3f88bc87978e.jpg",
        imagemg: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        altp: "one_piece_is_good",
        altg: "zoro1",
        name: "Zoro"
    } ];

    const listaObjetos = objetos.map(objeto => <Post 
    imagep={objeto.imagemp}
    imageg={objeto.imagemg}
    altp={objeto.altp}
    altg={objeto.altg}
    name={objeto.name}/>)

    return (
        <div class="feed">
          {listaObjetos}
        </div>
    )
}