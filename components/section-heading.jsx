import { cn } from "@/libs/utils";

export default function SectionHeading({ 
  title, 
  subtitle, 
  className 
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>
  );
}