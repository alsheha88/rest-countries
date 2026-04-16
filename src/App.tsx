import HomePage from "./HomePage";
import {HashRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/*" element={<HomePage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
