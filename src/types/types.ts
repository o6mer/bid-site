export interface IImage {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
}

export interface IProduct {
  title: string;
  descripition: string;
  price: number;
  owner: string;
  images: Array<String>;
  _id: string;
}

export interface IUser {
  [key: string]: any;
  username: string;
  email: string;
  password: string;
  role: string;
  _id: string;
}
