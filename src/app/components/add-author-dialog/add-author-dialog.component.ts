import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-author-dialog',
  templateUrl: './add-author-dialog.component.html',
  styleUrls: ['./add-author-dialog.component.scss']
})
export class AddAuthorDialogComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  authorsCount: number = 0;
  authorForm: FormArray = new FormArray([]);

  constructor(private dialogRef: MatDialogRef<AddAuthorDialogComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({ cancel: true });
  }

  nextStep() {
    const stepIndex = this.stepper.selectedIndex;

    switch (stepIndex) {
      case 0:
          for (let index = 0; index < this.authorsCount; index++) {
            this.authorForm.push(new FormControl(''));
          }

          this.stepper.next();
        break;
      case 1:
          this.stepper.next();
        break;
      case 2:
          const formValue = this.authorForm.value as { [key: string]: string };
          const authors = Object.values(formValue).map((value) => ({ name: value}));

          this.dialogRef.close(authors);
        break;
      default:
          this.stepper.next();
        break;
    }
  }
}
