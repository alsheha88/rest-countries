import BorderCountries from "./components/BorderCountries";
import CountryInfo from "./components/CountryInfo";
import { useCountries } from "./context/CountriesContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetailPage = () => {
	const { data } = useCountries();
	const { id } = useParams();
	if (!data) return null;

	const country = data && data?.find((item) => item.alpha3Code === id);

	return (
		<div className="w-full pt-10 grid gap-16 md:gap-14 lg:gap-20 lg:pt-20">
			{country ? (
				<>
					<Link to="/">
						<button
							type="button"
							className="flex items-center justify-center gap-2 w-26 h-10 rounded-xs text-colors-grey-950 dark:text-white dark:bg-colors-blue-900 shadow-[0_2px_4px_rgba(0,0,0,0.06)] md:w-32 cursor-pointer">
							<i className="fa-solid fa-arrow-left"></i> Back
						</button>
					</Link>
					<div className="w-full grid gap-12 justify-center md:gap-14 lg:justify-between lg:grid-cols-2">
						<img src={country?.flag} alt={country?.name} className="w-full max-h-[25rem]" />
						<div>
							<div className="w-full flex flex-col gap-4 md:gap-6">
								<h2 className="text-2xl md:text-[2rem] font-extrabold text-colors-grey-950 dark:text-white">
									{country?.name}
								</h2>
								<CountryInfo country={country} />
							</div>
							<BorderCountries country={country} />
						</div>
					</div>
				</>
			) : <p className="text-colors-grey-950 dark:text-colors-white text-5xl font-bold text-center">Loading...</p>}
		</div>
	);
};

export default CountryDetailPage;
