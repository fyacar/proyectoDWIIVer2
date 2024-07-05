export interface Reserva{
    id : number
    fecha_reserva : Date
    idusuario : number
    idproducto : number
    cantPerson : number
    cantDias: number
    subTotal: number
    fecha_registro: Date
    idestado : number
}