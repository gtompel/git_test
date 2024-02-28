CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL,
  assigned_to INT NOT NULL,
  due_date DATE NOT NULL,
  description TEXT NOT NULL
);

CREATE INDEX ix_tasks_project_id ON tasks (project_id);
CREATE INDEX ix_tasks_assigned_to ON tasks (assigned_to);
CREATE INDEX ix_tasks_due_date ON tasks (due_date);