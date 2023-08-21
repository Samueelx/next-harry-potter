import { NextResponse } from "next/server";

type Character = {
    id: string;
    name: string;
    image: string;
    yearOfBirth: number;
    house: string;
    species: boolean;
    wizard: boolean;
    gender: string;
    alive: boolean;
    ancestry: string
    wand: Wand;
    actor: string;
}

type Wand = {
    wood: string;
    core: string;
    length: number;
}

async function fetchCharacters() {
    const response = await fetch('https://hp-api.onrender.com/api/characters', {
        "method": "GET",
        cache: 'no-store'

        })
        
        const characters: Character[] = await response.json();
        return characters;

}

export async function GET(request: any) {
    const characters: Character[] = await fetchCharacters();
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get('query'))
    const query: string | null  = searchParams.get('query');

    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(query!.toLowerCase())
    });
    console.log("Done!!")

    return NextResponse.json(filteredCharacters);
}