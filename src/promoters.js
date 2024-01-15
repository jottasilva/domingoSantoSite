import {BotaoWppPromoter,Pdados, IconRedes,BotaoInstaPromoter, PromoterDados, PromoterFoto, PromotersPageTitulo, PromotersPg, PromotersPromote } from "./components/component";
import iconIWapp from "./imgs/icons/whatsapp.svg";
import iconInsta from "./imgs/icons/instagram.svg";
import { Link } from "react-router-dom";
import { dadosPromoters } from "./dados";
function PromotersPage(){
   
    return(
        
        <PromotersPg>
            <Link style={{textDecoration:'none',color:'#fff'}} to="/">
            <h1 style={{marginTop:'20px'}}>Voltar</h1>
            </Link>
            <PromotersPageTitulo/>
            {
                dadosPromoters.map((prm) => (                          
                    <PromotersPromote>
                        <PromoterFoto style={{backgroundImage:`url(${prm.foto})`, backgroundSize:'cover',backgroundPosition:'center'}}/>                         
                        <PromoterDados id="promoterdados">
                        <h2>{prm.nome}</h2>
                        <span>● {prm.cidade}</span>
                            <Pdados>
                                <BotaoWppPromoter onClick={() => window.location.href="https://wa.me/"+prm.whatsapp} id="botoesPromoter">
                                    <IconRedes> 
                                    <img width={30} src={iconIWapp}  alt="Icone Contato Whatsapp" />
                                    </IconRedes>
                                        <section>
                                        <h3>COMPRE AGORA</h3>
                                        </section>
                                    </BotaoWppPromoter>
                                    <BotaoInstaPromoter onClick={() => window.location.href=prm.instagram} id="botoesPromoter">
                                    <IconRedes> 
                                    <img width={30} src={iconInsta}  alt="Icone Contato Instagram" />
                                    </IconRedes>
                                        <section>
                                        <h3>ME SIGA!</h3>
                                        </section>
                                    </BotaoInstaPromoter>
                            </Pdados>
                </PromoterDados>
                
            </PromotersPromote>
                ))
            }
        </PromotersPg>  

    );
}
export default PromotersPage;