'use client';

import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <main className="container animate-entrance">
      <div className="glass-panel" style={{ padding: '2rem 3rem', minHeight: '80vh' }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1>Task Tracker</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Stay organized with premium efficiency.
          </p>
        </header>

        <section style={{ maxWidth: '600px', margin: '0 auto' }}>
          <TaskInput onAddTask={addTask} />

          <div style={{ marginTop: '2rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--card-border)',
              paddingBottom: '0.5rem'
            }}>
              Your Tasks
            </h2>
            <TaskList tasks={tasks} onToggle={toggleTask} />
          </div>
        </section>
      </div>
    </main>
  );
}
