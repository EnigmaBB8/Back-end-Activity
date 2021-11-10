# Documentacion de BackEnd

## 1. Agregar un elemento
### 1.1 Agregar una pelicula
Este metodo introduce a la base de datos un elemento tipo pelicula con sus respectivos datos:
- id
- titulo
- anio
- duracion
- genero

#### NOTA: id es unico y no puede ser null, están permitodos los null en el resto de campos

1.1.1. **Endpoint:** ```/api/peliculas/agregarPelicula```

1.1.2 **Método:** ```POST```

1.1.3. **Body:** 

```
{
    "id":1,
    "titulo": "Harry Potter y la piedra filosofal",
    "anio": 1999,
    "duracion": 145,
    "genero": "Ficcion"
    
}
```

1.1.4. **Validaciones:**

- Titulo: La longitud minima de la pelicula es 5 y el maximo 50
- Anio: Agrega una pelicula producida despues de 1930
- Duracion: La duracion no puede ser negativa

1.1.5. **Errores:**

```HTTP 244``` 

### 1.2 Agregar un museo
Este metodo introduce a la base de datos un elemento tipo museo con sus respectivos datos:
- id
- nombre
- anio
- lugar
- precioBoleto

#### NOTA: id es unico y no puede ser null, están permitodos los null en el resto de campos

1.2.1. **Endpoint:** ```/api/museos/agregarMuseo```

1.2.2. **Método:** ```POST```

1.2.3. **Body:**

```
{
    "id":3,
    "nombre":"Historia del arte",
    "anio": 2004,
    "lugar": "Polanco",
    "precioBoleto": 233
}
```

1.2.4. **Validaciones:**

- Nombre: La longitud minima del nombre es 5 y el maximo 50
- Anio: Agrega un museo inagurado despues de 1920
- PrecioBoletos: El precio de entrada no puede ser negativo

1.2.5. **Errores:**

```HTTP 244``` 

### 1.3 Agregar una playlist
Este metodo introduce a la base de datos un elemento tipo playlist con sus respectivos datos:
- idP
- lanzamiento
- peliculaId
- museoId

#### NOTA: idP es unico y no puede ser null, están permitodos los null en el resto de campos excepto museoId y pelicula Id

1.3.1. **Endpoint:** ```/api/playlist/agregarPlaylist```

1.3.2. **Método:** ```POST```

1.3.3. **Body:**

```
{
    "idP":2,
    "lanzamiento":2020,
    "peliculaId": 1,
    "museoId": 1
}
```

1.3.4. **Validaciones:**

- museoId: No puede ser null
- peliculaId: No puede ser null

1.3.5. **Errores:**

```HTTP 244``` 

## 2. Mostrar elementos de la base de datos

### 2.1 Mostrar peliculas
Este metodo muestra las peliculas almacenadas en la base de datos

2.1.1. **Endpoint:** ```/api/peliculas/obtenerPeliculas```

2.1.2. **Método:** ```GET```

2.1.3. **Response:** 

```
{
    {
        "id": 2,
        "titulo": "Titanic",
        "anio": 1999,
        "duracion": 187,
        "genero": "romance"
     }
}
```


2.1.4. **Errores:**

```HTTP 1501``` 

### 2.2 Mostrar museos
Este metodo muestra los museos almacenados en la base de datos

2.2.1. **Endpoint:** ```/api/museos/obtenerMuseos```

2.2.2. **Método:** ```GET```

2.2.3. **Response:** 

```
{
    {
        "id": 2,
        "nombre": "Museo de Cera",
        "anio": 2004,
        "lugar": 0,
        "precioBoleto": 212
    }
}
```


2.2.4. **Errores:**

```HTTP 1601``` 

### 2.3 Mostrar playlist
Este metodo muestra las playlists almacenadas en la base de datos

2.3.1. **Endpoint:** ```/api/playlist/obtenerPlaylist```

2.3.2. **Método:** ```GET```

2.3.3. **Response:** 

```
{
    {
        "idP": 2,
        "lanzamiento": 1997,
        "peliculaId": 1,
        "museoId": 1
    }
}
```


2.3.4. **Errores:**

```HTTP 1602``` 

## 3. Actualizar elemento de la base de datos
### 3.1 Actualizar pelicula
Este método actualiza los atributos de una pelicula de la base de datos

3.1.1. **Endpoint:** ```/api/peliculas/actualizarPelicula```

3.1.2 **Método:** ```PUT```

3.1.3. **Body:** 

```

{
    "id":4,
    "titulo": "Shrek"
}

```

3.1.4. **Validaciones:**

- Titulo: La longitud minima de la pelicula es 5 y el maximo 50
- Anio: Agrega una pelicula producida despues de 1930
- Duracion: La duracion no puede ser negativa

3.1.5. **Errores:**

```HTTP 244``` 

### 3.2 Actualizar museo
Este método actualiza los atributos de un museo de la base de datos

3.2.1. **Endpoint:** ```/api/museos/actualizarMuseo```

3.2.2 **Método:** ```PUT```

3.2.3. **Body:** 

```

{
    "id":1,
    "nombre":"Museo de la historia del arte"
}

```

3.2.4. **Validaciones:**

- Nombre: La longitud minima del nombre es 5 y el maximo 50
- Anio: Agrega un museo inagurado despues de 1920
- PrecioBoletos: El precio de entrada no puede ser negativo

3.2.5. **Errores:**

```HTTP 244``` 

### 3.3 Actualizar playlist
Este método actualiza los atributos de una playlist de la base de datos

3.3.1. **Endpoint:** ```api/playlist/actualizarPlaylist```

3.3.2 **Método:** ```PUT```

3.3.3. **Body:** 

```

{
    "idP":2,
    "lanzamiento":1990
}

```

3.3.4. **Errores:**

```HTTP 244``` 

## 4. Borrar elemento de la base de datos
### 4.1 Borrar una pelicula
Este metodo borra una pelicula de la base de datos segun su id 

4.1.1. **Endpoint:** ```/api/peliculas/borrarPelicula```

4.1.2 **Método:** ```DELETE```

4.1.3. **Body:** 

```
{
    "id":4
}

```

4.1.4. **Validaciones:**
- Debe existir el id a borrar

4.1.5. **Errores:**

```HTTP 1503``` 

### 4.2 Borrar un museo
Este metodo borra un museo de la base de datos segun su id 

4.2.1. **Endpoint:** ```/api/museos/borrarMuseo```

4.2.2 **Método:** ```DELETE```

4.2.3. **Body:** 

```
{
    "id":2
}

```

4.2.4. **Validaciones:**
- Debe existir el id a borrar

4.2.5. **Errores:**

```HTTP 1503``` 

### 4.3 Borrar una playlist
Este metodo borra un museo de la base de datos segun su id 

4.3.1. **Endpoint:** ```/api/playlist/borrarPlaylist```

4.3.2 **Método:** ```DELETE```

4.3.3. **Body:** 

```
{
    "idP":1
}

```

4.3.4. **Validaciones:**
- Debe existir el id a borrar

4.3.5. **Errores:**

```HTTP 1503``` 
