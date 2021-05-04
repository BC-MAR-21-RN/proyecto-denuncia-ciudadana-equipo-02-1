![BrightCoders Logo](img/logo-bc.png)

# Denuncia ciudadana

![cover](img/cover.jpg)
> Photo by <a href="https://unsplash.com/@norbuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Norbu Gyachung</a> on <a href="https://unsplash.com/s/photos/citizens-protest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
## Requerimientos
Una organización civil requiere de una aplicación móvil mediante la cual se puedan registrar y consultar denuncias ciudadanas

La aplicación móvil deberá complir con las siguientes funciones:

### Registro de usuario
- Permite a cualquier ciudadano registrarse proporcionando la siguiente información:
  - `Usuario`. Campo alfanumérico que permite identificar de manera única a cada persona registrada.
  - `E-mail`. Correo electrónico que sirve de contacto con el usuario.
  - `Clave`. Campo alfanumérico para la clave de acceso del usuario.

**BONUS POINTS** el `e-mail` debe ser verificado por algún mecanismo, por ejemplo, enviando algún código de confirmación al correo

### Inicio de sesión
- Permite a los usuarios registrados y al administrador iniciar sesión. Para iniciar sesión deberán capturar su `e-mail` y `clave`

### Home
- [`Inicio`](https://github.com/bright-coders/proyecto-denuncia-ciudadana-web/blob/main/README.md#inicio). Muestra un listado de las denuncias presentadas en los `lugares de interés` que el usuario tiene registrados, ordenado cronológicamente de la más reciente a la más antigua. 
-  `Configuración`. Esta opción o pantalla permite al usuario:
  - cambiar su nombre de usuario.
  - cambiar su correo electrónico.
  - cambiar su clave de acceso.
  - agregar `lugares de interés`. Los lugares de interés se  componen por los campos `código postal` y `asentamiento`.
- [`Mis denuncias`](https://github.com/bright-coders/proyecto-denuncia-ciudadana-web/blob/main/README.md#mis-denuncias). Esta opción muestra un listado de las denuncias que se han presentado ordenadas cronológicamente de la más reciente a la más antigua. 
- [`Agregar denuncia`](https://github.com/bright-coders/proyecto-denuncia-ciudadana-web/blob/main/README.md#agregar-denuncia). Esta opción permite agregar una nueva denuncia.

### Inicio
El listado de la pantalla de inicio, muestra las denuncias presentadas en los lugares de interés aue el usuario tiene registrados, ordenado cronológicamente de la más reciente a la más antigua. La información que el usuario puede ver es:
  - Usuario que hizo la denuncia
  - Area 
  - Título
  - Descripción
  - Evidencia(s)
  - Botón que permite otros usuarios manifestar su apoyo a esa denuncia (like) 

### Agregar denuncia
Permite agregar una nueva denuncia. Para agregar una denuncia el usuario deberá registrarse la siguiente información:
  - `usuario` [requerido] El usuario que realiza la denuncia, **debe existir la opción de hacer denuncias de manera anónima**
  - `fecha de registro` fecha en que se registra o publica la denuncia
  - `fecha de hechos` fecha en la que ocurrieron los hechos o denuncia
  - `área` [requerido] El área de la denuncia, por ejemplo, seguridad, servicios, infraestructura, etc. Se toman de un catálogo definido en la base de datos
  - `titulo` [requerido] [Un título que identifica a la denuncia 
  - `descripción` [requerido] Descripción de los hechos o denuncia
  - `ubicación` [requerido] Dirección de los hechos o denuncia. Esta integrado por lo siguientes campos:
    - `Estado`[requerido]
    - `Municipio` [requerido]
    - `Código postal` [requerido]
    - `Asentamiento`[requerido]
    - `Calle` [no requerido]
    -  `Número` [no requerido]
    -  La información se toma de un catálogo almacenado en la base de datos el cual puede llenarse con información [obtenida de esta página](https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx)
   -  `evidancia` Inageb que se agrega como evidencia. **BONUS POINTS** Permite agregar más de una imagen o documento PDF.

### Mis denuncias
Permite ver un listado de las denuncias que el usuario ha registrado presentado ordenadas cronológicamente de la más reciente a la más antigua y le permite modificar o eliminar denuncias.

## Requerimientos no-funcionales
 - Base de datos
   - La información se guardará en firebase
 - Calidad
   - Utilizar un estilo de código estandarizado (revisado por Eslint)
   - Incluir pruebas unitarias
   - Puntuación **A** obtenida en CodeClimate
- Ejecución 
   - Puede ejecutarse en Android o iOs
- Diseño
   - Libre
- Código fuente
   - Orientado a Objetos
   - Métodos pequeños
   - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
 - Manejo del estado
   - Redux para el manejo del estado de la App

## Entregable
- Código fuente en Github
- Incluir en el repositorio la puntuación obtenida (badge) en CodeClimate
- Documentar en [este archivo](setup/README.md) los pasos necesarios para ejecutar la App
- [Los commits deben se significativos](https://medium.com/better-programming/you-need-meaningful-commit-messages-d869e44e98d4)

## Setup
[Aquí se describen los pasos necesarios para ejecutar y probar este proyecto](setup/README.md)

## Recursos
[Para apoyo de tus actividades utiliza esta lista de recursos recomendados](https://github.com/bright-coders/commons/tree/master/topics/resources-react-native)
