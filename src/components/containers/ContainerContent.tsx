import React from "react";

interface ContainerContentProps {
  children: React.ReactNode;
  classname?: string;
}

const ContainerContent: React.FC<ContainerContentProps> = ({children, classname}) => {
  return (
    <section className={`w-full ${classname}`}>
      {children}
    </section>
  )
}

export default ContainerContent;