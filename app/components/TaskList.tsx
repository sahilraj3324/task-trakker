import React from 'react';
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
                <p style={styles.emptyText}>No tasks yet. Start by adding one above!</p>
            </div>
        );
    }

    return (
        <div style={styles.list}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
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
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        border: '1px dashed var(--card-border)',
    },
    emptyText: {
        color: 'var(--text-tertiary)',
        fontSize: '1.1rem',
    }
};
