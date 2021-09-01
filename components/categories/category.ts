export enum CatHombre {
  billeteras = 'Billeteras',
  camibusos = 'Camibusos',
  correas = 'Correas',
  jeans = 'Jeans',
  lociones = 'Locionies',
  reloj = 'Reloj'
}

export enum CatMujer {
  accesorios = 'Accesorios',
  billeteras = 'Billeteras',
  blusas = 'Blusas',
  calzado = 'Calzado',
  camisetas = 'Camisetas',
  correas = 'Correas',
  jeans = 'Jeans',
  lociones = 'Lociones',
  pijamas = 'Pijamas',
  reloj = 'Reloj',
  ropaDeportiva = 'Ropa deportiva',
  splash = 'Splash'
}

export enum CatInfantil {
  lociones = 'Lociones',
  pijamas = 'Pijamas',
  reloj = 'Reloj'
}

interface Categoria{
  categoria?: CatHombre | CatMujer | CatInfantil;
}

export class Hombre implements Categoria{
  public categoria?: CatHombre;
}

export class Mujer implements Categoria{
  public categoria?: CatMujer;
}

export class Infantil implements Categoria{
  public categoria?: CatInfantil;
}

export const catHombre = Object(CatHombre)
export const catMujer = Object(CatMujer)
export const catInfantil = Object(CatInfantil)

export class Categorias {
  public catHombre:Object
  public catMujer:Object
  public catInfantil:object
  
  constructor(){
    this.catHombre = catHombre
    this.catMujer = catMujer
    this.catInfantil = catInfantil
  }
}