import { UserList } from "../components/user/UserList";
import { UserSearch } from "../components/user/UserSearch";
import { Alert } from "../components/layout/Alert";
import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
export function HomePage() {
  const { alert } = useContext(AlertContext);
  return (
    <div>
      {alert && <Alert />}
      <UserSearch />
      <UserList />
    </div>
  );
}
