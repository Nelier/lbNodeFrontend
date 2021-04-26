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
    

    async function handleAccept(){
        alert("Obrigado por se cadastrar!");
        history.push("/ong");
        localStorage.removeItem("id_user")
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
                                            <Step completed>
                                                <Icon name="address card" />
                                                <Step.Content>
                                                    <Step.Title>Sua ONG</Step.Title>
                                                    <Step.Description>Informações da sua ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step active>
                                                <Icon name="clipboard check" />
                                                <Step.Content>
                                                    <Step.Title>Privacidade</Step.Title>
                                                    <Step.Description>Aceitar nossos termos de privacidade e de serviço</Step.Description>
                                                </Step.Content>
                                            </Step>
                                        </Step.Group>
                                    </Header>
                                    <div style={{ margin: "10px" }}>
                                        Para finalizar aceite nossos termos de uso e privacidade
                                    </div>
                                </Card.Header>

                                <Segment basic>
                                    <Grid relaxed="very">

                                       <Grid.Row>

                                            <Segment  color="red" style={{ marginLeft: "5%", marginRight: "5%", width: "100%", paddingLeft: "6%", paddingRight: "10%", height: "400px", overflowY: "scroll" }}>

                                                
                                                <Segment raised>
                                                    <div style={{paddingLeft:"10px"}}>
                                                    <h2>1. Termos</h2>
                                                    <p>Ao acessar ao site <a href='leancodedesign.com'>Salve Uma ONG</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum                desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>            <h2>2. Uso de Licença</h2>            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Salve Uma ONG , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e,                sob esta licença, você não pode: </p>            <ol>            <li>modificar ou copiar os materiais;  </li>            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);  </li>            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Salve Uma ONG;  </li>            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>            </ol>            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Salve Uma ONG a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais                baixados em sua posse, seja em formato eletrónico ou impresso.</p>            <h2>3. Isenção de responsabilidade</h2>            <ol>            <li>Os materiais no site da Salve Uma ONG são fornecidos 'como estão'. Salve Uma ONG não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,            adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li>            <li>Além disso, o Salve Uma ONG não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos            materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>            </ol>            <h2>4. Limitações</h2>            <p>Em nenhum caso o Salve Uma ONG ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Salve Uma ONG,                mesmo que Salve Uma ONG ou um representante autorizado da Salve Uma ONG tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade                por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>            <h2>5. Precisão dos materiais</h2>            <p>Os materiais exibidos no site da Salve Uma ONG podem incluir erros técnicos, tipográficos ou fotográficos. Salve Uma ONG não garante que qualquer material em seu site seja preciso, completo ou atual. Salve Uma ONG pode fazer alterações nos materiais contidos em seu                site a qualquer momento, sem aviso prévio. No entanto, Salve Uma ONG não se compromete a atualizar os materiais.</p>            <h2>6. Links</h2>            <p>O Salve Uma ONG não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Salve Uma ONG do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>             <h3>Modificações</h3>            <p>O Salve Uma ONG pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>            <h3>Lei aplicável</h3>            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Salve Uma ONG e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
                                                    </div>
                                                </Segment>

                                                <Segment raised>
                                                <div style={{paddingLeft:"10px"}}>
