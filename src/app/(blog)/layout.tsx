import { PropsWithChildren } from "react";
import { Footer } from "../components";
import { Header } from "layout/main-layout/components";

export default function Layout ({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}