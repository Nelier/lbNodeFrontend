import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string'

import { Grid, Checkbox, Image, Button, Divider, Segment, Item, Step, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card } from 'semantic-ui-react';

import MenuResponsive from '../../../../components/MenuResponsive'
import api from '../../../../api/api';

const items = [
    { to: "/ong", name: "Home", text: "Home" },
    { to: "/ong/signin", name: "Entrar", text: "Entrar" },
]



export default function Step2() {

    const [personal_data, setPersonal_data] = useState(false);
    const [sensitive_data, setSensitive_data] = useState(false);
    const [use_data, setuse_data] = useState(false);
    const [cookies, setcookies] = useState(false);

    return (
        <div>
            <MenuResponsive items={items} />


            <Grid >

                <Grid.Row only="mobile" style={{ paddingLeft: "25px", paddingTop: "25px" }}>



                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>

                    <Container>

                        <Card raised fluid>

                            <Card.Content>
                                <Card.Header>
                                    <Header style={{ padding: "10px", paddingLeft: "5%", paddingRight: "auto" }} >
                                        <Step.Group>
                                            <Step completed>
                                                <Icon name="user" />
                                                <Step.Content>
                                                    <Step.Title>Usuário</Step.Title>
                                                    <Step.Description>Informações do usuário administrador da ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step active>
                                                <Icon name="address card" />
                                                <Step.Content>
                                                    <Step.Title>Sua ONG</Step.Title>
                                                    <Step.Description>Informações da sua ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step>
                                                <Icon name="clipboard check" />
                                                <Step.Content>
                                                    <Step.Title>Privacidade</Step.Title>
                                                    <Step.Description>Aceitar nossos termos de privacidade e de serviço</Step.Description>
                                                </Step.Content>
                                            </Step>
                                        </Step.Group>
                                    </Header>
                                    <div style={{ margin: "10px" }}>
                                        Faça sua Incrição
                        </div>
                                </Card.Header>

                                <Segment basic>
                                    <Grid columns={2} relaxed="very">

                                        <Grid.Column>

                                            <Form onSubmit={() => { return null }}>

                                                <Form.Group>
                                                    <Form.Field width="9">
                                                        <label>Nome da Organização</label>
                                                        <input placeholder='Usuário'

                                                            maxLength="50"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field width="7">
                                                        <label>Nome fantasia</label>
                                                        <input placeholder='Usuário'

                                                            maxLength="50"

                                                            required="required" />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Field width="9" required>
                                                        <label>Email</label>
                                                        <input placeholder='Curso'

                                                            maxLength="400"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field width="7">
                                                        <label>CNPJ</label>
                                                        <input

                                                            maxLength="14"
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');

                                                            }}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths="equal">
                                                    <Form.Field required width="5">
                                                        <label>Cidade</label>
                                                        <input placeholder='Email ou usuário'

                                                            maxLength="80"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="5">
                                                        <label>UF</label>
                                                        <input placeholder='Email ou usuário'

                                                            maxLength="2"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field width="7">
                                                        <label>Telefone</label>
                                                        <input
                                                            placeholder="(xx) xxxxx-xxxx"
                                                            maxLength="11"
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');

                                                            }}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths="equal">
                                                    <Form.Field required width="5">
                                                        <label>Bairro</label>
                                                        <input placeholder='Email ou usuário'

                                                            maxLength="80"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="5">
                                                        <label>Rua</label>
                                                        <input placeholder='Email ou usuário'

                                                            maxLength="80"

                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field width="7">
                                                        <label>CEP</label>
                                                        <input
                                                            placeholder="(xx) xxxxx-xxxx"
                                                            maxLength="8"
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');

                                                            }}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Card.Content extra>
                                                    <div style={{ float: "right" }}>
                                                        <Button color='black'>
                                                            Cancel
                                                        </Button>
                                                        <Button color='green' type="sumbit" >
                                                            Cadastrar
                                                        </Button>
                                                    </div>
                                                </Card.Content>

                                            </Form>

                                        </Grid.Column>

                                        <Grid.Column>

                                            <Segment color="red" style={{ width: "100%", height: "400px", overflowY: "scroll" }}>

                                                <Header>Opções de Privacidade do usuário </Header>
                                                <p><span style={{ color: "red" }}>*</span> Algumas opções <strong>são</strong> obrigatórias para que seja possível prossegir</p>
                                                <p><span style={{ color: "red" }}>*</span> Todas as opções <strong>não</strong> obrigatórias podem ser alteradas na sua página de configuração, as obrigatórias necessitam que você exclua seu cadastro</p>

                                                <Segment raised>
                                                    <Header>Permitir que usemos seus dados pessoais <span style={{ color: "red" }}>*</span></Header>
                                                    <Grid columns={2}>

                                                        <Grid.Column width="10">

                                                            <p>Esses dados são necessários para o funcionamento básico do seu cadastro
                                                            e sua conta não poderá ser criada se não aceita-los. Utilizaremos para garantir
                                                suas credenciais de acesso ao logar.</p>
                                                        </Grid.Column>

                                                        <Grid.Column textAlign="center" verticalAlign="middle" width="5">
                                                            <Segment raised>
                                                                <Checkbox toggle checked={personal_data} onChange={
                                                                    (e) => {
                                                                        setPersonal_data(!personal_data);
                                                                        console.log(personal_data);
                                                                    }
                                                                } />
                                                            </Segment>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>

                                                <Segment raised>
                                                    <Header>Permitir que usemos seus dados sensíveis <span style={{ color: "red" }}>*</span></Header>
                                                    <Grid columns={2}>

                                                        <Grid.Column width="10">

                                                            <p>Esses dados incluem sexo, cpf, religião, endereço, estado, cnpj, entre outros, e são
                                                            necessários para funcionamento básico ao exibir sua ong, sua conta não poderá ser criada
                                                            se não aceitá-los. Utilizaremos para guardarmos sua conta de modo seguro para que possamos
                                                garantir integridade legal e evitar cadastros duplicados.</p>
                                                        </Grid.Column>

                                                        <Grid.Column textAlign="center" verticalAlign="middle" width="5">
                                                            <Segment raised>
                                                                <Checkbox toggle checked={sensitive_data} onChange={
                                                                    (e) => {
                                                                        setSensitive_data(!sensitive_data);
                                                                        console.log(sensitive_data);
                                                                    }
                                                                } />
                                                            </Segment>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>

                                                <Segment raised >
                                                    <Header>Permitir uso de cookies <span style={{ color: "red" }}>*</span></Header>
                                                    <Grid columns={2}>

                                                        <Grid.Column width="10">

                                                            <p>Esses dados são necessários para o funcionamento básico do seu cadastro.
                                                Nossas páginas podem utilizar cookies para eficiencia da página e para manter sua sessão conectada ao logar</p>
                                                        </Grid.Column>

                                                        <Grid.Column textAlign="center" verticalAlign="middle" width="5">
                                                            <Segment raised>
                                                                <Checkbox toggle checked={cookies} onChange={
                                                                    (e) => {
                                                                        setcookies(!cookies);
                                                                        console.log(cookies);
                                                                    }
                                                                } />
                                                            </Segment>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>

                                                <Segment raised>
                                                    <Header>Permitir que coletemos seus dados de uso</Header>
                                                    <Grid columns={2}>

                                                        <Grid.Column width="10">

                                                            <p>Esses dados <strong>não</strong> são necessários para o funcionamento básico do seu cadastro.
                                                Se aceita-los utilizaremos seus dados de forma anônima para que não seja possível identifica-lo, e
                                                irão melhorar nossas análises de como estão sendo utilizado os recursos do site.</p>
                                                        </Grid.Column>

                                                        <Grid.Column textAlign="center" verticalAlign="middle" width="5">
                                                            <Segment raised>
                                                                <Checkbox toggle checked={use_data} onChange={
                                                                    (e) => {
                                                                        setuse_data(!use_data);
                                                                        console.log(use_data);
                                                                    }
                                                                } />
                                                            </Segment>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>



                                            </Segment>

                                        </Grid.Column>

                                    </Grid>

                                    <Divider vertical ></Divider>
                                </Segment>

                            </Card.Content>

                        </Card>


                    </Container>
                </Grid.Row>

            </Grid>

        </div >
    )
}

