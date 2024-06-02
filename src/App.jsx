import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from 'react'
import ContextProps from "./assets/JS/createContext";
import Loading from "./components/Loading";
/* import Layout from "./components/Layout";
import Home from "./pages/Home"; */

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));

/* const delayImport = (importation, delay) => new Promise(resolve => setTimeout(() => resolve(importation), delay)).then((value) => value); */

export default function App() {
	const [context, setContext] = useState({
		load: false,
		lang: localStorage.getItem('lang') || navigator.language.startsWith('es') ? 'es' : 'en',
		light: Number(localStorage.getItem('light')) || 0,
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
		localStorage.setItem('lang', context.lang);
		localStorage.setItem('light', context.light.toString());
	}, [context.light, context.lang]);

	useEffect(() => {
		const handleWinLoad = () => setContext(context => ({ ...context, load: true }));
		//const handleWinUnload = () => setContext(context => ({ ...context, load: false }));
		window.addEventListener('load', handleWinLoad);
		//window.addEventListener('unload', handleWinUnload);
		return () => {
			window.removeEventListener('load', handleWinLoad);
			//window.removeEventListener('unload', handleWinUnload);
		}
	}, [context.load]);

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