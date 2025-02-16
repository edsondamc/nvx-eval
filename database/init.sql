--  POSTGRESQL
create extension if not exists "pgcrypto";

create role ${DB_GRAPHILE_USER} login encrypted password 'HELLO';

create schema app;
create schema private;

create table app.user
(
    id         serial      not null
        primary key,
    first_name text        not null,
    last_name  text        not null,
    created_at timestamptz not null default now()
);

create table private.user
(
    user_id  serial not null
        references app.user (id),
    username text   not null,
    password text   not null
);

create table app.customer
(
    id         serial      not null
        primary key,
    first_name text        not null,
    last_name  text        not null,
    email      text,
    phone      text,
    created_at timestamptz not null
);

create table app.category
(
    id          serial      not null
        primary key,
    name        text        not null,
    description text,
    created_at  timestamptz not null default now()
);

create table app.product
(
    id          serial         not null
        primary key,
    name        text           not null,
    description text,
    price       decimal(10, 2) not null default 0,
    stock       integer        not null default 0,
    category_id integer        not null
        references app.category (id),
    created_at  timestamptz    not null default now()
);

create table app.order
(
    id               serial         not null primary key,
    total_amount     decimal(10, 2) not null,
    shipping_address text,
    status           text           not null default 'pending',
    created_at       timestamptz             default now(),
    customer_id      integer
        references app.customer (id)
);

create table app.order_detail
(
    id           serial         not null primary key,
    quantity     integer        not null,
    price        decimal(10, 2) not null,
    total_amount decimal(10, 2) not null,
    created_at   timestamptz    not null default now(),
    order_id     integer        not null
        references app.order (id),
    product_id   integer        not null
        references app.product (id)
);

insert into app.user (first_name, last_name)
VALUES ('PEDRO', 'PEREZ');

insert into private.user (user_id, username, password)
VALUES (1, 'admin', crypt('admin123', gen_salt('bf')));

insert into app.user (first_name, last_name)
VALUES ('JUAN', 'PEREZ');

insert into private.user (user_id, username, password)
VALUES (2, 'juan.perez', crypt('holamundo', gen_salt('bf')));

insert into app.customer (first_name, last_name, email, phone, created_at)
values ('Juan', 'Pérez', 'juan.perez@example.com', '+59176512345', '2024-06-11 10:12:16.300000 +00:00'),
       ('María', 'González', 'maria.gonzalez@example.com', '+59176567890', '2024-06-12 15:30:45.120000 +00:00'),
       ('Carlos', 'Rodríguez', 'carlos.rodriguez@example.com', '+59176523456', '2024-06-13 08:45:22.450000 +00:00'),
       ('Ana', 'Fernández', 'ana.fernandez@example.com', '+59176578901', '2024-06-14 12:10:33.600000 +00:00'),
       ('Pedro', 'López', 'pedro.lopez@example.com', '+59176534567', '2024-06-15 09:25:41.750000 +00:00'),
       ('Sofía', 'Martínez', 'sofia.martinez@example.com', '+59176589012', '2024-06-16 18:05:19.900000 +00:00'),
       ('Luis', 'Hernández', 'luis.hernandez@example.com', '+59176545678', '2024-06-17 20:55:10.300000 +00:00'),
       ('Gabriela', 'Torres', 'gabriela.torres@example.com', '+59176590123', '2024-06-18 11:35:28.570000 +00:00'),
       ('Fernando', 'Díaz', 'fernando.diaz@example.com', '+59176556789', '2024-06-19 14:22:37.620000 +00:00'),
       ('Camila', 'Vargas', 'camila.vargas@example.com', '+59176567890', '2024-06-20 16:47:05.880000 +00:00');

insert into app.category (name, description, created_at)
values ('Electrónica', 'Dispositivos electrónicos como teléfonos, laptops y tablets', '2024-06-11 10:12:16.300000 +00:00'),
       ('Hogar', 'Artículos para el hogar como muebles, electrodomésticos y decoración', '2024-06-12 15:30:45.120000 +00:00'),
       ('Ropa', 'Vestimenta para hombres, mujeres y niños', '2024-06-13 08:45:22.450000 +00:00'),
       ('Deportes', 'Equipos y accesorios deportivos', '2024-06-14 12:10:33.600000 +00:00'),
       ('Belleza', 'Productos de cuidado personal y cosméticos', '2024-06-15 09:25:41.750000 +00:00'),
       ('Automotriz', 'Accesorios y repuestos para automóviles', '2024-06-16 18:05:19.900000 +00:00'),
       ('Juguetes', 'Juguetes y juegos para niños de todas las edades', '2024-06-17 20:55:10.300000 +00:00'),
       ('Alimentos', 'Productos alimenticios y bebidas', '2024-06-18 11:35:28.570000 +00:00'),
       ('Libros', 'Libros de diferentes géneros y autores', '2024-06-19 14:22:37.620000 +00:00'),
       ('Salud', 'Productos relacionados con la salud y el bienestar', '2024-06-20 16:47:05.880000 +00:00');


