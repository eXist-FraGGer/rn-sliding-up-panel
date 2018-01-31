declare module 'rn-sliding-up-panel' {
    import * as React    from 'react';
    import { ViewStyle } from 'react-native';

    interface SlidingUpPanelProps {
        visible?: boolean,
        draggableRange?: {
            top: number,
            bottom: number
        },
        height?: number,
        renderSlidingControl?: Function,
        onDrag?: Function,
        onDragStart?: Function,
        onDragEnd?: Function,
        onRequestClose?: Function,
        allowMomentum?: boolean,
        allowDragging?: boolean,
        showBackdrop?: boolean,
        contentStyle?: ViewStyle,
        containerStyle?: ViewStyle
    }

    class SlidingUpPanel extends React.Component<SlidingUpPanelProps, any> {}

    export default SlidingUpPanel;
}
