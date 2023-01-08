import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = 'light';
const initValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
export const theme = writable<string>(initValue);

theme.subscribe((value) => {
	console.log(value);
	if (browser) window.localStorage.setItem('theme', value);
});
