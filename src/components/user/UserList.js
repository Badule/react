import { useContext, useEffect } from "react";
import { Spinner } from "./Spinner";
import { UserItem } from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
export function UserList() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-col-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
