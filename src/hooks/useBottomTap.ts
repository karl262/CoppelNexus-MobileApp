import { useState } from 'react';

export type TabKey = 'home' | 'redeem' | 'earn' | 'progress';

export function useBottomTab() {
  const [current, setCurrent] = useState<TabKey>('home');
  return { current, setCurrent };
}