INSERT INTO app.product (name, description, price, stock, category_id, created_at)
VALUES
-- Electrónica (ID: 1)
('Smartphone Galaxy S23', 'Teléfono inteligente de última generación con cámara de 200MP.', 999.99, 50, 1, '2024-06-11 10:12:16.300000 +00:00'),
('Laptop Dell XPS 15', 'Laptop potente con procesador Intel Core i7 y 16GB de RAM.', 1499.99, 30, 1, '2024-06-12 15:30:45.120000 +00:00'),
-- Hogar (ID: 2)
('Sofá de cuero', 'Sofá elegante de cuero para sala de estar.', 799.99, 10, 2, '2024-06-13 08:45:22.450000 +00:00'),
('Refrigerador LG', 'Refrigerador con tecnología Inverter y gran capacidad.', 1299.99, 20, 2, '2024-06-14 12:10:33.600000 +00:00'),
-- Ropa (ID: 3)
('Camiseta Nike', 'Camiseta deportiva de algodón 100%.', 29.99, 100, 3, '2024-06-15 09:25:41.750000 +00:00'),
('Jeans Levi''s', 'Pantalón de mezclilla original.', 59.99, 60, 3, '2024-06-16 18:05:19.900000 +00:00'),
-- Deportes (ID: 4)
('Balón de fútbol Adidas', 'Balón oficial de la FIFA.', 39.99, 80, 4, '2024-06-17 20:55:10.300000 +00:00'),
('Bicicleta de montaña', 'Bicicleta con suspensión delantera y frenos de disco.', 499.99, 15, 4, '2024-06-18 11:35:28.570000 +00:00'),
-- Belleza (ID: 5)
('Perfume Chanel No. 5', 'Fragancia icónica para mujer.', 129.99, 40, 5, '2024-06-19 14:22:37.620000 +00:00'),
('Crema hidratante Nivea', 'Crema hidratante para piel seca.', 9.99, 150, 5, '2024-06-20 16:47:05.880000 +00:00'),
-- Automotriz (ID: 6)
('Aceite de motor Castrol', 'Aceite sintético para autos de alto rendimiento.', 39.99, 90, 6, '2024-06-21 10:12:16.300000 +00:00'),
('Batería Bosch', 'Batería de 12V para automóviles.', 99.99, 25, 6, '2024-06-22 15:30:45.120000 +00:00'),
-- Juguetes (ID: 7)
('LEGO Star Wars', 'Set de construcción de la Estrella de la Muerte.', 159.99, 45, 7, '2024-06-23 08:45:22.450000 +00:00'),
('Muñeca Barbie', 'Muñeca Barbie con vestido de gala.', 24.99, 120, 7, '2024-06-24 12:10:33.600000 +00:00'),
-- Alimentos (ID: 8)
('Chocolate Milka', 'Tableta de chocolate con leche.', 2.99, 500, 8, '2024-06-25 09:25:41.750000 +00:00'),
('Café Colombiano', 'Café premium de origen colombiano.', 14.99, 200, 8, '2024-06-26 18:05:19.900000 +00:00'),
-- Libros (ID: 9)
('1984 - George Orwell', 'Novela distópica sobre un régimen totalitario.', 19.99, 70, 9, '2024-06-27 20:55:10.300000 +00:00'),
('El Señor de los Anillos', 'Trilogía de fantasía épica de J.R.R. Tolkien.', 39.99, 35, 9, '2024-06-28 11:35:28.570000 +00:00'),
-- Salud (ID: 10)
('Termómetro digital', 'Termómetro de lectura rápida.', 14.99, 80, 10, '2024-06-29 14:22:37.620000 +00:00'),
('Mascarilla N95', 'Mascarilla de alta protección contra partículas.', 4.99, 300, 10, '2024-06-30 16:47:05.880000 +00:00');


-- insert into app.product (name, description, price, stock, created_at)
-- values ('Laptop', 'Laptop con procesador Intel i7', 1499.99, 10, '2024-06-11 10:12:16.300000 +00:00'),
--        ('Smartphone', 'Teléfono con pantalla AMOLED', 499.99, 25, '2024-06-12 10:12:16.300000 +00:00'),
--        ('Auriculares Bluetooth', 'Auriculares inalámbricos', 59.99, 15, '2024-06-13 10:12:16.300000 +00:00'),
--        ('Mouse Gamer', 'Mouse inalámbrico 16,000 DPI', 150.99, 5, '2024-06-14 10:12:16.300000 +00:00'),
--        ('Disco SSD 1TB', 'Unidad de almacenamiento NVMe 1TB', 299.99, 30, '2024-06-15 10:12:16.300000 +00:00');