<h2>Política Privacidade</h2>                    
<p>A sua privacidade é importante para nós. É política do Salve Uma ONG respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Salve Uma ONG, e outros sites que possuímos e operamos.</p>                    <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.                    </p>                    <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou                        modificação não autorizados.</p>                    <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>                    <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href='https://politicaprivacidade.com' target='_BLANK'>políticas de privacidade</a>.                    </p>                    <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>                    <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>                    <h2>Política de Cookies Salve Uma ONG</h2>                    <h3>O que são cookies?</h3>                    <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes                        precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>                    <h3>Como usamos os cookies?</h3>                    <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável                        que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>                    <h3>Desativar cookies</h3>                    <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que                        você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>                    <h3>Cookies que definimos</h3>                    <ul>                        <li>                            Cookies relacionados à conta<br /><br /> Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns                            casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.<br /><br />                        </li>                        <li>                            Cookies relacionados ao login<br /><br /> Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos                            quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.<br /><br />                        </li>                        <li>                            Cookies relacionados a boletins por e-mail<br /><br /> Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações                            válidas apenas para usuários inscritos / não inscritos.<br /><br />                        </li>                        <li>                            Pedidos processando cookies relacionados<br /><br /> Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.<br /><br />                        </li>                        <li>                            Cookies relacionados a pesquisas<br /><br /> Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies                            para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br /><br />                        </li>                        <li>                            Cookies relacionados a formulários<br /><br /> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário                            para correspondência futura.<br /><br />                        </li>                        <li>                            Cookies de preferências do site<br /><br /> Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos                            definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.<br />                        </li>                    </ul>                    <h3>Cookies de Terceiros</h3>                    <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>                    <ul>                        <li>                            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo                            você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.                        </li>                    </ul>                    <p>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>                    <ul>                        <li>                            As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender                            como podemos melhorar o site para você.</li>                        <li>                            Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto                            estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</li>                        <li>                            À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos                            fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</li>                        <li>                            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.<br />                            Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.                        </li>                        <li>                            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios                            mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</li>                        <li>Vários parceiros anunciam em nosso nome e os cookies de rastreamento
    de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando                            aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.                        </li>                    </ul>                    <h3>Compromisso do Usuário</h3>                                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Salve Uma ONG oferece no site e com caráter enunciativo, mas não limitativo:</p>                                        <ul>                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>                        <li>B) Não divulgar conteúdo ou propaganda de natureza racista, xenofóbica, <a href='https://ondeapostar.pt/' style={{color: 'inherit', fontWeight: 'normal',textDecoration:'none'}}>apostas desportivas</a>, pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Salve Uma ONG, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>                    </ul>                                        <h3>Mais informações</h3>                    <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>                    <p>Esta política é efetiva a partir de <strong>December</strong>/<strong>2020</strong>.</p>

                                                </div>
                                                </Segment>

                                            </Segment>

                                            <Button color="green" fluid onClick={()=>{handleAccept()}}>Aceitar</Button>
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
                                            <Step completed>
                                                <Icon name="address card" />
                                                <Step.Content>
                                                    <Step.Title>Sua ONG</Step.Title>
                                                    <Step.Description>Informações da sua ONG</Step.Description>
                                                </Step.Content>
                                            </Step>
                                            <Step active>
                                                <Icon name="clipboard check" />
                                                <Step.Content>
                                                    <Step.Title>Privacidade</Step.Title>
                                                    <Step.Description>Aceitar nossos termos de privacidade e de serviço</Step.Description>
                                                </Step.Content>
                                            </Step>
                                        </Step.Group>
                                    </Header>
                                    <div style={{ margin: "10px" }}>
                                        Para finalizar aceite nossos termos de uso e privacidade
                                    </div>
                                </Card.Header>

                                <Segment basic>
                                    <Grid relaxed="very">

                                       <Grid.Column>

                                            <Segment color="red" style={{ width: "100%", height: "400px", overflowY: "scroll" }}>

                                                
                                                <Segment raised>
                                                    <div style={{paddingLeft:"10px"}}>
                                                    <h2>1. Termos</h2>
                                                    <p>Ao acessar ao site <a href='leancodedesign.com'>Salve Uma ONG</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum                desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>            <h2>2. Uso de Licença</h2>            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Salve Uma ONG , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e,                sob esta licença, você não pode: </p>            <ol>            <li>modificar ou copiar os materiais;  </li>            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);  </li>            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Salve Uma ONG;  </li>            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>            </ol>            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Salve Uma ONG a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais                baixados em sua posse, seja em formato eletrónico ou impresso.</p>            <h2>3. Isenção de responsabilidade</h2>            <ol>            <li>Os materiais no site da Salve Uma ONG são fornecidos 'como estão'. Salve Uma ONG não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,            adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li>            <li>Além disso, o Salve Uma ONG não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos            materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>            </ol>            <h2>4. Limitações</h2>            <p>Em nenhum caso o Salve Uma ONG ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Salve Uma ONG,                mesmo que Salve Uma ONG ou um representante autorizado da Salve Uma ONG tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade                por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>            <h2>5. Precisão dos materiais</h2>            <p>Os materiais exibidos no site da Salve Uma ONG podem incluir erros técnicos, tipográficos ou fotográficos. Salve Uma ONG não garante que qualquer material em seu site seja preciso, completo ou atual. Salve Uma ONG pode fazer alterações nos materiais contidos em seu                site a qualquer momento, sem aviso prévio. No entanto, Salve Uma ONG não se compromete a atualizar os materiais.</p>            <h2>6. Links</h2>            <p>O Salve Uma ONG não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Salve Uma ONG do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>             <h3>Modificações</h3>            <p>O Salve Uma ONG pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>            <h3>Lei aplicável</h3>            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Salve Uma ONG e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
                                                    </div>
                                                </Segment>

                                                <Segment raised>
                                                <div style={{paddingLeft:"10px"}}>
