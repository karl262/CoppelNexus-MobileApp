import { useState } from 'react';
import {
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export function useWelcomeCarousel() {
    const [index, setIndex] = useState(0);

    function onMomentumScrollEnd(
        e: NativeSyntheticEvent<NativeScrollEvent>
    ) {
        const slide = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
        setIndex(slide);
    }

    return { index, onMomentumScrollEnd, SCREEN_WIDTH };
}
