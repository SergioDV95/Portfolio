import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useEffect, Suspense, lazy } from 'react'
import { contextReducer } from "./assets/JS/reducers";
import ContextProps from "./assets/JS/createContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
/* import Loading from "./components/Loading";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home")); */

//const delayImport = (importation, delay) => new Promise(resolve => setTimeout(() => resolve(importation), delay)).then((value) => value);

export default function App() {
	const [context, dispatch] = useReducer(contextReducer, {
		load: { 
			total: [],
			progress: 0,
			complete: false,
		},
		lang: localStorage.getItem('lang') || navigator.language.startsWith('es') ? 'es' : 'en',
		light: Number(localStorage.getItem('light')) || 0,
		lgWidth: window.innerWidth >= 1024,
	});

	/* useEffect(() => {
		console.log(context.load);
	}, [context.load]) */

	useEffect(() => {
		const handleResize = () => dispatch({ type: 'SET_WIDTH', matches: mediaQueryList.matches });
		const mediaQueryList = window.matchMedia('(min-width: 1024px)');
		mediaQueryList.addEventListener("change", handleResize);
		handleResize();
		return () => {
			mediaQueryList.removeEventListener("change", handleResize);
		};
	}, []);

	useEffect(() => {
		const handleLoad = e => { 
			if ((e.target instanceof Document && document.readyState === 'complete') || e.target instanceof Window) {
				if (!context.load.complete) 
					dispatch({ type: 'SET_LOAD', complete: true }); 
			}
		}
		window.addEventListener('load', handleLoad);
		document.addEventListener('readystatechange', handleLoad);
		return () => {
			window.removeEventListener('load', handleLoad);
			document.removeEventListener('readystatechange', handleLoad);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('lang', context.lang);
		localStorage.setItem('light', context.light.toString());
	}, [context.light, context.lang]);

	return (
		<BrowserRouter>
			<ContextProps.Provider value={{ context, dispatch }}>
				<Routes>
					<Route path="/Portfolio/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</ContextProps.Provider>
		</BrowserRouter>
	)
}