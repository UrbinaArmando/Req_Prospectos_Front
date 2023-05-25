import { Component, OnInit } from '@angular/core';
import { prospectModel } from 'src/app/models/prospectModel';
import { ProspectsService } from 'src/app/prospects.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prospects-list',
  templateUrl: './prospects-list.component.html',
  styleUrls: ['./prospects-list.component.css'],
})
export class ProspectsListComponent implements OnInit {
  prospectsList: prospectModel[] = [];
  currentIndex: number = 0;
  modalHeader: string = '';
  updateStatusForm: FormGroup;
  constructor(
    private service: ProspectsService,
    private formBuilder: FormBuilder
  ) {
    this.updateStatusForm = this.formBuilder.group({
      status: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getProspects();
  }

  getProspects = () => {
    this.service.getProspects().subscribe({
      next: (data) => {
        console.log(data);
        this.prospectsList = data;
      },
    });
  };
  setIndex = (n: any, modalText: any) => {
    this.currentIndex = parseInt(n);
    this.modalHeader = modalText;
  };

  currentRecord = (): prospectModel => {
    let prospect: prospectModel | undefined = this.prospectsList.find(
      (x) => x.id == this.currentIndex
    );
    return (
      prospect ??
      new prospectModel(
        'Nombre',
        'Apellido 1',
        'Calle',
        'Número',
        'Colonia',
        'Código Postal',
        'Teléfono',
        'RFC',
        'Estatus'
      )
    );
  };

  handleSubmit = () => {
    console.log(this.updateStatusForm);
    let req = {
      id: this.currentIndex,
      status: this.updateStatusForm.get('status')?.value,
      comments: this.updateStatusForm.get('comments')?.value,
    };
    this.service.updateProspect(req).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
    });
  };
}
