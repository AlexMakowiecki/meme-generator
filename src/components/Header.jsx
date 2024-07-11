import "../styles/Header.css"
import trollFace from "/troll-face.png"


export default function Head(){
  return (
    <header>
      <img className="header__image" src={trollFace}/>
      <h1 className="header__title">Meme Generator</h1>
      <h3 className="header__project">React Course - Project 3</h3>
    </header>
  )
}