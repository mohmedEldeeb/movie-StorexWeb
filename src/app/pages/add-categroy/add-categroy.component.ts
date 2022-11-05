import { Component, OnInit  } from '@angular/core';
import { Router             } from '@angular/router';
import { ApiService         } from 'src/app/serves/api/api.service';
import { ToastService       } from 'src/app/serves/toast.service';

@Component({
  selector: 'app-add-categroy',
  templateUrl: './add-categroy.component.html',
  styleUrls: ['./add-categroy.component.css']
})
export class AddCategroyComponent implements OnInit {
  name:string=""
  allCategroy:any

  constructor(private api :ApiService ,private router :Router,public toastService: ToastService) { }

  showSuccess() {
		this.toastService.show(' success  ', { classname: 'bg-success text-light', delay: 10000 });
	}
  showStandard() {
		this.toastService.show("errror", { classname: 'bg-danger text-light', delay: 15000 });
	}
  submitForm(name:any){
    const formData = new FormData();
          formData.append("name", name);
    this.api.createCategroy(formData).subscribe({
      next:()=>{
        this.name=""
        this.getData()
        this.showSuccess()
      },
      error:()=>{
        this.showStandard()
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
      next:()=>{
        this.showSuccess()
      },
      error:()=>{
        this.showStandard()
      }
    })
  }

  getData(){
    this.api.getCategory().subscribe({
      next:(res:any)=>{
        this.allCategroy=res.message
      },
      error:()=>{
        this.router.navigateByUrl(`login`)      }
    })
  }

  ngOnInit(): void {
    this.getData()
  }
}
