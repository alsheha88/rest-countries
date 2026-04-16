import { useCountries, type Country } from "../context/CountriesContext";
import { Link } from "react-router-dom";

type CountryProp = {
	country: Country | null;
};

const BorderCountries = ({ country }: CountryProp) => {
	const { data } = useCountries();
	if (!data) return null;

	const borders = country?.borders;
	const borderCountries = borders?.map(
		(code) => data?.find((item) => item.alpha3Code === code),
	);

	return (
		<div className="flex flex-col gap-4 pt-8 md:pt-6 lg:pt-16 md:flex-row md:items-center">
			<p className="dark:text-white">Border Countries:</p>
			<div className="flex flex-wrap gap-4  items-center">
				{borderCountries
					? borderCountries?.map((border) => (
						<Link key={border?.alpha3Code} to={`/country/${border?.alpha3Code}`} >
							<button
								
								type="button"
								className="min-w-max w-24 h-7 text-xs md:text-sm dark:text-white text-colors-grey-950 dark:bg-colors-blue-900 shadow-[0_2px_4px_rgba(0,0,0,0.06)] rounded-xs cursor-pointer">
								{border?.name}
							</button>
						</Link>
						))
					: <p className="dark:text-colors-grey-250">No Bordering Countries</p>}
			</div>
		</div>
	);
};

export default BorderCountries;
