# REST API HOTEL

Una api para sistemas de reservas de cuartos/habitaciones de hoteles

Para correr la api, se necesita de docker y para su instalacion se puede utilizar los siguentes comandos:

    docker build -t apihoteleria

    docker run -p 3001:3001 apihoteleria .

## Ejecutar aplicacion por docker compose

    docker compose build

    docker compose up

# REST API

- Al iniciar la api en la web se mostrara una documentacion con cada uno de los endpoint y una breve explicacion.

# Explicacion endpoint API 

POST /metodos

- Se cargan 4 metodos comunes de pagos, como lo son efectivo, tarjeta de debito, tarjeta de credito y transferencia,
se lo hace para ahorrar cargar uno por uno y directamente ya cargar todos con un solo endpoint

POST /habitaciones

- Al ejecutar este endpoint se van a cargar por defecto unas 25 habitaciones, por si no quiere las que vienen por defecto
cargar una por una con el mismo endpoint

# CLIENTES

# explicacion
Se creo cada uno de los endpoint para poder tener un registro de cada cliente que haya hecho una reserva en el sistema, justamente
para poder crear una reserva si o si tienen que estar cargados los datos del cliente del cual se va a realizar la reserva. 

# ENDPOINTS
GET /clientes

- Se obtienen todos los clientes, en caso de que no existan clientes cargados se les va a devolver un mensaje de error que aclara
que no existen clientes actualmente

GET /clientes/:id

- Obtiene el cliente por medio de su id, en el caso de que no exista el cliente con ese id arroja un mensaje de error.

POST /clientes

- Agrega un nuevo cliente

PUT /clientes/:id

- Se puede actualizar cualquiera de los campos del cliente por medio de su id

# RESERVAS

# explicacion
Las reservas almacenan todo la informacion del cliente, informacion de la habitacion y sus dias de estadia, el monto pagado
junto con su saldo por si dejo una seña, y el estado que pueden ser solamente 3, Pendiente, Pagado o Eliminado, al momento de
realizarse la reserva la habitacion automaticamente pasa a un estado de ocupada, se genera el pago, y se almacena el metodo de pago
utilizado para la reserva.

GET /reservas

- Obtiene todos los registros de las reservas, junto con el detalle del cuarto/habitacion, informacion del cliente y la informacion del pago

GET /reservas/:id

- Obtiene la reserva que corresponda al ID pasado por parametro, junto a todo el detalle del cuarto/habitacion, informacion del cliente y la informacion del pago, en el caso de que no exista un cliente con ese ID, la api responde con un mensaje de error.

GET /reservas?status=status

- Filtra segun el estado que se pase por el query status, este estado solo puede ser, Pendiente, Pagado o Eliminado

POST /reservas

- Agrega una nueva reserva, con los datos del cliente, el cuarto/habitacion y dias de estadia

PUT /reservas/:id?status=status

- Actualiza el estado de la reserva, en el caso de ser Pendiente y pasar a Pagado, esta reserva automaticamente su saldo pasa a ser 0

DELETE /reservas/:id

- Elimina la reserva que coincida con el id pasado por parametro

# PAGOS

# explicacion
Los pagos no tienen un endpoint directo de creacion de un pago, ya que el pago se genera o se crea al momento de realizarse la reserva.

# ENDPOINTS

GET /pagos

- Obtiene todos los pagos realizados, junto al id y el detalle del metodo de pago utilizado

GET /pagos/:id

- Obtiene un pago en especifico que coincida al id pasado por parametro

PUT  /pagos/:id

- Actualiza cualquiera de los campos del registro del pago que coincida con el id pasado por parametro

DELETE /pagos/:id

- Elimina el pago que coincida con el ID pasado por parametro

# HABITACIONES

# explicacion
Las habitaciones tiene un endpoint, que al ejecutarse carga ya una lista de 25 habitaciones por defecto, que igualmente
el mismo endpoint funciona para cargar una por una las habitaciones o tambien una lista.

# ENDPOINTS

GET /habitaciones

- Obtiene todas las habitaciones, en el caso de que no exista el servidor responde con un mensaje de error

GET /habitaciones/:id

- Obtiene la habitacion que coincida con el ID pasado por parametro

# METODOS DE PAGO

# explicacion
Se penso que se ejecutara el endpoint post para cargar de inicio los metodos de pagos
# ENDPOINTS

GET /metodos

- Obtiene todos los medios de pagos

GET /metodos/:id

- Obtiene el metodo de pago que coincida con el ID pasado por parametro


