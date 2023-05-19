import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class WysiwygService {
	private readonly API = `${environment.API}`;

	constructor(private http: HttpClient) {}

	postData(body: string) {
		return this.http
			.post(`${this.API}/notifications`, { conteudo: body })
			.pipe();
	}
}
