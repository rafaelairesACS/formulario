import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente{
  nome:String;
  email:String;
  profissao:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';

  profissoes = ['Programador','Empresário','Outra']

  cliente = new Cliente();

  salvar(usuarioForm : NgForm){
    //  this.cliente.nome = usuarioForm.value.nome;
    //  this.cliente.email = usuarioForm.value.email;
    //  this.cliente.profissao = usuarioForm.value.profissao;

    usuarioForm.reset()
     console.log(usuarioForm)
    //  console.log(this.cliente)
  }
}
