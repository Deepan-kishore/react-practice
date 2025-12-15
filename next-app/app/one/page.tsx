"use client";
import { useEffect } from "react";
import Ones from "../../components/Ones";
import Table from "@/components/TablefromAPI";
import CenterDiv from "@/components/CenterDiv";
export default function One() {
  useEffect(() => {
    document.title = "One Page";
  }, []);

  return (
    <>
      <Ones />
     <CenterDiv />


      <Table url="https://jsonplaceholder.typicode.com/todos" />
    </>
  );
}
