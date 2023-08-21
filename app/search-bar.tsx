'use client'
import { useState } from "react";

export default function SearchBar() {
    // const [query, setQuery] = useState('');
    // async function handleSubmit(e: React.SyntheticEvent){
    //     e.preventDefault();

    //     const resp = await fetch(`/api/characters/search?query=${query}`)
    //     const characters = await resp.json();
    // }
    return (
        <div>
            <form role="search">
                <label htmlFor="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autoFocus required
                />
                <button type="submit">Go</button>
            </form>
        </div>
    );
}