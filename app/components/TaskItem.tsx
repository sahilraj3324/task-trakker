import React from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
}

export default function TaskItem({ task, onToggle }: TaskItemProps) {
    return (
        <div style={{
            ...styles.card,
            borderColor: task.completed ? 'var(--success)' : 'transparent',
            opacity: task.completed ? 0.7 : 1,
        }}>
            <div style={styles.content}>
                <span style={{
                    ...styles.text,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)',
                }}>
                    {task.text}
                </span>
                <span style={{
                    ...styles.badge,
                    background: task.completed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                    color: task.completed ? 'var(--success)' : 'var(--pending)',
                }}>
                    {task.completed ? 'Completed' : 'Pending'}
                </span>
            </div>
            <button
                onClick={() => onToggle(task.id)}
                style={styles.toggleBtn}
            >
                {task.completed ? 'Undo' : 'Done'}
            </button>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    text: {
        fontSize: '1.05rem',
        fontWeight: 500,
    },
    badge: {
        fontSize: '0.75rem',
        padding: '4px 8px',
        borderRadius: '20px',
        fontWeight: 600,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
    },
    toggleBtn: {
        background: 'transparent',
        border: '1px solid var(--card-border)',
        color: 'var(--text-secondary)',
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontSize: '0.9rem',
    }
};
