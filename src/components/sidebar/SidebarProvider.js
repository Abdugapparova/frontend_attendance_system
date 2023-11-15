import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <SidebarContext.Provider
      value={{ open, setOpen, activeLink, setActiveLink }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
