import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{
                opacity: task.completed ? 0.6 : 1,
                scale: 1,
                y: 0
            }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            style={{
                ...styles.card,
                borderColor: task.completed ? 'var(--success)' : 'var(--card-border)',
            }}
            whileHover={{ y: -2, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
        >
            <div style={styles.content}>
                <button
                    onClick={() => onToggle(task.id)}
                    style={{
                        ...styles.checkbox,
                        background: task.completed ? 'var(--success)' : 'transparent',
                        borderColor: task.completed ? 'var(--success)' : 'var(--text-tertiary)',
                    }}
                >
                    {task.completed && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>

                <div style={styles.textContainer}>
                    <span style={{
                        ...styles.text,
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'var(--text-tertiary)' : 'var(--text-primary)',
                    }}>
                        {task.text}
                    </span>
                </div>
            </div>

            <div style={{
                ...styles.status,
                background: task.completed ? 'rgba(52, 211, 153, 0.1)' : 'rgba(251, 191, 36, 0.1)',
                color: task.completed ? 'var(--success)' : 'var(--pending)',
            }}>
                {task.completed ? 'Done' : 'Pending'}
            </div>
        </motion.div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flex: 1,
    },
    checkbox: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: '2px solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 500,
        transition: 'color 0.2s',
    },
    status: {
        fontSize: '0.75rem',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: '20px',
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
    },
};
