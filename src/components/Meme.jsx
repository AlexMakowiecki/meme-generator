import "../styles/Meme.css"
import React from "react"
import exampleMeme from "/take-my-money.png"

export default function Meme() {
  const [memes, setMemes] = React.useState([])
  const [memeInfo, setMemeInfo] = React.useState({
    upperText: "",
    bottomText: "",
    image: exampleMeme
  })


  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemes(data.data.memes))
  }, [])

  function handleChange(e){
    const {name, value} = e.target;
    setMemeInfo(prevMemeInfo => {
      return {
        ...prevMemeInfo,
        [name]: value
      }
    })
  }

   function changeMeme(e){
    e.preventDefault()
    const randomPos = Math.floor(Math.random() * memes.length)
    setMemeInfo(prevMemeInfo => {
      return {
        ...prevMemeInfo,
        image: memes[randomPos].url
      }
    })
  } 

  return (
    <div className="meme">
      <form className="meme__form" onSubmit={changeMeme}>
        <label className="input-container">
          <span className="meme__label">Upper text</span>
          <input
            placeholder="Shut up" 
            className="meme__input"
            name="upperText"
            value={memeInfo.upperText}
            onChange={handleChange}/>
        </label>
        <label className="input-container">
          <span className="meme__label">Bottom text</span>
          <input
            placeholder="and take my money"
            className="meme__input"
            name="bottomText"
            value={memeInfo.bottomText}
            onChange={handleChange}/>
        </label>


        <button className="meme__submit-button">Get a new meme image 🖼️</button>
      </form>
      <div className="meme__display">
        <p className="meme__text meme__upper-text">{memeInfo.upperText}</p>
        <p className="meme__text meme__bottom-text">{memeInfo.bottomText}</p>
        <img className="meme__image" src={memeInfo.image}></img>
      </div>
    </div>
  )
}