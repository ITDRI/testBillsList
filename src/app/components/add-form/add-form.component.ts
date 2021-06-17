import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Bill} from './../../shared/interfaces';
import {DataService} from './../../shared/data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup

  constructor (
    private router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      billNumber: new FormControl('', Validators.required),
      billTotal: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ]),
      paymentMethod: new FormControl('', Validators.required),

    })
  }

  submit(): void {
    if (this.addForm.invalid) {
      return
    }
    const bill: Bill = {
      created: Date.now(),
      updated: Date.now(),
      billNumber: this.addForm.value.billNumber,
      status: 'new',
      billTotal: +this.addForm.value.billTotal,
      paymentMethod: this.addForm.value.paymentMethod
    }
    this.dataservice.create(bill)
    this.router.navigate(['/'])
  }


  get _billNumber() {
    return this.addForm.get('billNumber')
  }
  get _billTotal() {
    return this.addForm.get('billTotal')
  }
  get _paymentMethod() {
    return this.addForm.get('paymentMethod')
  }
}
