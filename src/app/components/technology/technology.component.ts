import { Component } from '@angular/core';
import { LogoTechnology } from '../../models/logo-technology';
import bootstrap from '../../../main.server';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

  tecnologias: Array<LogoTechnology>;
  IMAGEN_FOLDER: string = "assets/tecnologias/"
  constructor(){
    this.tecnologias = [
      {name:"Bootstrap",description:"Logo de Bootstrap",path:this.IMAGEN_FOLDER+"icon-bootstrap.svg"},
      {name:"Css",description:"Logo de Css", path:this.IMAGEN_FOLDER+"icon-css.svg"},
      {name:"Debian",description:"Logo de Debian",path:this.IMAGEN_FOLDER+"icon-debian.svg"},
      {name:"Excel",description:"Logo de Excel",path:this.IMAGEN_FOLDER+"icon-excel.svg"},
      {name:"Git",description:"Logo de Git",path:this.IMAGEN_FOLDER+"icon-git.svg"},
      {name:"Github",description:"Logo de Github",path:this.IMAGEN_FOLDER+"icon-github.svg"},
      {name:"Html",description:"Logo de Html",path:this.IMAGEN_FOLDER+"icon-html.svg"},
      {name:"Java",description:"Logo de Java",path:this.IMAGEN_FOLDER+"icon-java.svg"},
      {name:"JavasCript",description:"Logo de JavasCript",path:this.IMAGEN_FOLDER+"icon-js.svg"},
      {name:"MariaDB",description:"Logo de MariaDB",path:this.IMAGEN_FOLDER+"icon-mariadb.svg"},
      {name:"Mysql",description:"Logo de Mysql",path:this.IMAGEN_FOLDER+"icon-mysql.svg"},
      {name:"Nodejs",description:"Logo de nodejs",path:this.IMAGEN_FOLDER+"icon-nodejs.svg"},
      {name:"Spring Boot",description:"Logo de Spring Boot",path:this.IMAGEN_FOLDER+"icon-spring-boot.svg"},






    ];
  }


}
