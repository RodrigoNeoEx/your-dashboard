import React, {ReactNode} from 'react'

interface ContainerPageProps {
  children: ReactNode;
  className?: string;
}


const ContainerPage: React.FC<ContainerPageProps> = ({children, className}) => {
  return (
    <section className={`w-full h-screen mx-auto overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export default ContainerPage