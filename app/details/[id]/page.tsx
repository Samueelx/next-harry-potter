import Image from "next/image";
import Link from "next/link";

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

async function getOneCharacter(id: string) {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
        cache: 'no-store'
    });
    const data: Character[] = await res.json();
    return data;
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getOneCharacter(params.id);
    const character: Character = data[0];
    return (
        <div>
            <header className="flex justify-between items-center mb-4">
        <h2 className='text-2xl italic font-bold tracking-widest'>Harry Potter</h2>
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
        
      </header>
            <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{character.name}</h1>
                        <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{character.species}</p>
                    </div>
                    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <Image src={character.image} alt="" className="w-full h-max object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" width={0} height={0} />
                        {/* <Image src="/beach-house-interior-1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" width={0} height={0} loading="lazy" />
                    <Image src="/beach-house-interior-2.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" width={0} height={0} /> */}
                    </div>
                    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                        {/* <dt className="sr-only">Reviews</dt>
                    <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                    </dd> */}
                        <dt className="sr-only">Location</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            House {character.house}
                        </dd>
                    </dl>
                    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                        <Link href="#" type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">{character.alive ? 'Alive' : 'Dead'}</Link>
                    </div>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        {character.name}, a {character.ancestry} {character.wizard ? 'wizard' : 'human(not a wizard)'} born in {character.yearOfBirth}, hails from an esteemed family. His wand, made of {character.wand.wood} and {character.wand.core}, reflects his determined nature. This complex character is portrayed by actor {character.actor}.
                    </p>
                </div>
            </main>
        </div>


    );
}