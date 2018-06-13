# Introducción a Angular

## Requisitos iniciales
Instalar Node.
Instalar angular/cli
```sh
npm install -g @angular/cli
```

## Ejercicio
Siguiendo el tutorial en esta web https://programmingwithmosh.com/angular/angular-4-tutorial/
realizar las siguientes tareas:

1 - Listar todas las categorías
2 - Listar los productos. Todos y por categorías.

Para estos dos puntos tienes el servidor creado en la carpeta backendServer.
Los endpoints que expone son los siguientes:
http://localhost:3000/categories
http://localhost:3000/products
http://localhost:3000/products/{categoryId} => http://localhost:3000/products/1

Para arrancarlo simplemente ejecuta los siguientes comandos:
```sh
npm install
node index.js
```

La aplicación Angular puedes crearla en la misma carpeta raíz.

Tanto diseño y estilos quedan a tu elección, tampoco hace falta que hagas un superdiseño. Algo simple simple como un combo que muestre las categorias y en función del valor de este combo se mostrarían una serie de productos diferentes en una tabla inferior es perfecto.

#### Requisitos
- Toda librería adicional que necesites deberás añadirla usando npm y el fichero angular-cli.json. El fichero html base debe ser lo más sencillo posible.
- Utilizar el servicio HttpClient para obtener los datos del backendServer, utilizando también los Observables (métodos subscribe, catch...)

## Evolución
Acabadas las dos tareas iniciales, pq no seguir más adelante?

Como idea, te propongo dos cosas:
- Formatear los importes de cada producto usando Pipes.
- Añadir un iamgen a cada producto. Para ello tendrás que modificar el fichero backendServer/routes/mocks.js para añadirle a cada producto una variable que contenga la url de la imagen.
- Hacer un buscador dinámico. Un input que en el momento que le introduzcas 3 carácteres busque los productos cuyo nombre coincide. Ten en cuenta que si hay una categoría seleccionada, los productos a buscar deberían ser los de esa categoría.


