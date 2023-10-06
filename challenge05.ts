const imageUrl: string = 'https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png'; // Reemplaza con la URL de tu imagen

const img: HTMLImageElement = new Image();

// Configurar la URL de la imagen
img.src = imageUrl;

// Manejar el evento de carga de la imagen
img.onload = function() {
  // Obtener las dimensiones de la imagen
  const width: number = img.width;
  const height: number = img.height;

  // Calcular el aspect ratio
  const aspectRatio: number = width / height;

  // Mostrar el aspect ratio en la consola
  console.log(`El aspect ratio de la imagen es: ${aspectRatio}`);
};

// Manejar errores de carga de la imagen
img.onerror = function() {
  console.error('Error al cargar la imagen.');
};
