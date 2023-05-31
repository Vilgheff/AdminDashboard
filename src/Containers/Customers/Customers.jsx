import { AntCustomersTable } from "Components/AntTable";
import { NewHelMet } from "Components/Helmet";

export const Customers = () => {
  return (
    <>
      <NewHelMet title="Customers"></NewHelMet>
      <AntCustomersTable></AntCustomersTable>
    </>
  );
};
