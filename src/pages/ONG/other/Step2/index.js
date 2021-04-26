import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string'

import { Grid, Checkbox,Message, Input
    , Button, Divider, Segment, Item, Step, TextArea, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card } from 'semantic-ui-react';

import MenuResponsive from '../../../../components/MenuResponsive'
import api from '../../../../api/api';

const items = [
    { to: "/ong", name: "Home", text: "Home" },
    { to: "/ong/signin", name: "Entrar", text: "Entrar" },
]



export default function Step2() {

    const [nameInput, setNameInput] = useState("");
    const [name_fantasy, setNameFantasy] = useState("");
    const [email_ong, setEmailONG] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [cidade, setCidade] = useState("");
    const [UF, setUF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");

    const [description, setDescription] = useState("");
    const [necessities, setNecessities] = useState("");

    const [personal_data, setPersonal_data] = useState(false);
    const [sensitive_data, setSensitive_data] = useState(false);
    const [use_data, setuse_data] = useState(false);
    const [cookies, setcookies] = useState(false);

    const [activeError, setActiveError] = useState(true);
    const [messageError, setMessage] = useState("");
    const [activeErrorMobile, setActiveErrorMobile] = useState(true);
    const [messageErrorMobile, setMessageMobile] = useState("");

    const id_user = localStorage.getItem('id_user');
    const history = useHistory();

    async function HandleSumbit(){
        const data={
            id_user,
            name: nameInput,
            name_fantasy,
            email_ong,
            cnpj,
            cel_number: telefone,
            cidade,
            uf: UF,
            bairro,
            rua,
            cep,
            description,
            necessities

        }
        try {
            const response = api.post('/singup/ong', data, {headers:{authorization: true}})
            history.push("/ong/signup/step3");
        } catch (error) {
            setActiveError(false);
            setMessage("Estas informações já existem em noss banco de dados!");
        }
    }

    async function HandleSumbitMobile(){
        const data={
            id_user,
            name: nameInput,
            name_fantasy,
            email_ong,
            cnpj,
            cel_number: telefone,
            cidade,
            uf: UF,
            bairro,
            rua,
            cep,
            description,
            necessities

        }
        try {
            const response = api.post('/singup/ong', data, {headers:{authorization: true}})
            history.push("/ong/signup/step3");
        } catch (error) {
            setActiveErrorMobile(false);
            setMessageMobile("Estas informações já existem em noss banco de dados!");
        }
    }

    return (
        <div>
            <MenuResponsive items={items} />


            <Grid >

                <Grid.Row only="mobile" style={{ paddingLeft: "25px", paddingTop: "25px" }}>

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
                Faça sua Inscrição
</div>
        </Card.Header>

        <Segment basic>
            <Grid  relaxed="very">

                <Grid.Row>
                <Grid.Row>
                        <Message
                            error
                            header="Ops.. Ouve um problema!"
                            content={messageError}
                            hidden={activeError}
                            style={{ marginBottom: "10px", margimTop: "0px", maxWidth: "400px" }}
                        />
                    </Grid.Row>
                    <Form style={{ paddingLeft: "7%", paddingRight: "10%", width: "100%" }} onSubmit={() => { HandleSumbit() }}>

                        <Form.Group>
                            <Form.Field required width="9">
                                <label>Nome da Organização</label>
                                <input placeholder='Usuário'
                                    maxLength="50"
                                    value={nameInput}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setNameInput(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="7">
                                <label>Nome fantasia</label>
                                <input placeholder='Usuário'
                                    maxLength="50"
                                    value={name_fantasy}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setNameFantasy(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group>
                            <Form.Field required width="9" required>
                                <label>Email</label>
                                <input placeholder='Curso'
                                    maxLength="400"
                                    value={email_ong}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setEmailONG(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="7">
                                <label>CNPJ</label>
                                <input
                                    value={cnpj}
                                    maxLength="14"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setCNPJ(value);

                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field required width="5">
                                <label>Cidade</label>
                                <input placeholder='Email ou usuário'
                                    maxLength="80"
                                    value={cidade}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setCidade(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="5">
                                <label>UF</label>
                                <input placeholder='Email ou usuário'
                                    maxLength="2"
                                    value={UF}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setUF(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="7">
                                <label>Telefone</label>
                                <input
                                    placeholder="(xx) xxxxx-xxxx"
                                    maxLength="11"
                                    value={telefone}
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setTelefone(value)

                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field required width="5">
                                <label>Bairro</label>
                                <input placeholder='Email ou usuário'
                                    maxLength="80"
                                    value={bairro}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setBairro(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="5">
                                <label>Rua</label>
                                <input placeholder='Email ou usuário'
                                    maxLength="80"
                                    value={rua}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setRua(e.target.value);
                                    }}
                                    required="required" />
                            </Form.Field>
                            <Form.Field required width="7">
                                <label>CEP</label>
                                <input
                                    placeholder="(xx) xxxxx-xxxx"
                                    maxLength="8"
                                    value={cep}
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setCep(value);

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

                </Grid.Row>

                <Grid.Row>

                    <Segment color="red" style={{ marginLeft: "5%", marginRight: "5%", width: "100%", paddingLeft: "6%", paddingRight: "10%", height: "400px", overflowY: "scroll" }}>

                        <Header>Suas informações</Header>
                        <p>Digite algumas informações que serão exibidas quando entrarem na página principal da sua ONG.</p>

                        <Segment raised>
                            <Header>Escreva um pouco sobre sua Organização <span style={{ color: "red" }}>*</span></Header>
                            <TextArea
                            style={{ width: "80%", minHeight: "500px", padding: "5px" }}
                            maxLength="800"
                            value={description}
                            onChange={(e) => {
                                e.preventDefault();
                                setDescription(e.target.value);
                            }}
                            />
                        </Segment>

                        <Segment raised>
                            <Header>Diga um pouco das suas necessidades <span style={{ color: "red" }}>*</span></Header>
                            <TextArea
                            style={{ width: "80%", minHeight: "500px", padding: "5px" }}
                            maxLength="800"
                            value={necessities}
                            onChange={(e) => {
                                e.preventDefault();
                                setNecessities(e.target.value);
                            }}
                            />
                        </Segment>

                    </Segment>

                </Grid.Row>

            </Grid>

            
        </Segment>

    </Card.Content>

</Card>


</Container>

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
                                        Faça sua Inscrição
                        </div>
                                </Card.Header>

                                <Segment basic>
                                    <Grid columns={2} relaxed="very">

                                        <Grid.Column>
                                        <Grid.Row>
                                                <Message
                                                    error
                                                    header="Ops.. Ouve um problema!"
                                                    content={messageError}
                                                    hidden={activeError}
                                                    style={{ marginBottom: "10px", margimTop: "0px", maxWidth: "400px" }}
                                                />
                                            </Grid.Row>
                                            <Form onSubmit={() => { HandleSumbit() }}>

                                                <Form.Group>
                                                    <Form.Field required width="9">
                                                        <label>Nome da Organização</label>
                                                        <input placeholder='Nome'
                                                            maxLength="50"
                                                            value={nameInput}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setNameInput(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="7">
                                                        <label>Nome fantasia</label>
                                                        <input placeholder='Nome fantasia'
                                                            maxLength="50"
                                                            value={name_fantasy}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setNameFantasy(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Field required width="9" required>
                                                        <label>Email</label>
                                                        <input placeholder='Email'
                                                            maxLength="400"
                                                            value={email_ong}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setEmailONG(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="7">
                                                        <label>CNPJ</label>
                                                        <input
                                                            value={cnpj}
                                                            maxLength="14"
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');
                                                                setCNPJ(value);

                                                            }}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths="equal">
                                                    <Form.Field required width="5">
                                                        <label>Cidade</label>
                                                        <input placeholder='São paulo'
                                                            maxLength="80"
                                                            value={cidade}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setCidade(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="5">
                                                        <label>UF</label>
                                                        <input placeholder='SP'
                                                            maxLength="2"
                                                            value={UF}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setUF(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="7">
                                                        <label>Telefone</label>
                                                        <input
                                                            placeholder="(xx) xxxxx-xxxx"
                                                            maxLength="11"
                                                            value={telefone}
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');
                                                                setTelefone(value)

                                                            }}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths="equal">
                                                    <Form.Field required width="5">
                                                        <label>Bairro</label>
                                                        <input placeholder='Bairro'
                                                            maxLength="80"
                                                            value={bairro}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setBairro(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="5">
                                                        <label>Rua</label>
                                                        <input placeholder='Rua'
                                                            maxLength="80"
                                                            value={rua}
                                                            onChange={(e)=>{
                                                                e.preventDefault();
                                                                setRua(e.target.value);
                                                            }}
                                                            required="required" />
                                                    </Form.Field>
                                                    <Form.Field required width="7">
                                                        <label>CEP</label>
                                                        <input
                                                            placeholder="(xx) xxxxx-xxxx"
                                                            maxLength="8"
                                                            value={cep}
                                                            onChange={(e) => {
                                                                let aux = e.target.value;
                                                                let value = aux.replace(/\D/g, '');
                                                                setCep(value);

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

                                                <Header>Suas informações</Header>
                                                <p>Digite algumas informações que serão exibidas quando entrarem na página principal da sua ONG.</p>

                                                <Segment raised>
                                                    <Header>Escreva um pouco sobre sua Organização <span style={{ color: "red" }}>*</span></Header>
                                                    <TextArea
                                                    style={{ width: "80%", minHeight: "500px", padding: "5px" }}
                                                    maxLength="800"
                                                    value={description}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDescription(e.target.value);
                                                    }}
                                                    />
                                                </Segment>

                                                <Segment raised>
                                                    <Header>Diga um pouco das suas necessidades <span style={{ color: "red" }}>*</span></Header>
                                                    <TextArea
                                                    style={{ width: "80%", minHeight: "500px", padding: "5px" }}
                                                    maxLength="800"
                                                    value={necessities}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setNecessities(e.target.value);
                                                    }}
                                                    />
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

