import type { EditorData } from './editor';

export interface ContentStoreState {
	isLoading: boolean;
	error: string | null;
	data: EditorData | null;
}
