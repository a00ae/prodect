import React, { memo } from "react";

// 1. تعريف الخصائص بشكل منفصل
type TextProps<E extends React.ElementType> = {
  as?: E;
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "size" | "children">;

// 2. المكون كدالة عادية (بدون تغليف مباشر)
function Text<E extends React.ElementType = "div">({
  as,
  size,
  children,
  ...rest
}: TextProps<E>) {
  const Component = as || "div";
  return (
    <Component className={`text-${size}`} {...rest}>
      {children}
    </Component>
  );
}

/**
 * هنا "الخدعة": نقوم بتصدير النسخة المغلفة بـ memo 
 * ولكننا "نجبر" TypeScript على رؤيتها كدالة Generic 
 * باستخدام Type Casting
 */
export default memo(Text) as typeof Text;