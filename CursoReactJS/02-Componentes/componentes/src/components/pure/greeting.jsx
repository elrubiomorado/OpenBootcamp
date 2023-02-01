//Componente de clase
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age:21
        }
    }
    render() {
        return (
            //Solo se puede devolver un elemento por componente
            <div>
                <h1>
                    !Hola {this.props.name}
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir Años
                    </button>
                </div>
            </div>
        );
    }
    birthday = () =>{
        this.setState((prevState)=>(
            {
                age: prevState.age + 1,
            }
        ));
    }
}


//Sirve para el tipado de datos
Greeting.propTypes = {
    name: PropTypes.string,//ahora solo le podremos pasar un string como dato
};

//Exportamos el componentes
export default Greeting;
