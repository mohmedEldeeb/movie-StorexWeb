import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService }                       from 'src/app/serves/api/api.service';

@Component({
  selector: 'app-update-categroy',
  templateUrl: './update-categroy.component.html',
  styleUrls: ['./update-categroy.component.css']
})
export class UpdateCategroyComponent implements OnInit {
  id:any 
  name:string=""

  constructor(private route: ActivatedRoute ,private api:ApiService,private router :Router ) { }

  submitForm(date:any){

    const formData = new FormData();
          formData.append("_method", "put");
          formData.append("name", date.name);

    this.api.updateCategroyByID(this.id,formData).subscribe({
      next:()=>{
        this.router.navigateByUrl('/categroy')
      },
      error:(err)=>{
       alert(err)
      }
    })
  }
  
  getCatehroy(){
    this.api.getCategoryById(this.id).subscribe({
      next:(res:any)=>{
        this.name=res.message.name
      },
      error:()=>{
        this.router.navigateByUrl('/login')
      }
    })
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id =  params.get('id')
    })

    this.getCatehroy()
  }

}
