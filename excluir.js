const url = "https://xp41-soundgarden-api.herokuapp.com/events/:id"

const evento = document.querySelector("#excluir-evento")

const id = "623e7e7de6e2db10816075c0"
function deleteEventos(id) {
    fetch(`${url}/${id}`, {
        method : 'DELETE',
        headers: {
            "Content-type": "application/json; charset = UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => evento.textContent = data)
        .catch(error => console.error(error));
}
deleteEventos();