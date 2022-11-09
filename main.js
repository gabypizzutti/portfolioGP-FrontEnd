fetch('http://127.0.0.1:5500/datos.json')
.then((response) => response.json())
.then((datos) => {
	const nombresDePasajeros = datos.map((datos) => datos.nombre)
	console.log(nombresDePasajeros)
});

