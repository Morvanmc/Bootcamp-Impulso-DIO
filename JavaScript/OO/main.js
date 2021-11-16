class ContaBancaria {
    construtor(ag, numero, tipo) {
        this.ag = ag;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo ) {
            return 'Saldo insuficiênte';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(ag, numero, cartaoCredito) {
        super(ag, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(ag, numero) {
        super(ag, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(ag, numero) {
        super(ag, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
    }
}