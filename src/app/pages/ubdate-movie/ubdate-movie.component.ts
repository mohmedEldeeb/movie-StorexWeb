import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService }                       from 'src/app/serves/api/api.service';
import { ToastService }                     from 'src/app/serves/toast.service';

@Component({
  selector: 'app-ubdate-movie',
  templateUrl: './ubdate-movie.component.html',
  styleUrls: ['./ubdate-movie.component.css']
})
export class UbdateMovieComponent implements OnInit {

  id:string="";
  name:string="";
  description:string="";
  categroy:string="";
  image:string="";
  allCategroy:any="";
  oldImage:any="";
  newImage:any=false;
  imageGo:any=false;

  constructor(private router :Router,private route:ActivatedRoute,private api:ApiService ,public toastService: ToastService) { }

  showSuccess() {
		this.toastService.show(' success  ', { classname: 'bg-success text-light', delay: 10000 });
	}
  showStandard() {
		this.toastService.show("errror", { classname: 'bg-danger text-light', delay: 15000 });
	}

  addFile(e:any){
    let reader = new FileReader();
    if(e.target.files ) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newImage = reader.result; 
      };
    }
    this.imageGo=e.target.files[0]
  }
  
  submitForm(data:any){
    if(!data.categroy) return alert("pls select categroy")

    const formData = new FormData();
          formData.append("_method", "put");
          formData.append("category_id", data.categroy);
          formData.append("name", data.name);
          formData.append("description", data.description);
    if(this.newImage){
      formData.append("image", this.imageGo);
    }

    this.api.updateMovieById(Number(this.id),formData).subscribe({
      next:()=>{
        this.showSuccess()
        this.router.navigateByUrl('/movie')
      },
      error:()=>{
        this.showStandard()
      }
    })
  }
  getAllCategroy(){
    this.api.getCategory().subscribe({
      next:(res:any)=>{
        this.allCategroy=res.message
      },
      error:()=>{
        this.router.navigateByUrl('/login')
      }
    })
  }
  getMovieByIdClient(){
    this.api.getMovieById(this.id).subscribe({
      next:(res:any)=>{
        this.name=res.message.name
        this.description=res.message.description
        this.categroy=res.message.category_id
        this.oldImage=res.message.image
      },
      error:()=>{
        this.router.navigateByUrl('/login')
      }
    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id =  params.get('id')  || ""
    })
    this.getMovieByIdClient()
    this.getAllCategroy()
  }

}
