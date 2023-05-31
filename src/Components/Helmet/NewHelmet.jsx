import { Helmet } from "react-helmet";

export const NewHelMet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="" />
    </Helmet>
  );
};
