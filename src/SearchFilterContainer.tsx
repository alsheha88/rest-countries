import FilterDropdown from "./components/FilterDropdown";
import SearchBar from "./components/SearchBar";

type SearchFilterProp = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFilter: (region: Region) => void;
};
type Region = "Asia" | "Africa" | "Americas" | "Europe" | "Oceania" | null;

const SearchFilterContainer = ({ onChange, onFilter }: SearchFilterProp) => {
	return (
		<div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center  w-full pt-6 lg:pt-12">
			<SearchBar onChange={onChange} />
			<FilterDropdown onFilter={onFilter} />
		</div>
	);
};

export default SearchFilterContainer;
