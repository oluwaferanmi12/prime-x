import { ReactNode } from "react";

export const SpaceWrapper = ({ children }: { children: ReactNode }) => {
  return <section className="w-[90%] mx-auto">{children}</section>;
};
