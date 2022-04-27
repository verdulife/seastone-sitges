import { browser } from '$app/env';
import { writable } from 'svelte/store';
import type { defaultType } from '$lib/types';

const defaultStore: defaultType = {
	first_visit: true,
	createdAt: new Date()
};

export const UserStore = writable(
	(browser && JSON.parse(localStorage.getItem('UserStore'))) || defaultStore
);

export const CookieStore = writable(
	(browser && JSON.parse(localStorage.getItem('CookieStore'))) || { visited: false }
);

UserStore.subscribe((val) => browser && (localStorage.UserStore = JSON.stringify(val)));
CookieStore.subscribe((val) => browser && (localStorage.CookieStore = JSON.stringify(val)));
