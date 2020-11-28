import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html'
})
export class DynamicFormFieldsComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;
  objectProps;

  constructor() {}

  ngOnInit() {
  
    this.objectProps = 
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop} , this.dataObject[prop]);
        });

       

    // setup the form
    const formGroup = {};
    for(let prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '');
    }

    this.form = new FormGroup(formGroup);
  }

  onSubmit(form): void {
    console.log(form);
  }
}