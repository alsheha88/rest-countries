import { useCountries } from "../context/CountriesContext";
import CountryCard from "./CountryCard";
import type { Country } from "../context/CountriesContext";

const CounrtyCardContainer = ({
	searchedCountries,
	filteredCountries,
}: {
	searchedCountries: Country[] | null;
	filteredCountries: Country[] | null;
}) => {
	const { data } = useCountries();
	if (!data) return null;

	const renderCard = (item: Country) => (
		<CountryCard
			key={item.alpha3Code}
			name={item.name}
			flag={item.flag}
			capital={item.capital}
			region={item.region}
			population={item.population}
			alpha3Code={item.alpha3Code}
		/>
	);

	const displayCountries =
		searchedCountries?.map(renderCard) ??
		filteredCountries?.map(renderCard) ??
		data?.map(renderCard);

	return (
		<div className="grid gap-10 md:gap-900 sm:grid-cols-2 xl:grid-cols-4 mt-12">
			{displayCountries}
		</div>
	);
};

export default CounrtyCardContainer;
