import { useAppContext } from "@/context/userState";
const DashBoard = () => {
  const { users } = useAppContext();
  console.log();
  return (
    <div className="card bg-primary text-primary-content w-96 my-5">
      <div className="card-body">
        <h2 className="card-title">user created with CREDENTIALS</h2>
        <p>id : {users.id}</p>
        <p>username : {users.username}</p>
        <p>email :{users.email}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default DashBoard;
