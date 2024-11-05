import { useState } from "react";

const key = import.meta.env.VITE_CURRENCY_API_KEY;

export default function Currency() {
    const [currencyData, setCurrencyData] = useState({});
    const [loading, setLoading] = useState(true);
    
    fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/TRY`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.result = "success") {
                setCurrencyData(data);
                setLoading(false);
            } else {
                throw new Error("Currency ağ hatası");
            }
        })
        .catch(error => {
            console.log(error);
    });

    if (loading) {
        return <p className="lg:flex-grow">Yükleniyor...</p>;
    }

    return (
        <section className="lg:flex-grow">
            <h3 
                className="hidden text-2xl text-center font-bold lg:block mb-3">
                Canlı Kur
            </h3>
            <ul className="grid grid-cols-3 grid-rows-2 justify-center lg:block">
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 bg-slate-300 rounded lg:flex-row md:justify-between lg:grow-0">
                    <span>USD</span>
                    <span>{(currencyData.conversion_rates.USD ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>EUR</span>
                    <span>{(currencyData.conversion_rates.EUR ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base bg-slate-300 rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>AUD</span>
                    <span>{(currencyData.conversion_rates.AUD ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>GBP</span>
                    <span>{(currencyData.conversion_rates.GBP ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base bg-slate-300 rounded md:justify-between lg:flex-row lg:justify-between">
                    <span>CNY</span>
                    <span>{(currencyData.conversion_rates.CNY ** -1).toFixed(2)}</span>
                </li>
                <li className="flex flex-col flex-grow h-14 items-center justify-center px-4 py-1 text-base rounded lg:flex-row md:justify-between lg:justify-between">
                    <span>CHF</span>
                    <span>{(currencyData.conversion_rates.CHF ** -1).toFixed(2)}</span>
                </li>
            </ul>
        </section>
    );
}
