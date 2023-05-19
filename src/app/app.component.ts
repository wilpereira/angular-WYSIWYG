import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { WysiwygService } from './core/service/wysiwyg.service';

@Component({
	selector: 'wysiwyg-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'WYSIWYG-editor';
	_htmlContent = `
		<strong style="display: block;">Prezado cliente: solicitamos sua atenção para a pendência abaixo e o prazo para que a correção/informação nos
		seja enviada.</strong>
		<strong style="display: block;">Caso o prazo expire sem o recebimento da correção/informação, o embarque será retornado ao exportador.</strong>

		<strong style="display: block;">PRAZO:</strong>
		<strong style="display: block;">FedEx AWB</strong>

		<strong style="display: block;">Boa tarde,</strong>
		<strong style="display: block;">Referente ao embarque FedEx acima citado, após análises dos documentos para emissão da DU-E no Portal Único
		da Receita Federal, foi constatada seguinte divergência:</strong>
	`;

	editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '23rem',
		minHeight: '0',
		maxHeight: 'auto',
		translate: 'no',
		defaultParagraphSeparator: '',
		defaultFontName: 'Arial',
		defaultFontSize: '',
		sanitize: false,
		customClasses: [],
		fonts: [
			{ class: 'arial', name: 'Arial' },
			{ class: 'times-new-roman', name: 'Times New Roman' },
			{ class: 'calibri', name: 'Calibri' },
			{ class: 'comic-sans-ms', name: 'Comic Sans MS' },
		],
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

	constructor(private wysiwyg: WysiwygService) {}

	post() {
		this.wysiwyg.postData(this._htmlContent).subscribe({
			next: () => {
				console.log('Ok');
			},
			error: (error) => {
				console.error(error);
			},
			complete: () => {
				console.log('Completado!');
			},
		});
	}
}
