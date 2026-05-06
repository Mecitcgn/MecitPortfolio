import { useEffect, useRef } from 'react';

/**
 * useReveal — bir elemana ref ver, viewport'a girince 'visible' class'ı ekler.
 * CSS'te .reveal { opacity:0; transform:... } + .reveal.visible { opacity:1; ... } tanımlı olmalı.
 */
export function useReveal(threshold = 0.12) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add('visible');
					obs.unobserve(el);
				}
			},
			{ threshold },
		);

		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);

	return ref;
}

/**
 * useRevealChildren — parent'a ref ver, görününce child'ları
 * sırayla (stagger) 'visible' class'ı alır.
 * childSelector: querySelectorAll için CSS seçici (varsayılan '.reveal-child')
 */
export function useRevealChildren(
	childSelector = '.reveal-child',
	staggerMs = 110,
) {
	const ref = useRef(null);

	useEffect(() => {
		const parent = ref.current;
		if (!parent) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const children = parent.querySelectorAll(childSelector);
					children.forEach((child, i) => {
						setTimeout(() => child.classList.add('visible'), i * staggerMs);
					});
					obs.unobserve(parent);
				}
			},
			{ threshold: 0.08 },
		);

		obs.observe(parent);
		return () => obs.disconnect();
	}, [childSelector, staggerMs]);

	return ref;
}
