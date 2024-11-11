import { SearchProps } from "./types";

export default function Search({ setSearchPopupToggle, searchPopupToggle }: SearchProps) {
    return (
        <>
        <button
            type="button"
            className="h-full aspect-square lg:hidden"
            onClick={()=>setSearchPopupToggle(!searchPopupToggle)}>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
        <form className="min-w-72 h-9 border border-slate-500 rounded hidden lg:flex">
            <input 
                type="search" 
                className="h-full w-full rounded pl-2 border-0"/>
            <button
                className="px-2"
                type="submit"
                aria-label="search button">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        </form>
        </>
    );
}