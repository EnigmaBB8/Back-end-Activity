# Documentacion de BackEnd

## 1. Agregar un elemento
### 1.1 Agregar una pelicula
Este metodo introduce a la base de datos un elemento tipo pelicula con sus respectivos datos:
- título
- año
- director
- duración
- clasificación

#### NOTA: todos los campos NO deben estar vacios.

1. **Endpoint:** ```/peliculas/agregarPelicula```
2. **Método:** ```POST```
3. **Body:** 

```
{
    "titulo": "Mexico Magico y Tragico",
    "año": "2042",
    "director": "Mario Quintanilla",
    "duracion": "1:35",
    "clasificacion": "R-15"
}
```

4. **Validaciones:**
5. **Errores:**

### 1.2 Agregar un museo
Este metodo introduce a la base de datos un elemento tipo museo con sus respectivos datos:
- nombre
- categoria
- ubicación
- descripción

#### NOTA: todos los campos NO deben estar vacios.

1. **Endpoint:** ```/museos/agregarMuseo```
2. **Método:** ```POST```
3. **Body:**

```
{
    "nombre": "Museo Mágico",
    "ubicacion": "San martin de hipocampo",
    "categoria": "Gratuito",
    "descripcion": "Museo de artes misticas"
}
```

4. **Validaciones:**
5. **Errores:**

## 2. Mostrar elemento de la base de datos

Este metodo despliega todos las peliculas registradas en la base de datos.

1. **Endpoint:** ```/peliculas/mostrarPeliculas``` **o** ```/museos/mostrarMuseos```
2. **Método:** ```GET```
3. **Body:**
4. **Validaciones:**
5. **Errores:**

## 3. Actualizar datos de un elemento
### 3.1 Actualizar datos de una pelicula
Este metodo actualiza en la base de datos un elemento tipo pelicula con datos:
- título
- año
- director
- duración
- clasificación

#### Este metodo busca el elemento recibido con los datos anteriores.

1. **Endpoint:** ```/peliculas/actualizarPelicula```
2. **Método:** ```POST```
3. **Body:**
4. **Validaciones:**
5. **Errores:**

### 3.2 Actualizar datos de un museo
Este metodo introduce en la base de datos un elemento tipo museo con sus respectivos datos:
- nombre
- categoria
- ubicación
- descripción

#### Este metodo busca el elemento recibido con los datos anteriores.

1. **Endpoint:** ```/museos/actualizarMuseo```
2. **Método:** ```POST```
3. **Body:**
4. **Validaciones:**
5. **Errores:**


## 4. Borrar un elemento
### 4.1 Borrar una pelicula
Este metodo actualiza en la base de datos un elemento tipo pelicula con datos:
- título
- año
- director
- duración
- clasificación

#### Este metodo busca el elemento recibido con los datos anteriores.

1. **Endpoint:** ```/peliculas/borrarPelicula```
2. **Método:** ```DELETE```
3. **Body:**
4. **Validaciones:**
5. **Errores:**

### 4.2 Borrar un museo
Este metodo introduce en la base de datos un elemento tipo museo con sus respectivos datos:
- nombre
- categoria
- ubicación
- descripción

#### Este metodo busca el elemento recibido con los datos anteriores.

1. **Endpoint:** ```/museos/borrarMuseo```
2. **Método:** ```DELETE```
3. **Body:**
4. **Validaciones:**
5. **Errores:**
