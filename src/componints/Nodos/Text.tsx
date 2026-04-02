import { memo } from "react";

type Props<E extends React.ElementType> = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  as?: E;
};

type TextProps<E extends React.ElementType> = Props<E> &
  Omit<React.ComponentProps<E>, keyof Props<E>>;
function Text<E extends React.ElementType = "div">({
  children,
  size,
  as,
}: TextProps<E>) {
  const Component = as || "div";
  return <Component className={`text-${size}`}>{children}</Component>;
}

export default memo(Text);
