import CounrtyCardContainer from "./components/CountryCardContainer";
import Header from "./components/Header";
import { useCountries, type Country } from "./context/CountriesContext";
import CountryDetailPage from "./CountryDetailPage";
import SearchFilterContainer from "./SearchFilterContainer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

type Region = "Asia" | "Africa" | "Americas" | "Europe" | "Oceania" | null;

const HomePage = () => {
	const { data } = useCountries();
	const [search, setSearch] = useState<string>("");
	const [searchedCountries, setSearchedCountries] = useState<Country[] | null>(
		null,
	);
	const [filtredCountries, seFilteredCountries] = useState<Country[] | null>(
		null,
	);
	const [filterItem, setFilterItem] = useState<Region>(null);
	if (!data) return null;

	function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { value } = e.target;
		setSearch(value);
		const searchCountries =
			data && data?.filter((item) => item?.name.toLowerCase().includes(value));
		setSearchedCountries(searchCountries);
	}
	const onFilter = (region: Region) => {
		setFilterItem(region);
		const filter = data && data?.filter((item) => item.region === region);
		setSearchedCountries(filter);
	};

	return (
		<div className="min-h-screen bg-neutral-50 w-full dark:bg-colors-blue-950 mt-20 px-4 md:px-[2.5rem] lg:px-[5rem] pb-16">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<SearchFilterContainer
								onChange={handleChange}
								onFilter={onFilter}
							/>
							<CounrtyCardContainer
								searchedCountries={searchedCountries}
								filteredCountries={filtredCountries}
							/>
						</>
					}
				/>
				<Route path="/country/:id" element={<CountryDetailPage />} />
			</Routes>
		</div>
	);
};

export default HomePage;
