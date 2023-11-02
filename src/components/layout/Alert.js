import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

export const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    <p>
      Type: {alert.type}. Message: {alert.msg}
    </p>
  );
};
