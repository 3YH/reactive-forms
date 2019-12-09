import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.sass"]
})
export class ProfileEditorComponent {
  countries = ["", "USA", "Germany", "Italy", "France"];
  contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    // ...
  }

  get mobile() {
    return this.contactForm.get("mobile");
  }

  constructor() {
    this.contactForm = this.createFormGroup();
  }
}
