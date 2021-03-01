import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { Menu } from '../../components/Menu';



function Home() {
    return (
        <div>
            

            <Menu />

            <Jumbotron fluid className="descr-top">
                <Container>
                    <h1 className="display-4">Olá! Posso ajudar?</h1>
                    <p className="lead">Este é um simples texto para lhe auxiliar no que precisar.</p>
                    <hr className="my-2" />
                    <p>Escolha um item acima</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>

        </div>)
}

export default Home;