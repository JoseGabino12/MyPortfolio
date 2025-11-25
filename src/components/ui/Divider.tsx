interface DividerProps {
  children: JSX.Element | JSX.Element[];
  background: string;
  backgroundDark: string;
}

const Divider = ({ children, background, backgroundDark }: DividerProps) => {
  return (
    <section className={ `bg-${background} dark:bg-[${backgroundDark}]` }>
      { children }
    </section>
  )
}

export default Divider;