import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
export function UserSearch() {
  const [text, setText] = useState("");
  const { users, fetchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!text) {
      setAlert("This is mandatory", "error");
      return;
    }

    fetchUsers(text);
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}
