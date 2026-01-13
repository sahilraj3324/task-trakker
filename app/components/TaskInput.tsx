import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        style={styles.input}
      />
      <button type="submit" style={styles.button} disabled={!text.trim()}>
        Add Task
      </button>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    gap: '12px',
    marginBottom: '2rem',
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(15, 23, 42, 0.6)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
  },
  button: {
    padding: '0 24px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, var(--accent-primary), #4f46e5)',
    color: 'white',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px var(--accent-glow)',
  }
};
