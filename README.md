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

## 2. Mostrar elemento de la base de datos

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

```HTTP 1601``` 

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
