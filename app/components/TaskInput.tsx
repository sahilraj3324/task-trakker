import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <div style={{
        ...styles.inputWrapper,
        borderColor: isFocused ? 'var(--accent-primary)' : 'var(--card-border)',
        boxShadow: isFocused ? '0 0 0 2px var(--accent-glow)' : 'none',
      }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button
          type="submit"
          disabled={!text.trim()}
          style={{
            ...styles.button,
            opacity: text.trim() ? 1 : 0.5,
            transform: text.trim() ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          <span style={styles.btnIcon}>+</span>
        </button>
      </div>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginBottom: '2.5rem',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(15, 23, 42, 0.4)',
    borderRadius: '16px',
    border: '1px solid transparent',
    padding: '8px',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: 'var(--text-primary)',
    fontSize: '1.1rem',
    padding: '12px 16px',
    outline: 'none',
    minWidth: 0,
    fontFamily: 'inherit', // Inherit from parent (Outfit)
  },
  button: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    boxShadow: '0 4px 12px var(--accent-glow)',
    marginLeft: '8px',
  },
  btnIcon: {
    fontSize: '1.5rem',
    lineHeight: 1,
    fontWeight: 300,
  }
};
