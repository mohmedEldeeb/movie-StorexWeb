import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/serves/api/api.service';

@Component({
  selector: 'app-add-categroy',
  templateUrl: './add-categroy.component.html',
  styleUrls: ['./add-categroy.component.css']
})
export class AddCategroyComponent implements OnInit {
  name:string=""
  allCategroy:any
  constructor(private api :ApiService ,private router :Router) { }
  submitForm(name:any){
    const formData = new FormData();
    formData.append("name", name);
    this.api.createCategroy(formData).subscribe({
      next:(res:any)=>{
        this.name=""
        this.getData()
      }
    })
  }

  toUpdate(id:number){
    this.router.navigateByUrl(`update-categroy/${id}`)
  }
  toDelete(data:any){
    const formData = new FormData();
    formData.append("_method", "delete");
    formData.append("name", data.name);
    this.api.deleteCategroyByID(data.id,formData).subscribe({
      next:(res:any)=>{
        this.getData()
      },
      error:(err)=>{
        alert(err)
      }
    })
  }
  getData(){
    this.api.getCategory().subscribe({
      next:(res:any)=>{
        this.allCategroy=res.message
        console.log(res)
      },
      error:(err)=>{
        this.router.navigateByUrl(`login`)      }
    })
  }
  ngOnInit(): void {
    this.getData()
  }
}
