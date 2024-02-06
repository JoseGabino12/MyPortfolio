interface BadgeProps {
  text: string;
  className: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Badge = ({ text, className, icon: Icon }: BadgeProps) => {
  return (
    <span className={`flex items-center gap-x-2 rounded-full font-mono text-xs ${className} py-1 px-2 border border-white/10 color-span`}>
      {Icon && <Icon className='w-5 h-5' />}
      {text}
    </span>
  );
}

export default Badge;
