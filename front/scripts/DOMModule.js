function toHtml(objeto) {
  const { title, year, director, duration, genre, rate, poster } = objeto;

  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("nuevoDiv");

  nuevoDiv.innerHTML = `<div >
    <h3 class="classH3">${title}</h3>
        <h4 class="classH4">${year}</h4>
        <img class="classPoster" src="${poster}" alt="">
        <div class="izq">
           <div>
              <h4 class="classH4"><b>Director: </b>${director}</h4>
              <h4 class="classH4"><b>Duración: </b>${duration}</h4>
           </div>   
        </div>   
        <div class="der">
           <div>
           <h4 class="classH4">★${rate}</h4>
           <h4 class="classH4">${genre}</h4>
           </div>   
           </div> 
           </div>  
           `;

  return nuevoDiv;
}

module.exports = { toHtml };
