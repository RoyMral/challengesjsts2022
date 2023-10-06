/*
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Fecha publicación enunciado: 01/02/22
 * Fecha publicación resolución: 07/02/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 */

async function ratioImage(url) {
  let urlImage = url;

  // const img = new Image();
  // img.src = urlImage;

  // img.onload = function () {
  //   const width = img.width;
  //   const height = img.height;
  //   const aspectRatio = width / height;

  //   console.log("El aspect ratio de la imagen es: ", aspectRatio);
  // };

  // img.onerror = function () {
  //   console.log("Error al cargar la imagen");
  // };

  const response = await fetch(urlImage);

  console.log(URL.createObjectURL(response.blob()));
}

ratioImage(
  "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png"
);
