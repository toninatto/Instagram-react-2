function Story (props) {
  return (
    <div>
        <img class="profile" src={props.image} alt="" />
      </div>
  )
}

export default function Storys () {

    const images = [
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
    ]

    const listaImg = images.map(imagem => <Story image={imagem} />);

      return (
        <div class="storys borda">
           {listaImg}
           <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      )
}
