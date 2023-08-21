'use client'

export default function SearchBar() {
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