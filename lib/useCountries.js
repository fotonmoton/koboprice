import "./logger";

import { useCallback, useEffect, useState } from "preact/hooks";
import { cacheSelectedCountries, getSelectedCountries } from "./cache";

export const useSelectedCountries = () => {
	const [selected, setSelected] = useState(() => getSelectedCountries());

	useEffect(() => cacheSelectedCountries(selected), [selected]);

	const toggleCountry = useCallback((countryCode) =>
		setSelected({ ...selected, [countryCode]: !selected[countryCode] }),
	);

	const isSelected = useCallback((countryCode) => !!selected[countryCode]);

	return {
		selected,
		toggleCountry,
		isSelected,
	};
};
