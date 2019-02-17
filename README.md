# Rest-Server


Un servidor de autenticación el cual permite permite realizar las siguientes acciones:
  - CRUD de Usuario (GET-POST-PUT-DELETE)
  - Sistema de Autenticación (JWT)
  - Flexible y de facil integración

### Tecnología

Rest-Server usa varios proyectos de código abierto para funcionar correctamente:

* [JWT-Simple](https://www.npmjs.com/package/jwt-simple) - Gestion de Token.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Encriptado de contraseña.
* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.
* [node.js](https://nodejs.org/) - Herramienta de desarrollo.
* [method-override](https://www.npmjs.com/package/method-override) -  Para el uso de verbos HTTP Tales como PUT y DELETE, donde el cliente no lo permite.
* [moment](http://momentjs.com/) - Analizar, validar, manipular y mostrar fechas y horas en JavaScript.
* [mongoose](https://mongoosejs.com/docs/index.html) - ORM para uso de consultas y crear colecciones en MongoDB
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

Rest-Server requiere [Node.js](https://nodejs.org/) v10.4 + para ejecutarse.

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd rest-server
$ npm install 
$ node src/server.js
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run server
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:8080 || http://localhost:8080
```

Autor: José Romero
----
**Software Libre!**
