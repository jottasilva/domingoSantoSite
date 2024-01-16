import styled from 'styled-components';
import '../css/style.css';
export const Body = styled.div`
    width: 70vw;
    height: 100vh;
    margin: 0 auto;
`
export const Topo = styled.div`
    display: flex;
    height: 27vh;
    margin: 0 auto;
`
export const Logo = styled.div`
    width:40vh;
    height:30vh;
    padding-top:20px;
    background:var(--logo) no-repeat center;
    background-size:100%
`
export const Cervejada = styled.div`
    display:flex;
    width:70vw;
    margin:0 auto;
    @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
    align-items: center;
   }
`
export const LogoCervejada = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-end;
    width:45vw;
    background:var(--logoCervejada) no-repeat center center;
    background-size: contain;
    transition:0.5s all ease-in-out;
    @media screen and (max-width: 680px) {
    width:100vw;
    height: 28vh;
    max-height: 28vh;
   }
   &:hover{
      scale: 1.1;
      rotate: 3deg;
    }
`
export const Contagem = styled.div`
    display:flex;
    justify-content:right;
    flex: 1;
    background:var(--tambor) no-repeat;
    background-position:left bottom;
    background-size:6vw;
    @media screen and (max-width: 680px) {
      width:80vw;
      background-position: right top;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      background-size: 15%;
   }
`
export const Contador = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   text-align:center;
   width:12vw;
   border-radius:8px;
   background: rgb(247,255,20);
   background: linear-gradient(6deg, var(--ColorAmarelo) 0%, var(--ColorAmareloEscuro) 100%);
   @media screen and (max-width:680px) {
     flex: 1;
     flex-direction: row;
     gap: 10px;
     margin-top:60px;
   }
   `
export const CervejadaMsg = styled.div`
   display:flex;
   height:10vh;
   align-items: center;
   max-height:60px;
   font-family:'Oswald',sans-serif;
   font-weight:500;
   letter-spacing:3px;
   text-transform: uppercase;
   color:var(--ColorAmarelo);
   font-size:1vw;
   @media screen and (max-width:680px) {
     font-size:3vw;
   }
`
export const Botoes = styled.div`
   display: flex;
   justify-content:center;
   align-items:baseline;
   width: 70vw;
  
`
export const BotaoMapa = styled.div`
   display: flex;
   position: fixed;
   left: 0;
   background-size: auto;
   margin-top: -10vh;
   cursor: pointer;
`
export const BotaoMapaSpan = styled.div`
   display: flex;
`
export const BotaoMapaImg = styled.div`
   width:5vw;
   height: 5vw;
   @media screen and (max-width:680px) {
      width:12vw;
      height: 12vw;
}
`
export const PromouterTicket = styled.div`
   display: flex;
   justify-content: space-around;
   gap:40px;
   align-items:flex-end;
   width: 50vw;
   margin-top: 30px;
   height: 30vh;
   cursor: pointer;
   @media screen and (max-width:680px) {
      display: grid;
      flex: 1;
      margin-top: 20px;
      height: auto;
}
`
   export const BotaoPromoter = styled.div`
   display:grid;
   flex: 1;
   transition: 0.5s all linear;
   color: white;
   cursor: pointer;
   &:hover{
      rotate: 3deg;
   }
`
export const BotaoTicket = styled.div`
   display:grid;
   flex: 1;
   transition: 0.5s all linear;
   color: white;
   &:hover{
      rotate: 3deg;
   }

`
export const BoxParceiros = styled.div`
   width: 70vw;
   margin:160px auto;
`
export const TextoParceiros = styled.div`
   width: 70vw;
   height:5vw;
   background: var(--parceiros) no-repeat center;
   margin:80px auto;
   @media screen and (max-width: 680px) {
      margin:0 auto;
      height: 12vw;
   }
`
export const Parceiros = styled.div`
   display: flex;
   gap: 22px;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
   padding-top:20px;
   margin:0 auto;
   height:auto; 
   @media screen and (max-width: 680px) {
      flex-direction: column;
      margin-top: 30px;
   }
`
export const Parceria = styled.div`
   width: 8vw;
   height:6vw;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 6px;
   transition:0.5s all ease-in-out;
   @media screen and (max-width: 680px) {
    width: 70vw;
    height: 70vw;
   }
   &:hover{
      scale: 1.3;
   }
`
export const Rodape = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 70vw;
   height: 10vh;
   gap: 20px;
   padding-bottom:50px;
   margin:0 auto;
   @media screen and (max-width: 680px) {
      flex-direction: column;
      padding:60px 0;
      flex: 1;
      justify-content: center;
   }
