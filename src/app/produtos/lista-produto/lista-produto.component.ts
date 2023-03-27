import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
})
export class ListaProdutoComponent {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()?.subscribe({
      next: (produtos) => {
         this.produtos = produtos;
        console.log(produtos);
      },
      error: (error) => console.log(error)
  });
  }
}
