import logo from "./logo.svg";

export default function Logo() {
    return (
        <div className="flex items-center gap-3">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">News</h1>
        </div>
    );
}