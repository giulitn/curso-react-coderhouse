# Coderhouse - curso React - proyecto e-commerce

## Proyecto del curso de React Js en Coderhouse.

Requisitos base del proyecto:

- Inicio: Al momento de ingresar a la app en la ruta base ‘/’
- Visualizar -como mínimo- un set de productos disponibles para la compra.
- Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.
- Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.
- Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
- El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- Checkout mínimo:
Items con sus cantidades
Total de la orden
Input para nombre, apellido y teléfono
Input para email y lógica de repetir el email 2 veces
Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
La navegabilidad debe ocurrir utilizando el router, y no href’s o location.


