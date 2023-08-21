'use client';
import Link from "next/link"
import SearchBar from "./search-bar"
import Cards from "./Cards"

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className='text-xl italic font-bold tracking-widest flex-1'>Harry Potter</h2>
        <nav className="flex-1">
          <ul className="flex justify-center">
            <li className="float-left">
              <Link href="link" className="border border-slate-300 text-slate-300 px-2 py-1 
            rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none mx-2">Link</Link>
            </li>
            <li className="float-left">
              <Link href="link" className="border border-slate-300 text-slate-300 px-2 py-1 
            rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none mx-2">Link</Link>
            </li>
            <li className="float-left">
              <Link href="link" className="border border-slate-300 text-slate-300 px-2 py-1 
            rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none mx-2">Link</Link>
            </li>
          </ul>
        </nav>
        <div className="w-full flex-1 my-4">
          <SearchBar/>
        </div>
      </header>

      <div>
        <div className="mb-8">
        <Cards />
        </div>
      </div>
    </>
  )
}
