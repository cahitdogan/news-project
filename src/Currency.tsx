import { useState } from "react";
const key = import.meta.env.VITE_CURRENCY_API_KEY;

interface CurrencyData {
    USD: string;
    EUR: string;
    AUD: string;
    GBP: string;
    CNY: string;
    CHF: string;
}

export default function Currency() {
    const [currencyData, setCurrencyData] = useState<CurrencyData>({});
    const [loading, setLoading] = useState(true);
    
    fetch(`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=EUR%2CUSD%2CCAD%2CAUD%2CGBP%2CCNY%2CCHF&base_currency=TRY`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Currency network error!");
            }
        })
        .then(data => {
                setCurrencyData(data);
                setLoading(false);
        })
        .catch(error => {
            console.log(error);
        });

    if (loading) {
        return <p className="lg:flex-grow">Loading...</p>;
    }

    return (
        <section className="lg:flex-grow max-w-3xl sm:w-11/12 sm:m-auto lg:w-48">
            <h3 
                className="hidden text-2xl text-center font-bold lg:block mb-3">
                Currency
            </h3>
            <ul className="grid grid-cols-3 grid-rows-2 justify-center lg:block">
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 bg-slate-300 rounded lg:flex-row md:justify-between lg:grow-0">
                    <span>USD</span>
                    <span>{(Number(currencyData.USD) ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>EUR</span>
                    <span>{(Number(currencyData.EUR) ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base bg-slate-300 rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>AUD</span>
                    <span>{(Number(currencyData.AUD) ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>GBP</span>
                    <span>{(Number(currencyData.GBP) ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base bg-slate-300 rounded md:justify-between lg:flex-row lg:justify-between">
                    <span>CNY</span>
                    <span>{(Number(currencyData.CNY) ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>CHF</span>
                    <span>{(Number(currencyData.CHF) ** -1).toFixed(2)}</span>
                </li>
            </ul>
        </section>
    );
}
