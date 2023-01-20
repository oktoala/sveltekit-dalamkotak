import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('light');
export const openDrawer = writable<boolean>(false);

export const profileAnimation = writable<{
	isBounce: boolean;
	isSpinning: boolean;
	isActive: boolean;
	reverse: boolean;
}>({
	isBounce: false,
	isSpinning: false,
	isActive: false,
	reverse: false
});
