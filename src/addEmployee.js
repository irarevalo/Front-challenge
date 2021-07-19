import React, { Component } from 'react';
import axios from 'axios';

/**
 * Componente para buscar cuestionarios
 *
 * @class Users
 * @extends {Component}
 */
export class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=UTF-8',
            'Host': 'localhost:3000'
        };
        axios.get(`http://localhost:8080/api/Employee`, { headers })
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }


    handleSubmit(event) {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=UTF-8',
            'Host': 'localhost:3000'
        };

        event.preventDefault();
        const data = new FormData(event.target);
        let name = data.get('name');
        let funcion = data.get('function');
        let boss_id = parseInt(data.get('boss_id'));
        console.log(boss_id);
        if (boss_id>0) {
            axios.post(`http://localhost:8080/api/Employee`, { fullname: name, function: funcion, boss_id: boss_id }, { headers })
                .then(res => {
                    document.getElementById("name").value = "";
                    document.getElementById("function").value = "";
                    document.getElementById("boss_id").value = "";
                    window.alert("Agregado");
                })
            window.location.reload();
        } else {
            window.alert("informacion erronea");
        }
    }

    renderBodyTable() {
        return (
            <tbody>
                {this.state.persons.map((employee) => {
                    return (<tr>
                        <td>{employee.id}</td>
                        <td>{employee.fullname}</td>
                        <td>{employee.function}</td>
                    </tr>)
                })}
            </tbody>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Agregar empleado:
                    <div className="row" >
                        <div className='col-md-10'>
                            Nombre:
                            <input className="form-control" name="name" id="name" required="true" />
                        </div>
                        <div className='col-md-10'>
                            Funcion:
                            <input className="form-control" name="function" id="function" required="true" />
                        </div>
                        <div className='col-md-10'>
                            Id del jefe:
                            <input className="form-control" name="boss_id" id="boss_id" />
                        </div>
                        <div clasName='col-md-2'>
                            <button className='btn btn-primary pull-left'>agregar </button>
                        </div>
                    </div>
                </form>
                
                
                <table className='col-md-10'>
                
                    <thead>
                        <tr><h2>Lista de empleados:</h2></tr>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Función</th>
                        </tr>
                    </thead>
                    {this.renderBodyTable()}
                </table>
            </div>
        )
    }
}


