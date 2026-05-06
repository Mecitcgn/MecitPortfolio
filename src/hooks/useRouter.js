import { useState, useEffect, useCallback } from 'react';

/**
 * useRouter — hash tabanlı basit router hook'u.
 * React Router kurmadan tek dosya ile çalışır.
 * URL hash → path state, navigate → hash değiştirir.
 */
export function useRouter() {
	const parse = () => {
		const h = window.location.hash;
		return h ? h.slice(1) : '/';
	};

	const [path, setPath] = useState(parse);

	useEffect(() => {
		const fn = () => {
			setPath(parse());
			window.scrollTo(0, 0);
		};
		window.addEventListener('hashchange', fn);
		return () => window.removeEventListener('hashchange', fn);
	}, []);

	const navigate = useCallback((to) => {
		window.location.hash = to;
	}, []);

	return { path, navigate };
}
