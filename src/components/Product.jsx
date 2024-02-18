import { HiUser } from "react-icons/hi";

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser /> {name}
      </p>
    </div>
  );
};
