import { TransacaoModel } from './transacaoModel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: TransacaoModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.carregarMockExtrato();
  }

  carregarMockExtrato(){


    for (let index = 1; index < 11; index++) {
      const transacao: TransacaoModel = {
        id: index,
        data: new Date('2022-04-18'),
        tipo: "C",
        valor: index,
        origem: "bytebank",
        destino: "bytebank"
      };
      this.extrato.push(transacao);
    }
  }

}
