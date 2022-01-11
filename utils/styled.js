import React, { forwardRef } from "react";
import { useStyledSystemPropsResolver } from "native-base";
const StyledComponent = (Component) => {
    return forwardRef(({ debug, ...props }, ref) => {
        const [styled, rest] = useStyledSystemPropsResolver(props);
        return (
            <Component style={styled} {...rest} ref={ref}>
                {props.children}
            </Component>
        );
    });
};

export default StyledComponent;
