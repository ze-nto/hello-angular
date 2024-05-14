export class Dados {
  _nome: string = 'Nome A';
  get nome(): string {
    console.log('Dados.nome()');
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }

  _idade: number = 10;
  get idade(): number {
    console.log('Dados.idade()');
    return this._idade;
  }
  set idade(idade: number) {
    this._idade = idade;
  }
}