import { useState } from "react";

type Region = "Asia" | "Africa" | "Americas" | "Europe" | "Oceania" | null;
type FilterProp = {
	onFilter: (region: Region) => void;
};

const FilterDropdown = ({ onFilter }: FilterProp) => {
	const [dropdown, setDropdown] = useState<boolean>(false);

	function handleClick() {
		setDropdown(!dropdown);
	}
	return (
		<div className="flex items-center justify-center h-12 lg:h-14 min-w-50 max-w-50 px-6  shadow-[0_2px_4px_rgba(0,0,0,0.06)] text-colors-blue-950 dark:bg-colors-blue-900 dark:text-white rounded-[5px] relative">
			<span
				onClick={handleClick}
				className="w-full flex justify-between items-center text-sm font-normal cursor-pointer">
				Filter by Region <i className="fa-solid fa-angle-down"></i>
			</span>
			<ul
				className={`py-4 w-full ${dropdown ? "flex" : "hidden"} flex-col gap-2 px-6  shadow-[0_2px_4px_rgba(0,0,0,0.06)] text-colors-blue-950 dark:bg-colors-blue-900 dark:text-white rounded-[5px] absolute top-[calc(100%+0.5rem)] z-50`}>
				<li
					className="text-sm font-normal cursor-pointer"
					onClick={() => {
						onFilter("Africa");
						setDropdown(!dropdown);
					}}>
					Africa
				</li>
				<li
					className="text-sm font-normal cursor-pointer"
					onClick={() => {
						onFilter("Americas");
						setDropdown(!dropdown);
					}}>
					America
				</li>
				<li
					className="text-sm font-normal cursor-pointer"
					onClick={() => {
						onFilter("Asia");
						setDropdown(!dropdown);
					}}>
					Asia
				</li>
				<li
					className="text-sm font-normal cursor-pointer"
					onClick={() => {
						onFilter("Europe");
						setDropdown(!dropdown);
					}}>
					Europe
				</li>
				<li
					className="text-sm font-normal cursor-pointer"
					onClick={() => {
						onFilter("Oceania");
						setDropdown(!dropdown);
					}}>
					Oceania
				</li>
			</ul>
		</div>
	);
};

export default FilterDropdown;
