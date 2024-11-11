import Logo from "./Logo";
import Search from "./Search";
import { SearchProps } from "./types";

export default function Header({ searchPopupToggle, setSearchPopupToggle}: SearchProps) {
    return (
        <header className="flex justify-between p-2 h-14 mb-7">
            <Logo/>
            <nav className="flex gap-9 items-center">
                <ul className="hidden md:flex gap-5">
                    <li className="hover:underline"><a href="#">World</a></li>
                    <li className="hover:underline"><a href="#">Business</a></li>
                    <li className="hover:underline"><a href="#">Technology</a></li>
                    <li className="hover:underline"><a href="#">Sports</a></li>
                    <li className="hover:underline"><a href="#">Science</a></li>
                    <li className="hover:underline"><a href="#">Entertainment</a></li>
                </ul>
                <Search 
                    searchPopupToggle={searchPopupToggle}
                    setSearchPopupToggle={setSearchPopupToggle}/>
            </nav>
            
        </header>
    );
};