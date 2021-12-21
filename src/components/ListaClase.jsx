import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
import Lista from './Lista';

class ListaClase extends React.Component {
  /*Constructor, declara una lista que recorre y rellena con las 
  propiedades pasadas. Establece esta lista como estado y crea las
  variables para el inputText y el dropDown*/
  constructor(props) {
    super(props);
    this.listaInicial = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
    
    this.state = { 
      listaActual: this.listaInicial, 
    };

    this.inputText;
    this.selectPrioridad;
  }

  /*Método que será llamado cuando se pulse el botón. Añade a la 
  lista el componente creado a partir del inputText y el dropDown
  y llama al método changeState para establecer un nuevo estado.*/
  funcion() {
    this.listaInicial = 
    this.listaInicial.concat(
      <ComponenteListaClase
        texto={this.inputText.value}
        prioridad={this.selectPrioridad.value}
      />
    );
    this.inputText.value = '';
    this.changeState();
  }

  /*Establece un nuevo estado*/
  changeState() {
    this.setState({listaActual: this.listaInicial})
  }

  /*Método llamado cada vez que el estado cambie después de la primera
  vez, será la parte más cercana al html con partes de React para el
  manejo de la página*/
  render() {
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>{this.state.listaActual}</ul>
        <li>
          <input
            type="text"
            ref={c => this.inputText = c}
            placeholder="Introduce una tarea"
          />
          <br />
          <select name="prioridad" ref={c => this.selectPrioridad = c}>
            <option value="baja">Prioridad Baja</option>
            <option value="media">Prioridad Media</option>
            <option value="alta">Prioridad Alta</option>
          </select>
          <br />
          <button onClick={()=>this.funcion()}>Añadir</button>
        </li>
        <br />
      </div>
    );
  }
}

export default ListaClase;
