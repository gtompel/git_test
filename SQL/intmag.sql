CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(15) NOT NULL
);

CREATE INDEX IF NOT EXISTS ix_orders_customer_id ON orders (customer_id);
CREATE INDEX IF NOT EXISTS ix_orders_order_date ON orders (order_date);
CREATE INDEX IF NOT EXISTS ix_orders_status ON orders (status);