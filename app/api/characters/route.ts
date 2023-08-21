import { NextResponse } from "next/server";

async function fetchCharacters() {
    const response = await fetch('https://hp-api.onrender.com/api/characters', {
        "method": "GET",
        cache: 'no-store'
        })
        
        const characters = await response.json();
        return characters;

}

export async function GET(request: any) {
    const coins = await fetchCharacters();
    return NextResponse.json(coins);
}