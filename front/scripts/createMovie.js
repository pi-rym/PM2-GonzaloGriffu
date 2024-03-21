function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  const errors = [];

  /*  validar  title */
  if (!title || typeof title !== "string" || title.trim() === "") {
    errors.push("El Título es obligatorio.");
  }

  /* validar  year  */
  if (!year || isNaN(year) || year.toString().length !== 4) {
    errors.push("El Año es obligatorio y debe ser un número de 4 dígitos.");
  }

  /*  validar pdirector */
  if (!director || typeof director !== "string" || director.trim() === "") {
    errors.push("El Director es obligatorio.");
  }

  /* validar duration */
  if (!duration || typeof duration !== "string" || duration.trim() === "") {
    errors.push("La Duración es obligatoria.");
  }

  /* validar genre */
  if (!genre || !Array.isArray(genre) || genre.length === 0) {
    errors.push("El Género es obligatorio y debe ser un array no vacío.");
  }

  /*  validar rate */
  if (!rate || typeof rate !== "string" || rate.trim() === "") {
    errors.push("El Rate es obligatorio.");
  }

  /* validar  poster */
  if (!poster || typeof poster !== "string" || poster.trim() === "") {
    errors.push("El Poster es obligatorio.");
  } else {
    const isValidUrl = (value) => {
      try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch {
        return false;
      }
    };

    if (!isValidUrl(poster)) {
      errors.push("El póster debe ser una URL válida.");
    }
  }

  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre[0] ||
    !rate ||
    !poster
  )
    return errors;
}

function eventcreateMovie(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value.split(",");
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const error = validateForm({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  if (error) return alert(error);

  const newMovie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  };
  const axios = require("axios");
  axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => alert("Pelicula creada!"));
  if (error) return alert(error);
  else return alert("Datos enviados");
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("poster").value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const boton1 = document.getElementById("movieForm");
  boton1?.addEventListener("submit", eventcreateMovie);

  const boton2 = document.getElementById("clearButton");
  boton2?.addEventListener("click", clearInputs);
});

module.exports = { eventcreateMovie, clearInputs };
