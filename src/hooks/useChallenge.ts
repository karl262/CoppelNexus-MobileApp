import { useState } from 'react';

export interface Challenge { id: string; title: string; completed: number; total: number; reward: string; }

export function useChallenge() {
    const [challenge] = useState<Challenge[]>([
        { id: '1', title: 'Registro diario', completed: 10, total: 20, reward: '+5 llaves' },
        { id: '2', title: 'Visitas completadas', completed: 1, total: 5, reward: '+10 llaves' },
        { id: '3', title: 'Ventas realizadas', completed: 0, total: 3, reward: '+15 llaves' },
    ]);
    return challenge;
}