`
export const BotaoInsta = styled.div`
   display:flex;
   flex: 1;
   max-width: 40vh;
   justify-content: flex-start;
   align-items: center;
   background: var(--ColorInsta);
   border-radius: 6px;
   cursor: pointer;
   transition:0.5s all ease-in-out;
   @media screen and (max-width: 680px) {
      width: 70vw;
   }
   &:hover {
      scale: 1.2;
    }
`
export const IconRedes = styled.div`
   display: flex;
   width: 3vw;
   height:3vw;
   padding:5%;
   @media screen and (max-width: 680px) {
      width: 8vw;
      height:8vw;
   }
`
export const BotaoGaleria = styled.div`
   display: flex;
   flex: 1;
   max-width: 40vh;
   justify-content:flex-start;
   align-items: center;
   background:white;
   border-radius: 6px;
   cursor: pointer;
   transition:0.5s all ease-in-out;
   @media screen and (max-width: 680px) {
      width: 70vw;
   }
   &:hover {
      scale: 1.2;
    }
`
export const BotaoWpp = styled.div`
   display:flex;
   flex: 1;
   max-width: 40vh;
   justify-content:flex-start;
   align-items: center;
   background:var(--ColorWpp);
   border-radius: 6px;
   cursor: pointer;
   transition:0.5s all ease-in-out;
   @media screen and (max-width: 680px) {
      width: 70vw;
   }
   &:hover {
      scale: 1.2;
    }
`
export const Developer = styled.div`
   width: 70vw;
   height: auto;
   background: var(--JRSN) no-repeat center;
   background-size: 20%;
   margin:0 auto;
   cursor: pointer;
   padding-bottom:6%;
   @media screen and (max-width: 680px) {
      background-size:70%;
      height: auto;
      flex: 1;
      padding-bottom:60px;
      margin:10px 0;
   }
`
export const IconHeader = styled.section`
  width: 13vh;
  margin: 0 auto;
  padding: 6%;
`
export const PromotersPageTitulo = styled.div`
   background: var(--PromotersPage) no-repeat center;
   width: 50vw;
   height: 100px;
   margin:16vh auto;
      @media screen  and (max-width:680px){
         width: 70vw;
         margin:7vh auto;
      }
`
export const PromotersPg = styled.div`
   width: 60vw;
   margin:0 auto;
      @media screen  and (max-width:780px){
         width: 80vw;
      }
`
export const PromotersPromote = styled.div`
   display: flex;
   align-items: center;
   padding: 1%;
   border:1px indigo dashed;
   margin:40px auto;
   border-radius: 8px;
   @media screen and (max-width:680px){
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-top:20px;
      flex: 1;
      justify-content: center;
   }
`
export const PromoterFoto = styled.div`
   display: flex;
   width: 20vh;
   height: 20vh;
   border-radius: 8px;
   border:4px #fff solid;
   @media screen  and (max-width:680px){
         width: 15vh;
         height: 15vh;
      }
`
export const PromoterDados = styled.div`
   display: grid;
   gap: 20px;
   padding-left:4vw;
   color: white;
   flex: 1;
   @media screen and (max-width: 680px) {
      padding: 0;  
   }
`
export const BotaoWppPromoter = styled.div`
   display:flex;
   flex: 1;
   max-width: 35vh;
   max-height: 50px;
   justify-content:flex-start;
   align-items: center;
   background:var(--ColorWpp);
   border-radius: 6px;
   cursor: pointer;
   transition:0.5s all ease-in-out;
   @media screen and (max-width: 680px) {
      font-size: 2.4vw;
      width:50vw;
   }

`

export const BotaoInstaPromoter = styled.div`
   display:flex;
   flex: 1;
   max-width: 35vh;
   max-height: 50px;
   justify-content:flex-start;
   align-items: center;
   background:var(--ColorInsta);
   border-radius: 6px;
   cursor: pointer;
   @media screen and (max-width: 680px) {
      font-size: 2.4vw;
      width:50vw;
   }
`
export const Pdados = styled.div`
   display:flex;
   flex: 1;
   justify-content: flex-start;
   max-height:40vw;
   gap: 20px;
   @media screen and (max-width: 680px) {
      display: grid;
      justify-content: center;
      padding-bottom:30px;
   }
`