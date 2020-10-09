import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
alert:boolean =false;
editRestaurant =new FormGroup({
  name: new FormControl(''),
  Restaurants: new FormControl(''),
  address: new FormControl(''),
  mobile: new FormControl('')

})
  constructor(private resto:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
 console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
     
     this.editRestaurant =new FormGroup({
       name: new FormControl(result['name']),
       Restaurants: new FormControl(result['Restaurants']),

       address: new FormControl(result['address']),
       mobile: new FormControl(result['mobile'])


       })
      })
     
  }

 
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result)=>{
      console.log(result,"data updated succesful")
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert =false;
  }
}
