# Proyecto TO-DO List

## Tecnologías utilizadas en proyecto

- Backend
  - Django rest framework - Para la creación del API
  - Python dotenv - Para lectura de las variables de entorno
  - Psycopg2 - interfaz para conectarse y trabajar con bases de datos PostgreSQL
  - Yasg - Documentación del API 

- Frontend
  - Tailwind - framework CSS


## Correr proyecto de manera local

La versión de python utilizada es: 3.10.12

1. Instalar los módulos y librerías necesarias para hechar andar el proyecto. Se recomienda instalar virtualenv, módulo para crear entornos virtuales en python
2. Abrir terminal y posicionarse en la carpeta del proyecto
3. Ejecutar ``` pip install -r requirements.txt ```
4. Crear base de datos en el gestor de base de datos postgresql, para un facil manejo de los datos de autenticación, lo podemos hacer desde el archivo ```.env``` que se encuentra en la raíz del proyecto
5. Si todo bien con la base de datos, corremos el comando comando ```python manage.py migrate```
6. por último correr el proyecto ``` python manage.py runserver ```

## Documentacion del API

podemos ver la documentación del API ya una vez que el proyecto se encuentre ejecución en las siguientes ligas:

- http://localhost:8000/docs/
- http://localhost:8000/redocs/
