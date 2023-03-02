import { sdk } from './appwrite';
import { writable } from 'svelte/store';

export type Alert = {
	color: string;
	message: string;
};

interface Account {
	$id: string;
	name?: string;
	email?: string;
	emailVerification?: boolean;
	phone?: string;
	passwordUpdate?: boolean;
	prefs?: any;
	roles?: string[];
}

interface State {
	account: Account | null;
	alert: Alert | null;
}

const createState = () => {
	const { subscribe, set, update } = writable<State>({
		account: null as Account | null,
		alert: null as Alert | null
	});

	return {
		subscribe,
		signup: async (email: string, password: string, name: string) => {
			return await sdk.account.create('unique()', email, password, name);
		},
		login: async (email: string, password: string) => {
			await sdk.account.createEmailSession(email, password);
			const user = await sdk.account.get();
			state.init(user);
		},
		logout: async () => {
			await sdk.account.deleteSession('current');
		},
		alert: async (alert: Alert) =>
			update((n) => {
				n.alert = alert;
				return n;
			}),
		init: async (account = null as Account | null) => {
			return set({ account, alert: null });
		},
		checkSession: async () => {
			const user = await sdk.account.get();
			state.init(user);
		}
	};
};

export const state = createState();
