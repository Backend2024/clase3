# Product Manager

Este proyecto implementa una clase `ProductManager` en JavaScript, mejorada para gestionar productos utilizando archivos JSON. Forma parte del entregable de la Clase 3 del Curso de Backend, enfocándose en el manejo de archivos y la programación asincrónica.

## Características

- Creación de una clase `ProductManager` para gestionar productos en un archivo JSON.
- Funcionalidades para añadir, actualizar, eliminar y buscar productos.
- Validación de campos únicos y generación de ID automática para cada producto.

## Instalación

Para utilizar este proyecto, clona el repositorio:

git clone []



## Uso

Aquí hay un ejemplo de cómo utilizar la clase `ProductManager`:

```
const ProductManager = require('./ProductManager');
const productManager = new ProductManager('path_to_products.json');

// Añadir un producto
productManager.addProduct("Producto Prueba", "Descripción del producto", 200, "url-imagen", "abc123", 25);

// Actualizar un producto
productManager.updateProduct(1, { price: 250 });

// Obtener todos los productos
console.log(productManager.getProducts());

// Obtener un producto por su ID
console.log(productManager.getProductById(1));

// Eliminar un producto
productManager.deleteProduct(1);  

```

## Pruebas  

Se incluyen pruebas para validar la funcionalidad de la clase ProductManager, cubriendo la adición, actualización, eliminación y búsqueda de productos.  


### 1. Prueba de Creación de Instancia y Obtención de Productos Iniciales  

Objetivo: Verificar que una nueva instancia de ProductManager inicia correctamente y getProducts devuelve un arreglo vacío inicialmente.

Código de Prueba:

```
test('crear instancia y obtener productos iniciales', () => {
    const productManager = new ProductManager('testProducts.json');
    expect(productManager.getProducts()).toEqual([]);
});  
```  

### 2. Prueba de Agregar Producto y Verificar Inclusión  

Objetivo: Asegurar que addProduct agrega productos correctamente y que se asigna un ID único a cada producto.

Código de Prueba:

```
test('agregar producto y verificar inclusión', () => {
    const productManager = new ProductManager('testProducts.json');
    productManager.addProduct("Producto 1", "Descripción", 100, "url", "code1", 10);
    const products = productManager.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0].id).toBe(1);
});  
```  

### 3. Prueba de Buscar Producto por ID  

Objetivo: Confirmar que getProductById devuelve el producto correcto y arroja un error si el ID no existe.

Código de Prueba:

```
test('buscar producto por ID', () => {
    const productManager = new ProductManager('testProducts.json');
    productManager.addProduct("Producto 1", "Descripción", 100, "url", "code1", 10);
    const product = productManager.getProductById(1);
    expect(product.id).toBe(1);
    expect(() => productManager.getProductById(2)).toThrow("Producto no encontrado");
});  
```  

### 4. Prueba de Actualizar Producto  

Objetivo: Probar que updateProduct actualiza correctamente un producto y que su ID se mantiene.

Código de Prueba:

```
test('actualizar producto', () => {
    const productManager = new ProductManager('testProducts.json');
    productManager.addProduct("Producto 1", "Descripción", 100, "url", "code1", 10);
    productManager.updateProduct(1, { price: 200 });
    const updatedProduct = productManager.getProductById(1);
    expect(updatedProduct.price).toBe(200);
});  
```  

### 5. Prueba de Eliminar Producto  

Objetivo: Asegurar que deleteProduct elimina un producto existente y arroja un error si el producto no existe.

Código de Prueba:

```
test('eliminar producto', () => {
    const productManager = new ProductManager('testProducts.json');
    productManager.addProduct("Producto 1", "Descripción", 100, "url", "code1", 10);
    productManager.deleteProduct(1);
    expect(() => productManager.getProductById(1)).toThrow("Producto no encontrado");
});  
```  

Estas pruebas cubren los aspectos esenciales de la clase ProductManager y aseguran que cada funcionalidad clave funcione como se espera.

## Contribuciones  

Las contribuciones son bienvenidas. Por favor, haz un fork del repositorio y crea un pull request para contribuir.

## Licencia
MIT

Este `README.md` proporciona una visión general del proyecto `ProductManager`, instrucciones sobre cómo instalarlo y usarlo, y detalles sobre las pruebas y contribuciones. 