export default interface UserEntity {
    id: string;
    name: string;
    email: string;
    is_admin: boolean;
    status: string;
    last_login?: string;
  };
  