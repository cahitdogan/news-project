type SearchPopupProps = {
    searchPopupToggle: boolean;
}

export default function SearchPopup({ searchPopupToggle }: SearchPopupProps) {
    let formClassName:string = "flex shadow-xl fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-md h-12 border border-slate-500 rounded";

    if (!searchPopupToggle) formClassName = "hidden " + formClassName
    
    return (
        <form className={formClassName}>
            <input
                placeholder="Search..."
                type="search"
                className="w-full h-full pl-2 rounded border-0"/>
            <button 
                type="submit"
                className="px-2">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        </form>
    );
}