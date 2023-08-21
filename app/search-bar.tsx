'use client'
import styles from './header.module.css'

export default function SearchBar() {
    return (
        <div className={`${styles.searchbar}`}>
            <form role="search">
                <label htmlFor="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autoFocus required
                />
                <button type="submit">Go</button>
            </form>
        </div>
    );
}