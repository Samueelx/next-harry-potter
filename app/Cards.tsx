// "use client";
import Image from "next/image";
// import styles from "./cards.module.css";
type Character = {
  id: string;
  name: string;
  image: string;
  dateOfBirth: string;
}

async function getData() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  const data: Character[] = await res.json();
  return data;
}

async function getOneCharacter() {
  const characters: Character[] = await getData();
  let id = characters[0].id
  /**Fetch the character */
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
  const data: Character = await res.json();
  return data;
}



export default async function Cards() {
  const data = await getData();
  const chars = data.slice(0, 15);

  return (
    <div>
      <main className="main">
        {chars.map((char, index) => {
          return <div className="card" key={index}>
          <Image
            src={char.image}
            alt="Character Card"
            className="cardimg"
            width={0}
            height={0}            
          />
          <div className="cardcontent">
            <h2 className="cardheader">{char.name}</h2>
            <p className="chardob">
              {char.dateOfBirth}
            </p>
            <a href="#" className="button">
              Find out more
            </a>
          </div>
        </div>
        })}
      </main>
    </div>
  );
}
