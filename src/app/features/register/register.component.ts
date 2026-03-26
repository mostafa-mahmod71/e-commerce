import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
private readonly fb =inject(FormBuilder);

registerForm:FormGroup = this.fb.group({
  name:["", [Validators.required , Validators.minLength(3)]],
  email:["", [Validators.required , Validators.email]],
  password:["", [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  rePassword:["", [Validators.required ]],
  phone:["", [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
},
{validators:[this.confirmPass]})

confirmPass(group:AbstractControl){
let pass = group.get('password')?.value ;
let repass = group.get('rePassword')?.value;
if(pass !== repass  && repass !== ''){
  group.get('rePassword')?.setErrors({mismach:true})
  return {mismach:true}
}
return null;
}


registerSubmit():void{
  if(this.registerForm.valid){
    console.log(this.registerForm.value)
  }else{
    this.registerForm.markAllAsTouched();
  }

}
}

