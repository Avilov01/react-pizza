export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY = 'SET_CATEGORY';

export const setSortBy = payload => ({
	type: SET_SORT_BY,
	payload,
});

export const setCategory = payload => ({
	type: SET_CATEGORY,
	payload,
});
