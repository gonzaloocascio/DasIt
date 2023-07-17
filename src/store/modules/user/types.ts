export interface UserState {
  idUser: number;
  Rol: string;
  Profile: UserProfile;
  isLogged: boolean | undefined;
  requestErrorMsg: RequestErrorMsg;
}
export interface UserProfile {
  Usuario: string;
  Nombre: string;
  Apellido: string;
  Fecha: string;
  Tel: string;
  Email: string;
  Direccion: string;
  Localidad: string;
  Estado: string;
}
export interface RequestErrorMsg {
  title: string;
  text: string;
}
export interface UserLogin {
  user: string;
  password: string;
}
export interface LoginResponse {
  Q_Est: string;
  Error: string;
  idUsr: number;
  Rol: string;
  Profile: UserProfile;
  // Lista: ListaData;
}
