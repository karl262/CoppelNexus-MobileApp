import { useState } from 'react';

export function useFab() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((p) => !p);
    return { open, toggle };
}