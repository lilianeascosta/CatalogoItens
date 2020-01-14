import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Itens from './Itens'

export default class ListaItens extends Component {
    constructor(props){
        super(props);
        this.state = {listaItens: [] }; //vai pegar os componentes do array de json, o axios já faz isso automaticamente
    }

    componentWillMount() {
        //requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html') //responsavel por buscar uma requisicao http
        .then((response) => {this.setState({ listaItens: response.data })}) //manipula a resposta da requisicao http
        .catch(() => {console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return(
            <ScrollView style={{backgroundColor: "#DDD"}}>
                { this.state.listaItens.map( (item) => {return (<Itens key={item.titulo} item={item} />) } ) }
            </ScrollView>
        );
    }
}
