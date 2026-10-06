import type { ComponentType, InputHTMLAttributes } from "react";

type IconInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ComponentType<{ size?: number | string; className?: string }>;
};

export default function IconInput({ icon: Icon, ...props }: IconInputProps) {
  return (
    <div className="mb-4 flex items-center gap-3 rounded border border-white/20 bg-ink px-4">
      <Icon size={20} className="shrink-0 text-white" />
      <input
        {...props}
        className="w-full bg-transparent py-4 text-white placeholder:text-white/50 focus:outline-none"
      />
    </div>
  );
}
