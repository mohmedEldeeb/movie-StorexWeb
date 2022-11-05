import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ApiService }        from 'src/app/serves/api/api.service';
import { ToastService }      from 'src/app/serves/toast.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  data :any =false;
  allCategroy:any=false;

  constructor(private api:ApiService ,private router :Router,public toastService: ToastService) { }

  showSuccess() {
		this.toastService.show(' success  ', { classname: 'bg-success text-light', delay: 10000 });
	}
  showStandard() {
		this.toastService.show("errror", { classname: 'bg-danger text-light', delay: 15000 });
	}
  goToUpdate(id:any){
    this.router.navigateByUrl(`update-movie/${id}`)
  }

  deleteMovie(id:any){
    const formData = new FormData();
    formData.append("_method", "delete");
    this.api.updateMovieById(id,formData).subscribe({
      next:()=>{
        this.getMovie()
        this.showSuccess()
      },
      error:()=>{
        this.showStandard()
      }
    })
  }
  submitForm(data:any){
    if(data==null || data=="") return this.getMovie()
    
    this.api.getMovieByCategroy(data).subscribe({
      next:(res:any)=>{
        this.data=res.message
        this.showSuccess()
      }
    })
  }
  getAllCategroy(){
    this.api.getCategory().subscribe({
      next:(data:any)=>{
        this.allCategroy=data.message
      }
    })
  }

  getMovie():any{
    this.api.getMovie().subscribe({
      next:(res:any)=>{
        this.data=res.message
        return res.message
      },
      error:(err)=>{
        if(err.status == 401){
          this.router.navigate(['/login']); // go to login if not authenticated
        }
      }
     })
  }
  
  ngOnInit(): void {
   this.getMovie()
   this.getAllCategroy()
  }

}
