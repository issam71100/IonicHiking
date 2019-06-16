import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './create-hiking-page.component.html',
  styleUrls: ['./create-hiking-page.component.scss'],
})
export class CreateHikingPage implements OnInit {

  newHikingForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.newHikingForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      address: new FormControl(''),
      time: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  createItem(value) {
    this.itemService.createItem(value.title, value.address, value.time, value.description);
    this.newHikingForm.reset();
    this.goBack();
  }

}
