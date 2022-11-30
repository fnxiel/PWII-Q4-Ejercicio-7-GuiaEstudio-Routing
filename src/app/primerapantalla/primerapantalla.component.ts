import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlumnos } from './IAlumnos';

@Component({
  selector: 'app-primerapantalla',
  templateUrl: './primerapantalla.component.html',
  styleUrls: ['./primerapantalla.component.scss']
})
export class PrimerapantallaComponent implements OnInit {
  titulo: string = ''

  alumnos: IAlumnos[] = [{
    id: 1,
    nombre: "GRISELDA YANETH NIETO SANCHEZ"
  },
  {
    id: 2,
    nombre: "ELVIS FERNANDO FLORES CARIAS"
  },
  {
    id: 3,
    nombre: "HELTON JOAN LOPEZ MARTINEZ"
  },
  {
    id: 4,
    nombre: "JOAQUIN HORACIO AGUILAR GALO"
  },
  {
    id: 5,
    nombre: "JOSUE EDUARDO FELLMANN CASTRO"
  },
  {
    id: 6,
    nombre: "MARCOS FLORENCIO ORDOÑEZ GODOY"
  },
  {
    id: 7,
    nombre: "NELSON OTTONIEL OSORIO MENJIVAR OTTONIEL"
  },
  {
    id: 8,
    nombre: "ROGER MENDOZA HUETE"
  }]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.titulo = params['titulo']
      this.alumnos = this.alumnos.filter(alumno => alumno.id == params['id'])
    })
    
  }

}
