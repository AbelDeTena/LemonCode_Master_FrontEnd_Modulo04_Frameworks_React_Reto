import React, { ReactNode } from "react";


interface ChildrenComponentProps {
  children: ReactNode;
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  

  return (
    <div className="container">
      { children }
    </div>
  );
};