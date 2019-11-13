import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequisicaoModel } from './requisicaoModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const httpOptionsToken = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url = 'https://login.microsoftonline.com/be87ed09-e753-468f-8244-e2f3811ceacc/oauth2/v2.0/token';

    constructor(private http: HttpClient) { }

    login(usuario: string, senha: string) {
        const requisicaoModel = new RequisicaoModel(usuario, senha);

        return this.http.post<any>(this.url, requisicaoModel, httpOptions);
    }
}
