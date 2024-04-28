import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Layout from "./components/Layout";
import ContextProps from "./assets/JS/createContext";
import Home from "./pages/Home";

function App() {
	const [context, setContext] = useState({
		lang: navigator.language.startsWith('es') ? 'es' : 'en',
		mode: localStorage.getItem('mode') || 'light',
		lgWidth: window.innerWidth >= 1024
	});

   useEffect(() => {
      const mediaQueryList = window.matchMedia('(min-width: 1024px)');
      function handleResize() {
         setContext(context => ({...context, lgWidth: mediaQueryList.matches}));
      }
      handleResize();
      mediaQueryList.addEventListener("change", handleResize);
      return () => {
         mediaQueryList.removeEventListener("change", handleResize);
      };
   }, []);

	useEffect(() => {
		localStorage.setItem('mode', context.mode);
	}, [context.mode]);

	return (
		<BrowserRouter>
			<ContextProps.Provider value={{ context, setContext }}>
				<Routes>
					<Route path="/Portfolio/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</ContextProps.Provider>
		</BrowserRouter>
	)
}

export default App