<h2>Política Privacidade</h2>                    
<p>A sua privacidade é importante para nós. É política do Salve Uma ONG respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Salve Uma ONG, e outros sites que possuímos e operamos.</p>                    <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.                    </p>                    <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou                        modificação não autorizados.</p>                    <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>                    <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href='https://politicaprivacidade.com' target='_BLANK'>políticas de privacidade</a>.                    </p>                    <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>                    <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>                    <h2>Política de Cookies Salve Uma ONG</h2>                    <h3>O que são cookies?</h3>                    <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes                        precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>                    <h3>Como usamos os cookies?</h3>                    <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável                        que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>                    <h3>Desativar cookies</h3>                    <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que                        você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>                    <h3>Cookies que definimos</h3>                    <ul>                        <li>                            Cookies relacionados à conta<br /><br /> Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns                            casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.<br /><br />                        </li>                        <li>                            Cookies relacionados ao login<br /><br /> Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos                            quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.<br /><br />                        </li>                        <li>                            Cookies relacionados a boletins por e-mail<br /><br /> Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações                            válidas apenas para usuários inscritos / não inscritos.<br /><br />                        </li>                        <li>                            Pedidos processando cookies relacionados<br /><br /> Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.<br /><br />                        </li>                        <li>                            Cookies relacionados a pesquisas<br /><br /> Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies                            para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br /><br />                        </li>                        <li>                            Cookies relacionados a formulários<br /><br /> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário                            para correspondência futura.<br /><br />                        </li>                        <li>                            Cookies de preferências do site<br /><br /> Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos                            definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.<br />                        </li>                    </ul>                    <h3>Cookies de Terceiros</h3>                    <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>                    <ul>                        <li>                            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo                            você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.                        </li>                    </ul>                    <p>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>                    <ul>                        <li>                            As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender                            como podemos melhorar o site para você.</li>                        <li>                            Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto                            estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</li>                        <li>                            À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos                            fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</li>                        <li>                            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.<br />                            Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.                        </li>                        <li>                            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios                            mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</li>                        <li>Vários parceiros anunciam em nosso nome e os cookies de rastreamento
    de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando                            aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.                        </li>                    </ul>                    <h3>Compromisso do Usuário</h3>                                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Salve Uma ONG oferece no site e com caráter enunciativo, mas não limitativo:</p>                                        <ul>                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>                        <li>B) Não divulgar conteúdo ou propaganda de natureza racista, xenofóbica, <a href='https://ondeapostar.pt/' style={{color: 'inherit', fontWeight: 'normal',textDecoration:'none'}}>apostas desportivas</a>, pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Salve Uma ONG, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>                    </ul>                                        <h3>Mais informações</h3>                    <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>                    <p>Esta política é efetiva a partir de <strong>December</strong>/<strong>2020</strong>.</p>

                                                </div>
                                                </Segment>

                                            </Segment>

                                            <Button color="green" fluid onClick={()=>{handleAccept()}}>Aceitar</Button>
                                        </Grid.Column>

                                    </Grid>

                                    
                                </Segment>

                            </Card.Content>

                        </Card>


                    </Container>
                </Grid.Row>

            </Grid>

        </div >
    )
}

