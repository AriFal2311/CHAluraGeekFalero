import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(titulo, descripcion, url, imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <img class="img" src="${url}" alt="logo canal alura">
        <div class="descripcion-video">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`

    return video;
}


async function listaVideos() {
    try{
        const listaAPI = await conectaAPI.listaVideos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.titulo, element.descripcion, element.url, element.imagen)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}

listaVideos();