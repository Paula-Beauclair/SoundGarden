let eventoID;

function exibirEventos(eventos){
    eventos.forEach(evento =>{
        const eventoModel = document.querySelector('.models article').cloneNode(true);
        const data = new Date(evento.scheduled);
        const dataFormatada = data.toLocaleDateString();

        eventoModel.querySelector('h2').innerHTML = `${evento.name} - ${dataFormatada}`;
        eventoModel.querySelector('h4').innerHTML = evento.attractions.join(', ');
        eventoModel.querySelector('p').innerText = evento.description;

        eventoModel.querySelector('a').addEventListener('click', (e) =>{
            e.preventDefault();
            
            eventoID = evento._id
        })

        document.getElementById('boxEventos').append(eventoModel);
    });
}

try {
    fetch('https://xp41-soundgarden-api.herokuapp.com/events')
    .then(data => data.json())
    .then(listaEventos => exibirEventos(listaEventos))

} catch (error) {
    console.error(error);
}

main()