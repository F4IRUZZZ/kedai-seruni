import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const boxCls =
  "rounded border border-white/20 bg-ink px-4 focus-within:border-primary";
const inputCls =
  "w-full bg-transparent py-4 text-white placeholder:text-white/50 focus:outline-none";
const errCls = "mt-1 text-left text-sm text-red-400";

export function Field({
  error,
  children,
  className,
}: {
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4", className)}>
      <div className={boxCls}>{children}</div>
      {error && <p className={errCls}>{error}</p>}
    </div>
  );
}

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(inputCls, props.type === "date" || props.type === "time" ? "[color-scheme:dark]" : "", className)}
    />
  );
}

export function SelectInput({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={cn(inputCls, "cursor-pointer", className)}>
      {children}
    </select>
  );
}

export function AreaInput({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded border border-white/20 bg-ink px-4 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-primary",
        className,
      )}
    />
  );
}
