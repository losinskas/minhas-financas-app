import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

class Login extends React.Component{

  state ={
    email:'', 
    senha:'', 
  }
  entrar = () =>{
    console.log('Email: ', this.state.email);
    console.log('Senha: ', this.state.senha);
  }
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-6"
                style={{position: 'relative', left: '300px'}}>
                    <div className="bs-docs-section">
                        <Card title="login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                          <FormGroup label="Email: *" htmlFor="exempleInputEmail1">
                                            <input type="email"
                                            value={this.state.email}
                                            onChange={e=>this.setState({email: e.target.value})}
                                            className="form-control" id="exampleInputEmail1"
                                              aria-describedby="emailHelp" placeholder="Digite seu Email"/>     
                                          </FormGroup>
                                          <FormGroup label="Senha: *" htmlFor="exempleInputPassword1">
                                            <input type="password" 
                                            value={this.state.senha}
                                            onchange={e => this.setState({senha: e.target.value})}
                                            className="form-control"
                                            id="exempleInputPassword1" placeholder="Senha"/>
                                          </FormGroup>
                                          <button onClick={this.entrar} className="btn btn-success">
                                            Entrar 
                                          </button>
                                          <button className="btn btn-danger">
                                            Cadastrar
                                          </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;