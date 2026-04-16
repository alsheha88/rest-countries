import { Link } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

type CountryProps = {
	name: string;
	population: number;
	region: string;
	capital: string;
	flag: string;
	alpha3Code: string

};
const CountryCard = ({
	name,
	population,
	region,
	capital,
	flag,
	alpha3Code
	

}: CountryProps) => {
	const {data} = useCountries();
	if (!data) return null;

	return (
		<Link to={`/country/${alpha3Code}`}>
			<button className="w-3xs h-84 mx-auto flex flex-col gap-[1.4rem] shadow-[0_2px_4px_rgba(0,0,0,0.06)] dark:bg-colors-blue-900 rounded-[5px] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
				<img
					src={flag}
					alt={name}
					className="col-span-full block w-full h-40 object-cover"
				/>
				<div className="object-cover flex flex-col gap-4 px-6 pb-12">
					<h2 className="dark:text-white text-colors-grey-950 text-lg font-extrabold text-start">
						{name}
					</h2>
					<div className="flex flex-col gap-2 dark:text-white text-colors-grey-950 text-start">
						<p className="font-semibold text-sm">
							Population:{" "}
							<span className="font-light">{population.toLocaleString()}</span>
						</p>
						<p className="font-semibold text-sm">
							Region: <span className="font-light">{region}</span>
						</p>
						<p className="font-semibold text-sm">
							Capital: <span className="font-light">{capital}</span>
						</p>
					</div>
				</div>
			</button>
		</Link>
	);
};

export default CountryCard;
