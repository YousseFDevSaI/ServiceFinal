import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage';

  apiUrl: any = 'http://localhost:3000/';
  allProducts: any = []
  view: any
  stands: any
  chairs: any
  desks: any
  comods: any
  showEdit: boolean = false;
  showDeleteConfirmation: boolean = false;
  editedItem: any = {};
  addedItem: any = {};
  beingEditiedId: any
  beingEditiedView: any
  beingDeletedId: any
  beingDeletedView: any
  dataToSend: any = {}
  showAdd: any

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setView('all')
    this.getAll()
  }

  getAll(): void {
    this.allProducts = [];
    this.http.get(this.apiUrl + 'desks').subscribe(
      (data) => {
        this.desks = data;
        this.desks.forEach((item: any) => {
          this.allProducts.push(item);
        });

        this.http.get(this.apiUrl + 'stands').subscribe(
          (data) => {
            this.stands = data;
            this.stands.forEach((item: any) => {
              this.allProducts.push(item);
            });
            this.http.get(this.apiUrl + 'comods').subscribe(
              (data) => {
                this.comods = data;
                this.comods.forEach((item: any) => {
                  this.allProducts.push(item);
                });
                this.http.get(this.apiUrl + 'chairs').subscribe((data) => {
                  this.chairs = data;
                  this.chairs.forEach((item: any) => {
                    this.allProducts.push(item);
                  });
                  console.log(this.allProducts)
                });
              });
          });
      });
  }

  setView(view:string): void{
    this.view = view;
  }

  showEditForm(id: string, view: string) {
    this.showEdit = true;
    this.beingEditiedId = id
    this.beingEditiedView = view
    console.log(id, view)

  }

  cancelEditForm() {
    this.showEdit = false;
    this.beingEditiedId = ''
    this.beingEditiedView = ''
  }

  submitEditForm() {

    console.log('Edited item:', this.editedItem);


    if (this.editedItem.name != ''){this.dataToSend['name'] = this.editedItem.name}
    if (this.editedItem.price != ''){let stringValue: string = this.editedItem.price; let intValue: number = +stringValue; this.dataToSend['price'] = intValue}
    if (this.editedItem.material != ''){this.dataToSend['material'] = this.editedItem.material}
    if (this.editedItem.photo != ''){this.dataToSend['photo'] = this.editedItem.photo}

    this.http.put(this.apiUrl + this.beingEditiedView + '/' + this.beingEditiedId, this.dataToSend).subscribe((response) => {
      this.getAll()
      this.showEdit = false;
      this.editedItem = {}
      this.beingEditiedId = ''
      this.beingEditiedView = ''
      this.dataToSend = {}
    });



  }

  askDeleteConfirmation(id: string, view: string) {
    this.showDeleteConfirmation = true;
    this.beingDeletedId = id
    this.beingDeletedView = view
  }

  confirmDelete() {
    console.log('Item Deleted')

    this.http.delete(this.apiUrl + this.beingDeletedView + '/' + this.beingDeletedId).subscribe((response) =>{
      this.getAll()
      this.showDeleteConfirmation = false;
      this.beingDeletedId = ''
      this.beingDeletedView = ''
    })


  }

  cancelDelete() {
    this.showDeleteConfirmation = false;
    this.beingDeletedId = ''
    this.beingDeletedView = ''
  }

  submitAddForm():void {
    if (this.addedItem.view == '' || this.addedItem.name == '' || this.addedItem.price == '' || this.addedItem.material == '' || this.addedItem.photo == ''){
      alert('Please fill all the fields')
    }else{
      let stringValue: string = this.addedItem.price; let intValue: number = +stringValue; this.dataToSend['price'] = intValue;
      this.dataToSend['material'] = this.addedItem.material
      this.dataToSend['photo'] = this.addedItem.photo
      this.dataToSend['name'] = this.addedItem.name
      this.http.post(this.apiUrl + this.addedItem.view, this.dataToSend).subscribe((response) => {
        this.showAdd = false
        this.getAll()
      })
    }
  }

  cancelAddForm():void {
    this.showAdd = false;
  }
}
