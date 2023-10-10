import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef(function PopoverContent(
  { className, align = "center", sideOffset = 4, ...props },
  ref
) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={`z-50 w-72 shadow-md outline-none  ${className || ""}`}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
