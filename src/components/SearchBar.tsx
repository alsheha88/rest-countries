
type SearchProp = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({onChange}:SearchProp) => {

	return (
		<div className="min-w-70 md:w-120 relative px-8 flex items-center gap-6 h-12 lg:h-14 shadow-[0_2px_4px_rgba(0,0,0,0.06)]  dark:text-white dark:bg-colors-blue-900 rounded-[5px]">
			<span>
				<i className="fa-solid fa-magnifying-glass dark:text-white text-colors-grey-400"></i>
			</span>
			<input
				onChange={onChange}
				type="text"
				placeholder="Search for a country…"
				className="w-full text-colors-blue-950 dark:placeholder-white dark:text-white placeholder-colors-grey-400 outline-0"
			/>
		</div>
	);
};

export default SearchBar;
