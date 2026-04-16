import { createContext, useContext, useEffect, useState } from "react";

export interface Country {
    country: string;
	name: string;
	topLevelDomain?: string[];
	capital: string;
	subregion: string;
    region: string,
	population: number;
	currencies?: { code: string; name: string; symbol: string }[];
    languages: { iso639_1: string; iso639_2: string; name: string; nativeName:string }[];
    flag: string,
	borders: string[],
	nativeName: string,
	alpha3Code: string,
	area: number
}

interface CountriesContextType{
    data: Country[] | null,
    error: string | null,
    isLoading: boolean
}

const CountriesContext = createContext<CountriesContextType | null>(null);

export function CountriesProvider({ children }: { children: React.ReactNode }) {
	const [data, setData] = useState<Country[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
				if (!res.ok) throw new Error("Failed to fetch data...");
				const countriesData = await res.json();
				setData(countriesData);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
					setIsLoading(false);
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<CountriesContext.Provider value={{ data, error, isLoading }}>
			{children}
		</CountriesContext.Provider>
	);
}

export function useCountries() {
	const context = useContext(CountriesContext);
	if (!context) throw new Error("Error.....");

	return context;
}
