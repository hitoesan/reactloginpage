//Aluna: Gabriela Gondo


import React, {Component} from 'react';

const users = [{
  email: "eduardo.lino@pucpr.br",
  password: "123456"
}];


class App extends Component{
  constructor(props){
    super(props);

    this.state={

      login: {
        email: "",
        password: ""
      },

      status: ""
    }

    this.acessar = this.acessar.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  acessar(){
    console.log("oi")
    let state = this.state;
    state.status = "Usuário ou senha incorretos!"
    if(users[0].email == state.login.email){
      if(users[0].password == state.login.password){
        state.status = "Acessado com sucesso!";      
      }
    }
    this.setState(state);
  }

  handleEmailChange(event){
    let state = this.state;
    state.login.email = event.target.value;
    this.setState(state);
  }

  handlePasswordChange(event){
    let state = this.state;
    state.login.password = event.target.value;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <input name="email" type="email" placeholder="E-mail" onChange={this.handleEmailChange}></input><br/>
        <input name="password" type="password" placeholder="Senha" onChange={this.handlePasswordChange}></input><br/>
        <button onClick={this.acessar}>Acessar</button><br/>
        <label>{this.state.status}</label>
      </div>
    )
  }
}
export default App;
