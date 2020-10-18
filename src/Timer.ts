
export const timer = (timestamp:number) => {

    let date = new Date(timestamp*1)

    let semana:any = date.getDay()
    if (semana === 0) {
      semana = "Domingo"
    } else if (semana === 1) {
      semana = "Lunes"
    } else if (semana === 2) {
      semana = "Martes"
    } else if (semana === 3) {
      semana = "Miércoles"
    } else if (semana === 4) {
      semana = "Jueves"
    } else if (semana === 5) {
      semana = "Viernes"
    } else {
      semana = "Sábado"
    }

    let mes:any = date.getMonth()
    if (mes === 0) {
      mes = "enero"
    } else if (mes === 1) {
      mes = "febrero"
    } else if (mes === 2) {
      mes = "marzo"
    } else if (mes === 3) {
      mes = "abril"
    } else if (mes === 4) {
      mes = "mayo"
    } else if (mes === 5) {
      mes = "junio"
    } else if (mes === 6) {
      mes = "julio"
    } else if (mes === 7) {
      mes = "agosto"
    } else if (mes === 8) {
      mes = "septiembre"
    } else if (mes === 9) {
      mes = "octubre"
    } else if (mes === 10) {
      mes = "noviembre"
    } else {
      mes = "diciembre"
    }

    let dia = date.getDate()
    let anyo = date.getFullYear()
    let hora = date.getHours()
    let minuto = date.getMinutes()

    return (semana + " " + dia + " de " + mes + " de " + anyo + ", " + hora + ":" + minuto + " hs")
}