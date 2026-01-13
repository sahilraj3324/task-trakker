import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TaskItem from './TaskItem';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
}

export default function TaskList({ tasks, onToggle }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <div style={styles.emptyState}>
                <h3 style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>All caught up!</h3>
                <p style={styles.emptyText}>Add a new task to get started.</p>
            </div>
        );
    }

    return (
        <div style={styles.list}>
            <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={onToggle} />
                ))}
            </AnimatePresence>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    list: {
        display: 'flex',
        flexDirection: 'column',
    },
    emptyState: {
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'var(--card-highlight)',
        borderRadius: '16px',
        border: '1px dashed var(--card-border)',
        color: 'var(--text-tertiary)',
    },
    emptyText: {
        fontSize: '0.95rem',
    }
};
