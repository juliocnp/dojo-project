export class RequisicaoModel {
    client_id: string;
    client_secret: string;
    scope: string;
    userName: string;
    password: string;
    grant_type: string;

    constructor(usuario: string, senha: string) {
        this.client_id = '682aac27-6b4b-4f13-a4f9-21f8b0f30f08';
        this.client_secret = '.C=T8S7[XpPu0qY-HTPcUgVObr4=bHUF';
        this.scope = 'https://graph.microsoft.com/.default';
        this.userName = usuario;
        this.password = senha;
        this.grant_type = 'password';
    }
}
