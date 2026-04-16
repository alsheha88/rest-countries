import { useTheme } from "../context/ThemeContext";

const Header = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className="grid place-items-center bg-colors-grey-50 h-20 w-full fixed top-0 left-0 shadow-[0_2px_4px_rgba(0,0,0,0.06)] dark:bg-colors-blue-900 dark:text-white text-colors-blue-950 z-50">
			<div className="flex justify-between w-full px-4 md:px-[2.5rem] lg:px-[5rem]">
				<h2 className="text-sm font-extrabold lg:text-2xl">Where in the world?</h2>
				<div className="flex items-center">
					<button onClick={toggleTheme} className="flex items-center gap-2 cursor-pointer">
						<i className={`fa-regular fa-${theme === 'dark' ? 'moon' : 'sun' } text-xs font-semibold lg:text-[1rem]`}></i>
						<p className="text-xs font-semibold lg:text-[1rem]">{theme === 'dark' ? 'Dark' : 'Light'} Mode</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
