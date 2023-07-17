
type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number
    name: string
    age:number
    address: AddressType
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
          {props.users.map((el) => {
              return(
                  <li key={el.id} id={`hw01-user-${el.id}`}>
                      <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
                      {el.address.street}, {el.address.city}
                  </li>
              )
          } )}
      </ul>
    </div>
  );
};
