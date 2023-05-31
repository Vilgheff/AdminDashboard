import { AntOrdersTable } from "Components/AntTable";
import { NewHelMet } from "Components/Helmet";
export const Orders = () => {
  return (
    <>
      <NewHelMet title="Orders"></NewHelMet>
      <AntOrdersTable></AntOrdersTable>
    </>
  );
};
