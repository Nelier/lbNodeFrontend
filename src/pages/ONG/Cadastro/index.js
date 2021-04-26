import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string'

import { Grid, Checkbox, Input, Button, Divider, Segment, Message, Step, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card } from 'semantic-ui-react';

import MenuResponsive from '../../../components/MenuResponsive'
import api from '../../../api/api';

const items = [
    { to: "/ong", name: "Home", text: "Home" },
    { to: "/ong/signin", name: "Entrar", text: "Entrar" },
]



export default function Register() {

    const [personal_data, setPersonal_data] = useState(false);
    const [sensitive_data, setSensitive_data] = useState(false);
    const [use_data, setuse_data] = useState(false);
    const [cookies, setcookies] = useState(false);

    const [iconName, setIconName] = useState("eye slash");
    const [inputType, setType] = useState("password");
    const [inputActive, setInputActive] = useState(true);

    const [activeError, setActiveError] = useState(true);
    const [messageError, setMessage] = useState("");
    const [activeErrorMobile, setActiveErrorMobile] = useState(true);
    const [messageErrorMobile, setMessageMobile] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const history = useHistory();

    function HandleChange() {
        if (inputActive) {
            setInputActive(!inputActive);
            setIconName("eye");
            setType("text");
        } else {
            setInputActive(!inputActive);
            setIconName("eye slash");
            setType("password");
        }
    }

    async function handleSumbit() {

        const data = {
            user_name: username,
            email_user: email,
            password,
        }

        try {

            if (password == passwordCon) {
                if (personal_data == true && sensitive_data == true && cookies == true) {
                    const response = await api.post("/singup/user", data, { headers: { authorization: true } })

                    console.log("user cadastrado!");

                    const data2 = {
                        id_user: response.data.id_user,
                        personal_data,
                        sensitive_data,
                        use_data,
                        cookies,
                    }

                    console.log(data2);
                    localStorage.setItem('id_user', response.data.id_user);

                    

                    try {

                        const response2 = await api.post('lgpd', data2, { headers: { authorization: true } })

                        
                        history.push("/ong/signup/step2");
                    } catch (error) {
                        alert("Erro inesperado no cadastro!");
                    }
                } else {
                    setActiveError(false);
                    setMessage("Algumas informações de privacidade obrigatórias não foram aceitas.")
                }

            } else {
                setActiveError(false);
                setMessage("As senhas não coincidem, por favor verifique para prosseguir.")
            }

        } catch (error) {
            setActiveError(false);
            setMessage("Algumas informações cadastradas já existem, por favor tente novamente!")
        }
    }

    async function handleSumbitMobile() {

        const data = {
            user_name: username,
            email_user: email,
            password,
        }

        try {

        if (password == passwordCon) {
            if (personal_data == true && sensitive_data == true && cookies == true) {
                const response = await api.post("/singup/user", data, { headers: { authorization: true } })

                    console.log("user cadastrado!");

                    const data2 = {
                        id_user: response.data.id_user,
                        personal_data,
                        sensitive_data,
                        use_data,
                        cookies,
                    }

                    console.log(data2);
                    localStorage.setItem('id_user', response.data.id_user);

                    try {

                        const response2 = await api.post('lgpd', data2, { headers: { authorization: true } })
                        
                        history.push("/ong/signup/step2");
                    } catch (error) {
                        alert("Erro inesperado no cadastro!");
                    }
            } else {
                setActiveErrorMobile(false);
                setMessageMobile("Algumas informações de privacidade obrigatórias não foram aceitas.")
            }

        } else {
            setActiveErrorMobile(false);
            setMessageMobile("As senhas não coincidem, por favor verifique para prosseguir.")
        }

        } catch (error) {
            setActiveErrorMobile(false);
            setMessageMobile("Algumas informações cadastradas já existem, por favor tente novamente!")
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
                                            <Step active>
                                                <Icon name="user" />
                                                <Step.Content>
                                                    <Step.Title>Usuário</Step.Title>
                                                    <Step.Description>Informações do usuário administrador da ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step>
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
                                    <Grid relaxed="very">

                                        <Grid.Row>
                                            <Grid.Row>
                                                <Grid.Row>
                                                    <Message
                                                        error
                                                        header="Ops.. Ouve um problema!"
                                                        content={messageErrorMobile}
                                                        hidden={activeErrorMobile}
                                                        style={{ marginBottom: "10px", margimTop: "0px", marginLeft: "8%", maxWidth: "340px" }}
                                                    />
                                                </Grid.Row>
                                            </Grid.Row>
                                            <Form onSubmit={() => { handleSumbitMobile() }} style={{ paddingLeft: "7%", paddingRight: "10%", width: "100%" }}>

                                                <Form.Field required>
                                                    <label>Nome de usuário</label>
                                                    <Input placeholder='Usuário'
                                                        maxLength="50"
                                                        value={username}
                                                        required="required"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setUsername(e.target.value);
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Email</label>
                                                    <Input placeholder='Email ou usuário'
                                                        maxLength="100"
                                                        value={email}
                                                        required="required"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setEmail(e.target.value.toLowerCase());
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Senha</label>
                                                    <Input
                                                        icon={<Icon size="large" name={iconName} link onClick={HandleChange}></Icon>}
                                                        placeholder='Senha'
                                                        type={inputType}
                                                        maxLength="50"
                                                        required="required"
                                                        value={password}
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setPassword(e.target.value);
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Confirmar Senha</label>
                                                    <Input
                                                        placeholder='Senha'
                                                        type="password"
                                                        maxLength="50"
                                                        required="required"
                                                        value={passwordCon}
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setPasswordCon(e.target.value);
                                                        }} />
                                                </Form.Field>
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
                                                            <Segment raised style={{ width: "80px" }}>
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
                                                            <Segment raised style={{ width: "80px" }}>
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
                                                            <Segment raised style={{ width: "80px" }}>
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
                                                            <Segment raised style={{ width: "80px" }}>
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
                                            <Step active>
                                                <Icon name="user" />
                                                <Step.Content>
                                                    <Step.Title>Usuário</Step.Title>
                                                    <Step.Description>Informações do usuário administrador da ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step>
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
                                            <Form onSubmit={() => { handleSumbit() }}>

                                                <Form.Field required>
                                                    <label>Nome de usuário</label>
                                                    <Input placeholder='Usuário'
                                                        maxLength="50"
                                                        value={username}
                                                        required="required"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setUsername(e.target.value);
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Email</label>
                                                    <Input placeholder='Email ou usuário'
                                                        maxLength="100"
                                                        value={email}
                                                        required="required"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setEmail(e.target.value.toLowerCase());
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Senha</label>
                                                    <Input
                                                        icon={<Icon size="large" name={iconName} link onClick={HandleChange}></Icon>}
                                                        placeholder='Senha'
                                                        type={inputType}
                                                        maxLength="50"
                                                        required="required"
                                                        value={password}
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setPassword(e.target.value);
                                                        }} />
                                                </Form.Field>
                                                <Form.Field required>
                                                    <label>Confirmar Senha</label>
                                                    <Input
                                                        placeholder='Senha'
                                                        type="password"
                                                        maxLength="50"
                                                        required="required"
                                                        value={passwordCon}
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            setPasswordCon(e.target.value);
                                                        }} />
                                                </Form.Field>
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

