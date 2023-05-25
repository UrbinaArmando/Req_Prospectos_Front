import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { prospectModel } from 'src/app/models/prospectModel';
import { ProspectsService } from 'src/app/prospects.service';

@Component({
  selector: 'app-prospects-form',
  templateUrl: './prospects-form.component.html',
  styleUrls: ['./prospects-form.component.css'],
})
export class ProspectsFormComponent implements OnInit {
  prospectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProspectsService,
    private router: Router
  ) {
    this.prospectForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName1: ['', Validators.required],
      lastName2: [''],
      street: ['', Validators.required],
      number: ['', Validators.required],
      colonia: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      rfc: ['', Validators.required],
    });
  }

  ngOnInit() {}

  handleSubmit = () => {
    console.log(this.prospectForm);
    let req = new prospectModel(
      this.prospectForm.get('name')?.value,
      this.prospectForm.get('lastName1')?.value,
      this.prospectForm.get('street')?.value,
      this.prospectForm.get('number')?.value,
      this.prospectForm.get('colonia')?.value,
      this.prospectForm.get('postalCode')?.value,
      this.prospectForm.get('phone')?.value,
      this.prospectForm.get('rfc')?.value,
      'Enviado'
    );
    req.lastName2 = this.prospectForm.get('lastName2')?.value;
    req.comments = '';
    this.service.newProspect(req).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/list']);
      },
      error: (err) => console.log(err),
    });
  };

  handleExit = () => {
    this.router.navigate(['/list']);
  };
}
