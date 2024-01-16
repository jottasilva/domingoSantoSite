import "./components/component";
import iconInsta from "./imgs/icons/instagram.svg";
import iconIWapp from "./imgs/icons/whatsapp.svg";
import iconGaleria from "./imgs/icons/Camera.svg";
import ticket from "./imgs/icons/ticket.svg";
import promoters from './js/scripts';
import promoter from "./imgs/icons/megafone.svg";
import mapa from "./imgs/icons/mapa.svg";
    import logo1 from "./imgs/logos-patrocinadores/1.svg";
    import logo2 from "./imgs/logos-patrocinadores/2.svg";
    import logo3 from "./imgs/logos-patrocinadores/3.svg";
    import logo4 from "./imgs/logos-patrocinadores/4.svg";
    import logo5 from "./imgs/logos-patrocinadores/5.svg";
    import logo6 from "./imgs/logos-patrocinadores/6.svg";
    import logo7 from "./imgs/logos-patrocinadores/7.svg";
    import logo8 from "./imgs/logos-patrocinadores/8.svg";
    import logo9 from "./imgs/logos-patrocinadores/9.svg";
    import logo10 from "./imgs/logos-patrocinadores/10.svg";
    import logo11 from "./imgs/logos-patrocinadores/11.svg";
    import logo12 from "./imgs/logos-patrocinadores/12.svg";
    import logo13 from "./imgs/logos-patrocinadores/13.svg";
    import logo14 from "./imgs/logos-patrocinadores/14.svg";
    import logo15 from "./imgs/logos-patrocinadores/15.svg";
    import logo16 from "./imgs/logos-patrocinadores/16.svg";
    import logo17 from "./imgs/logos-patrocinadores/17.svg";

    import {
      Logo,
      Topo,
      Body,
      Cervejada,
      LogoCervejada,
      Contagem,
      Contador,
      CervejadaMsg,
      Botoes,
      PromouterTicket,
      BotaoMapa,
      BotaoPromoter,
      BotaoTicket,
      BoxParceiros,
      TextoParceiros,
      Parceiros,
      Parceria,
      Rodape,
      BotaoInsta,
      BotaoGaleria,
      BotaoWpp,
      Developer,
      IconRedes,
      IconHeader,
      BotaoMapaImg,
      BotaoMapaSpan
    } from "./components/component";
// Import de Imagens de parcerias
 
function Site() {

  document.title = "CERVEJADA - Domingo Santo";
  return (
    <html lang="pt-BRgit init">
      <head>
        <meta charset="UTF-8" lang="pt-BR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      <Body>
          <Topo>
            <Logo />
          </Topo>

          <Cervejada>
            <LogoCervejada>
              <CervejadaMsg>De Santo só o Nome!</CervejadaMsg>
            </LogoCervejada>
            <Contagem>
              <Contador id="contador">
                  <p>FALTAM</p>
                  <h2>29</h2>
                  <span>DIAS</span>
                  <h2>18</h2>
                  <span>HORAS</span>
                  <h2>17</h2>
                  <span>MINUTOS</span>
                  <span>12 SEGUNDOS</span>
              </Contador>
            </Contagem>
          </Cervejada>
          <Botoes>
          <BotaoMapa id="botaomap" onClick={()=>window.location.href="https://ticketfire.nyc3.digitaloceanspaces.com/eventos/2804/3129910122023165707-120512.jpeg"}>
              <BotaoMapaSpan>
                  <span>Mapa do Rolê</span>
              </BotaoMapaSpan>
             <BotaoMapaImg>
                 <img src={mapa} alt="Mapa do Evento" />
             </BotaoMapaImg> 
          </BotaoMapa>
            <PromouterTicket id="promoterticket">
              <BotaoPromoter id="promoter" onClick={promoters}>
              <IconHeader>
              <img src={promoter} alt="Icone Ticket" />
              </IconHeader>
                  <div>
                    <h3>PROMOTER</h3>
                    <span>FALE AGORA</span>
                  </div>
              </BotaoPromoter>
              <BotaoTicket id="ticket" onClick={()=> window.location.href="https://www.ticketfire.com.br/evento/2804/domingo-santo-pre-carnaval"}>
              <IconHeader>
              <img src={ticket} alt="Icone Ticket" />
              </IconHeader>
                  <div>
                    <h3>COMPRE AGORA</h3>
                    <span>INGRESSO ONLINE</span>
                  </div>
              </BotaoTicket>
            </PromouterTicket>
          </Botoes>
         <BoxParceiros className="BoxParceiros">
            <TextoParceiros/>
              <Parceiros>
          
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/sevenbrindespr"} className="parceria"><img src={logo1} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/sorteesportiva.parana"} className="parceria"><img src={logo2} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/housearguile"} className="parceria"><img src={logo3} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/fortpinturas_"} className="parceria"><img src={logo4} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/deliverymuchjacarezinho"} className="parceria"><img src={logo5} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/bardosamigosjac"} className="parceria"><img src={logo6} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/jrsn.designer"} className="parceria"><img src={logo7} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/idealcred.brasil"} className="parceria"><img src={logo8} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/eng.hximenes"} className="parceria"><img src={logo9} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/restaurantemartonis"} className="parceria"><img src={logo10} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/mamute_iphone01"} className="parceria"><img src={logo11} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/motos_avenidabrasil"} className="parceria"><img src={logo12} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/sun.powersolar"} className="parceria"><img src={logo13} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/dr.felipeandrade"} className="parceria"><img src={logo14} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/moodsushi_"} className="parceria"><img src={logo15} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/mestredogole"} className="parceria"><img src={logo16} alt=""/> </Parceria>
                  <Parceria onClick={() => window.location.href="https://www.instagram.com/lojabarbarril"} className="parceria"><img src={logo17} alt=""/> </Parceria>
  
              </Parceiros>
         </BoxParceiros>
         <Rodape>
            <BotaoInsta id="botaoinsta">
                <IconRedes> 
                  <img src={iconInsta} alt="Icone Redes Sociais" />
                </IconRedes>
                <section className="botaoinsta">
                  <h3>SIGA</h3>
                  <span>FIQUE POR DENTRO DAS ATUALIZAÇÕES</span>
                </section>
            </BotaoInsta>
            <BotaoGaleria id="botaogaleria">
                <IconRedes> 
                    <img src={iconGaleria}  alt="Icone Redes Sociais"  />
                </IconRedes>
                <section>
                <h3>GALERIA</h3>
                <span>Todas as fotos e videos</span>
                </section>
            </BotaoGaleria>
            <BotaoWpp id="botaowpp">
            <IconRedes> 
                <img src={iconIWapp}  alt="Icone Redes Sociais" />
            </IconRedes>
             <section>
             <h3>MANDE MENSAGEM</h3>
              <span>NA DUVIDA, CONVERSE COM A GENTE</span>
             </section>
            </BotaoWpp>
         </Rodape>
         <Developer/>
        </Body>
      </body>
    </html>
  );
}

export default Site;
