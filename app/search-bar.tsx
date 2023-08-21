'use client'
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    async function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        const resp = await fetch(`/api/characters/search?query=${query}`)
        const characters = await resp.json();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} role="search">
                <label htmlFor="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autoFocus required 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Go</button>
            </form>
        </div>
    );
}