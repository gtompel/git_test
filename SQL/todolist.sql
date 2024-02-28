CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    status VARCHAR(20),
    details VARCHAR(255),
    due_date DATE NOT NULL
);