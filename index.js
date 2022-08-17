let eventoID;

function orderEvents(events){
    return events.sort((event1, event2) =>{
        return new Date() - new Date();
    })
}

function removePastEvents(events){
    return events.filter((event) =>{
        return new Date() - new Date(event.scheduled) > 0;
    })
}

function exibirEventos(listaEventos){
        const eventosOrdenados = orderEvents(listaEventos);
        const eventos = removePastEvents(eventosOrdenados);
        const divEventos = document.getElementById("divEventos").children;
     
        for(let i=0; i < divEventos.length; i++){
            const item = divEventos[i];
            const evento = eventos[i];   
            const data = new Date(evento.scheduled);
            const dataFormatada = data.toLocaleDateString();
        
            item.querySelector('h2').innerText = `${evento.name} - ${dataFormatada}`;
            item.querySelector('h4').innerHTML = evento.attractions.join(', ');
            item.querySelector('p').innerText = evento.description

            item.querySelector('a').addEventListener('click', (e) =>{
                e.preventDefault();
                
                eventoID = evento._id
            })       
        }
}

try{
    fetch("https://xp41-soundgarden-api.herokuapp.com/events")
    .then(data => data.json())
    .then(listaEventos => exibirEventos(listaEventos));

}catch(error){
    console.error(error);
}

main()