import { useSelector } from "react-redux";

const users = () => {
  const {users } = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
          </li>
        ))}
      </ul>
    </div>
   );
}

export default users;