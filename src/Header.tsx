import logo from "./images/logo.svg";

function Logo() {
    return (
        <div className="flex items-center gap-3">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">News</h1>
        </div>
    );
}

type SearchProps = {
    searchPopupToggle: boolean;
}

function Search({ setSearchPopupToggle, searchPopupToggle }: SearchProps) {
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

export default function Header({ searchPopupToggle, setSearchPopupToggle}) {
    return (
        <header className="flex justify-between p-2 h-14 mb-7">
            <Logo/>
            <nav className="flex gap-9 items-center">
                <ul className="hidden md:flex gap-5">
                    <li className="hover:underline"><a href="#">Dünya</a></li>
                    <li className="hover:underline"><a href="#">Politika</a></li>
                    <li className="hover:underline"><a href="#">İş</a></li>
                    <li className="hover:underline"><a href="#">Teknoloji</a></li>
                </ul>
                <Search 
                    searchPopupToggle={searchPopupToggle}
                    setSearchPopupToggle={setSearchPopupToggle}/>
            </nav>
            
        </header>
    );
};