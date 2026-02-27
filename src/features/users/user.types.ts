export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  image?: string;
}
