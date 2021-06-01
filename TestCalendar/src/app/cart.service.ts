import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [
    {title: "ferias", startdate: "2021-05-12", enddate: "2021-05-12", starttime: "19:20", endtime: "19:40", reminder: "none", repetition: "7", notes: "", type:""}
  ];

  groups: any = [
    {cadeira: "IHC", grupo: "TP1", filter:false, selected: false},
    {cadeira: "IHC", grupo: "P1", filter:false, selected: false},
    {cadeira: "IHC", grupo: "P2", filter:false, selected: false},
    {cadeira: "IHC", grupo: "P3", filter:false, selected: false},
    {cadeira: "BD", grupo: "TP1", filter:false, selected: false},
    {cadeira: "BD", grupo: "P1", filter:false, selected: false},
    {cadeira: "BD", grupo: "P2", filter:false, selected: false},
    {cadeira: "BD", grupo: "P3", filter:false, selected: false},
    {cadeira: "PDS", grupo: "TP1", filter:false, selected: false},
    {cadeira: "PDS", grupo: "P1", filter:false, selected: false},
    {cadeira: "PDS", grupo: "P2", filter:false, selected: false},
    {cadeira: "PDS", grupo: "P3", filter:false, selected: false},
  ]

  people_groups: any = [
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "IHC", grupo: "TP1", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "IHC", grupo: "TP1", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "IHC", grupo: "TP1", selected: false},
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "IHC", grupo: "P3", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "IHC", grupo: "P3", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "IHC", grupo: "P3", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "IHC", grupo: "P2", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "IHC", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "IHC", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "IHC", grupo: "P1", selected: false},
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "BD", grupo: "TP1", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "BD", grupo: "TP1", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "BD", grupo: "TP1", selected: false},
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "BD", grupo: "P3", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "BD", grupo: "P3", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "BD", grupo: "P3", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "BD", grupo: "P2", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "BD", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "BD", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "BD", grupo: "P1", selected: false},
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "PDS", grupo: "TP1", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "PDS", grupo: "TP1", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "PDS", grupo: "TP1", selected: false},
    {name: "Filipe Gonçalves", nmec: "98083", cadeira: "PDS", grupo: "P3", selected: false},
    {name: "Eva Bartolomeu", nmec: "98513", cadeira: "PDS", grupo: "P3", selected: false},
    {name: "Pedro Sobral", nmec: "92491", cadeira: "PDS", grupo: "P3", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "PDS", grupo: "P2", selected: false},
    {name: "Rodrigo Silva", nmec: "98080", cadeira: "PDS", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "PDS", grupo: "TP1", selected: false},
    {name: "Tomas Oliveira", nmec:"97890", cadeira: "PDS", grupo: "P1", selected: false}
  ]

  eventos_groups: any = []

  subgroups: any = [
  ]

  people_subgroups: any = [
  ]

  pessoas: any = [
    {name: "filipe", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "eva", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "pedro", cadeira: "IHC", turma: "P3", grupo: "G2", selected: false},
    {name: "rodrigo", cadeira: "IHC", turma: "P3", grupo: "G5", selected: false},
    {name: "tomas", cadeira: "IHC", turma: "P1", grupo: "G1", selected: false},
  ];
  cadeiras: any = [
    {cadeira: "IHC", turma: "P1", grupo: "G1", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G2", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G3", selected: false},
    {cadeira: "IHC", turma: "P1", grupo: "G4", selected: false},
    {cadeira: "PDS", turma: "P2", grupo: "G1", selected: false},
    {cadeira: "IHC", turma: "P2", grupo: "G2", selected: false},
    {cadeira: "BD", turma: "P2", grupo: "G3", selected: false},
    {cadeira: "IHC", turma: "P2", grupo: "G4", selected: false},
  ];

  usersList: any = [
    { email: "teacher@ua.pt", password: "12345" },
    { email: "student@ua.pt", password: "12345" },
  ];

  data: string = "";
  course: string = "";
  public filter: boolean = false;
  public groupFilter: any;

  type: string="";
  next_type: boolean = false;
  nextEventsetType(type: string) {
    this.type = type;
    this.next_type = true;
  }

  addToCart(product: any) {
    if(this.next_type)
      product.type = this.type
    this.items.push(product);
    alert(product.type)
  }

  addToCartInGroup(product: any) {
    if(this.next_type)
      product.type = this.type
    product.cadeira = this.groupFilter.cadeira;
    product.grupo = this.groupFilter.grupo;
    this.eventos_groups.push(product)
    this.items.push(product);
    alert(product.type)
  }

  checkLogin(request: any) {
    //!neste momento o request está fazio ainda, ver melhor isto
    //! btw os alertas são só para ver isto a funcionar
    for (let index = 0; index < this.usersList.length; index++) {
      const element = this.usersList[index];
      alert(element.email)
      if (element.email == request.email) {
        if (element.password == request.password) {
          alert("A IR PARA A PÁGINA CERTA")
        } else {
          alert("Wrong Password")
        }
      } else {
        alert("User not registered")
      }
    }
  }

  registerUser(request: any) {
    let flag: string = "false";
    if (this.next_type ) {
      request.type = this.type;
      for (let index = 0; index < this.usersList.length; index++) {
        const element = this.usersList[index];
        if (element == request) {
          alert("USER ALREADY EXISTS")
          flag = "true"
          break;
        }
      }
      if (flag == "true") {
        this.usersList.push(request);
      }
    }
  }

  getItems() {
    return this.items;
  }

  getAlunos() {
    return this.pessoas;
  }

  getGrupos() {
    return this.cadeiras;
  }

  getGroups() {
    return this.groups;
  }

  getPeople_groups() {
    return this.people_groups;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  setData(date: string) {
    this.data = date;
  }

  getData() {
    return this.data;
  }

  setCourse(course: string) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }

  addGroup(array: any, nameGroup: string) {
    let tmp: any = array[0];
    this.groups.push({cadeira: tmp.cadeira, grupo: nameGroup, filter:false, selected: false});
    for (let item of array){
      this.people_groups.push(item);
    } 
  }

  setFilterTrue(value: boolean, cadeira:string, grupo:string) {
    this.filter=value;
    for (let index = 0; index < this.groups.length; index++) {
      const item = this.groups[index];
      if (item.grupo == grupo && item.cadeira == cadeira) {
        this.groups[index].filter = true;
        this.groupFilter = item;
      }
      else{
        this.groups[index].filter = false;
      } 
    }
  }

  setFilterFalse(value: boolean) {
    this.filter=value;
  }
}
