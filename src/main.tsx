import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { CountriesProvider } from "./context/CountriesContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<CountriesProvider>
				<App />
			</CountriesProvider>
		</ThemeProvider>
	</StrictMode>,
);
