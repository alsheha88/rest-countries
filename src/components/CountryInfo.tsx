import type { Country } from "../context/CountriesContext";

type CountryProp = {
    country: Country | null;
}

const CountryInfo = ({country}:CountryProp) => {
	return (
		<div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="flex-1">
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Native Name: <span className="font-normal">{country?.nativeName}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Population: <span className="font-normal">{country?.population.toLocaleString()}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Region: <span className="font-normal">{country?.region}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Sub Region: <span className="font-normal">{country?.subregion}</span></p>
            </div>
            <div className="flex-1">
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Capital: <span className="font-normal">{country?.capital}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Top Level Domain: <span className="font-normal">{country?.topLevelDomain?.[0]}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Currencies: <span className="font-normal">{country?.currencies?.[0].name}</span></p>
                <p className="text-colors-grey-950 dark:text-white text-sm md:text-1rem font-semibold leading-8">Languages:
                {country?.languages?.map((item) => (
                     <span key={item.name} className="font-normal ml-1">{item.name},</span>
                ))}
                </p>
            </div>
        </div>
	);
};

export default CountryInfo;
