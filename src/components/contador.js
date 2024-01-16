import {useState } from "react"; 
const useContador = (date) => {

    const [dia, setDia] = useState();
    const [hora, setHora] = useState();
    const [minuto, setMinuto] = useState();
    const [segundo, setSegundo] = useState();

    const countDown = () => {

        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now;
        const second = 1000;
        const minutes = second * 60;
        const hour = minutes * 60;
        const day = hour * 24;
    
        const dayNumber = Math.floor(interval / day);
        const hourNumber = Math.floor((interval % day) / hour);
        const minuteNumber = Math.floor((interval % hour) / minutes);
        const secondNumber = Math.floor((interval % minutes) / second);
      
        setDia(dayNumber);
        setHora(hourNumber);
        setMinuto(minuteNumber);
        setSegundo(secondNumber);
    };
    setInterval(countDown, 1000);

    return [dia,hora, minuto, segundo];
};
export default useContador;
