-- Crear la base de datos
CREATE DATABASE infoBL;

-- Usar la base de datos
\c infoBL

-- Crear la tabla usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    correo_usuario VARCHAR(100) UNIQUE NOT NULL,
    contrasena_usuario VARCHAR(255) NOT NULL,
    rol_usuario VARCHAR(50) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_actividad TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE,
    foto_usuario VARCHAR(255)
);

-- Crear la tabla core
CREATE TABLE core (
    rut_cor VARCHAR(20) PRIMARY KEY,
    nombre_cor VARCHAR(100),
    oid SERIAL UNIQUE
);

-- Crear la tabla botonera
CREATE TABLE botonera (
    id_btn SERIAL PRIMARY KEY,
    codigo_btn VARCHAR(100),
    rut_cor VARCHAR(20),
    fecha_btn TIMESTAMP WITHOUT TIME ZONE,
    oid INTEGER,
    CONSTRAINT fk_rut_cor_botonera FOREIGN KEY (rut_cor) REFERENCES core(rut_cor)
);

-- Crear la tabla ordenanza
CREATE TABLE ordenanza (
    id_ord SERIAL PRIMARY KEY,
    codigo_ord VARCHAR(100),
    nombre_ord VARCHAR(1000),
    fecha_ord DATE,
    umbral_ord INTEGER,
    aprobado_ord BOOLEAN,
    segundos_ord INTEGER,
    en_votacion_ord BOOLEAN,
    botoneras_totales_ord INTEGER,
    botoneras_vivas_ord INTEGER,
    oid INTEGER
);

-- Crear la tabla votacion
CREATE TABLE votacion (
    id_ord INTEGER NOT NULL,
    id_btn INTEGER NOT NULL,
    rut_cor VARCHAR(20),
    aprobado_vot BOOLEAN,
    fecha_vot TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    oid VARCHAR(100),
    PRIMARY KEY (id_ord, id_btn),
    CONSTRAINT fk_id_ord_votacion FOREIGN KEY (id_ord) REFERENCES ordenanza(id_ord),
    CONSTRAINT fk_id_btn_votacion FOREIGN KEY (id_btn) REFERENCES botonera(id_btn),
    CONSTRAINT fk_rut_cor_votacion FOREIGN KEY (rut_cor) REFERENCES core(rut_cor)
);

-- Crear índices adicionales para mejorar el rendimiento de las consultas
CREATE INDEX idx_codigo_btn ON botonera (codigo_btn);
CREATE INDEX idx_fecha_btn ON botonera (fecha_btn);
CREATE INDEX idx_codigo_ord ON ordenanza (codigo_ord);
CREATE INDEX idx_fecha_ord ON ordenanza (fecha_ord);
CREATE INDEX idx_rut_cor_votacion ON votacion (rut_cor);
CREATE INDEX idx_fecha_vot ON votacion (fecha_vot);

/*
Flujo : 

Usuarios (usuarios): Gestiona la información de los usuarios del sistema (administradores, etc.). No está directamente involucrada en el flujo de votación en sí, pero es importante para la autenticación y autorización.

Entidades/Instituciones (core): Almacena información sobre las entidades que participan en las votaciones (personas, instituciones, etc.). Cada entidad se identifica de forma única por su rut_cor.

Botoneras/Dispositivos (botonera): Representa los dispositivos que se utilizan para votar. Cada dispositivo tiene un id_btn único y está asociado a una entidad (rut_cor) a través de una clave foránea.

Ordenanzas (ordenanza): Almacena información sobre las ordenanzas que se someten a votación. Cada ordenanza tiene un id_ord único.

Votaciones (votacion): Registra cada votación individual. Esta tabla es la que une todas las demás y representa el flujo principal de la votación.

Flujo de una votación:

Se crea una ordenanza: Un usuario (probablemente un administrador) crea una nueva ordenanza en la tabla ordenanza. Se le asigna un id_ord único.

Se configuran las botoneras: Se registran las botoneras en la tabla botonera, asociándolas a las entidades correspondientes en la tabla core mediante rut_cor.

Se inicia la votación: Se pone la ordenanza en estado de votación (en_votacion_ord = TRUE en la tabla ordenanza).

Los dispositivos votan: Los usuarios utilizan sus dispositivos (botoneras) para votar. Por cada votación:

Se crea un nuevo registro en la tabla votacion.
id_votacion: Se genera automáticamente un nuevo ID único para la votación.
id_ord: Se registra el id_ord de la ordenanza que se está votando.
id_btn: Se registra el id_btn del dispositivo que se utilizó para votar.
rut_cor: (Opcional) Se registra el rut_cor de la entidad que vota (si se necesita esta información directamente en la tabla votacion).
aprobado_vot: Se registra el resultado de la votación (TRUE o FALSE).
fecha_vot: Se registra la fecha y hora de la votación.
oid: Se registra cualquier otro identificador relevante (si es necesario).
Se finaliza la votación: Se cambia el estado de la ordenanza (en_votacion_ord = FALSE).

Se consultan los resultados: Se realizan consultas a la tabla votacion para obtener los resultados de la votación por ordenanza, por dispositivo, etc.

Ejemplo concreto:

Se crea la ordenanza "Aumento de sueldo" (id_ord = 1).

Se tienen dos botoneras: "Botonera 1" (id_btn = 1) y "Botonera 2" (id_btn = 2), ambas asociadas a la entidad con rut_cor = '12345678-9'.

Se inicia la votación de "Aumento de sueldo".

Un usuario usa la "Botonera 1" y vota "Sí" (aprobado_vot = TRUE). Se inserta un registro en votacion:

| id_votacion | id_ord | id_btn | rut_cor    | aprobado_vot | fecha_vot             | oid        |
| :---------- | :----- | :----- | :--------- | :----------- | :-------------------- | :--------- |
| 1           | 1      | 1      | 12345678-9 | TRUE         | 2024-10-27 10:00:00 | 'oid1'     |

Otro usuario usa la "Botonera 2" y vota "No" (aprobado_vot = FALSE). Se inserta otro registro en votacion:

| id_votacion | id_ord | id_btn | rut_cor    | aprobado_vot | fecha_vot             | oid        |
| :---------- | :----- | :----- | :--------- | :----------- | :-------------------- | :--------- |
| 2           | 1      | 2      | 12345678-9 | FALSE        | 2024-10-27 10:01:00 | 'oid2'     |

Ventajas del esquema:

Normalización: El esquema está bien normalizado, lo que evita la redundancia de datos y mejora la integridad.
Flexibilidad: Permite registrar múltiples votaciones por ordenanza y por dispositivo.
Eficiencia: Las claves primarias y foráneas mejoran el rendimiento de las consultas.
*/

