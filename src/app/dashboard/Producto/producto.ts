export interface Producto{
    id : number;
    nombres: string;
    descripcion: string;
    idEmpresa: number;
    estrellas: number;
    likes: number;
    preciobase: number;
    precioincremento: number;
    stock : number;
    isActivo : boolean;
}