function UsuarioAcima (props) {

    return (
        <div class="sidebar-title">
          <img class="profile" src={props.image} alt={props.alt} />
          <div>
            <p>{props.profile}</p>
            <p>{props.sub}</p>
          </div>
        </div>
    )
}

function Sugest (props) {

  return(
    <div class="sugestao">
    <div>
      <img class="profile" src={props.image} alt={props.alt} />
      <div class="sugestao-texto">
        <p>{props.profile}</p>
        <p>{props.status}</p>
      </div>
    </div>
    <span>Seguir</span>
  </div>
  )
}

export default function Csidebar () {
    
    const sugests = [{
        image: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        profile: "bad.vibes.memes",
        status: "Segue você",
        alt: "zoro1"
    },
    {
        image: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        profile: "bad.vibes.memes",
        status: "Segue você",
        alt: "zoro1"
    },
    {
        image: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        profile: "bad.vibes.memes",
        status: "Segue você",
        alt: "zoro1"
    },
    {
        image: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        profile: "bad.vibes.memes",
        status: "Segue você",
        alt: "zoro1"
    },
    {
        image: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg",
        profile: "bad.vibes.memes",
        status: "Segue você",
        alt: "zoro1"
    }];

    const listaSugests = sugests.map(sugest => <Sugest 
    image={sugest.image} 
    alt={sugest.alt} 
    profile={sugest.profile}
    status={sugest.status}/>)
    
    return (
        <div class="sidebar">
            <UsuarioAcima 
            image="https://ovicio.com.br/wp-content/uploads/2021/07/20210712-6606aa5288ffbc242c86be44ee8384f7-1024x614.png"
            alt=""
            profile="Zorin"
            sub="Zorin" />
        <div class="sidebar-sugestoes">
          <div>
            <span>Sugestões para você</span>
            <span>Ver tudo</span>
          </div>
          {listaSugests}
        </div>
      </div> 
    )
}