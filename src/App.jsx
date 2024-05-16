import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from 'react'
import ContextProps from "./assets/JS/createContext";
import Loading from "./components/Loading";

const Layout = lazy(() => delayImport(import("./components/Layout"), false));
const Home = lazy(() => delayImport(import("./pages/Home"), true));

const delayImport = (importation, delay) => delay ? new Promise(resolve => setTimeout(() => resolve(importation), 7000)).then(module => module) : importation;

export default function App() {
	const [context, setContext] = useState({
		main: null,
		lang: navigator.language.startsWith('es') ? 'es' : 'en',
		mode: localStorage.getItem('mode') || 'light',
		lgWidth: window.innerWidth >= 1024,
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
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/Portfolio/" element={<Layout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</Suspense>
			</ContextProps.Provider>
		</BrowserRouter>
	)
}