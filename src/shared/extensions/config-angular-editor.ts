import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export abstract class configAngularEditor {
	public editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '23rem',
		minHeight: '0',
		maxHeight: 'auto',
		translate: 'no',
		defaultParagraphSeparator: '',
		defaultFontName: 'consolas',
		defaultFontSize: '',
		sanitize: false,
		customClasses: [],
		toolbarHiddenButtons: [
			[
				'subscript',
				'superscript',
				'justifyLeft',
				'justifyCenter',
				'justifyRight',
				'justifyFull',
				'indent',
				'outdent',
				'insertUnorderedList',
				'insertOrderedList',
				'heading',
				'fontName',
				'toggleEditorMode',
				'textColor',
				'backgroundColor',
				'fontSize',
				'customClasses',
				'insertVideo',
				'insertHorizontalRule',
				'removeFormat',
			],
		],
	};

	constructor(protected router: Router) {}
}
