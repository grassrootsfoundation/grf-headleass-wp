declare module 'editorjs-drag-drop' {
	import EditorJS from '@editorjs/editorjs';

	interface DragDropOptions {
		enabled?: boolean;
	}

	export default class DragDrop {
		constructor(editor: EditorJS);
	}
}
declare module '@editorjs/embed' {
	interface EmbedConfig {
		services?: Record<string, { regex: RegExp; embedUrl: string; html?: string }>;
		[key: string]: unknown;
	}

	interface EmbedData {
		service: string;
		source: string;
		embed: string;
		width: number;
		height: number;
	}

	export default class Embed {
		constructor(config?: { data?: EmbedData; config?: EmbedConfig });
		static get toolbox(): { title: string; icon: string };
	}
}
