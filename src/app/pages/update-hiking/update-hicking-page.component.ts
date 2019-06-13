import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-hicking-page.component.html',
  styleUrls: ['./update-hicking-page.component.scss'],
})
export class UpdateHickingPage implements OnInit {

  item: any;
  editHikingForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(data.id)[0];
        // if item is undefined, go back to home
        if (!this.item) {
          this.goBack();
        } else {
          this.editHikingForm = this.formBuilder.group({
            title: new FormControl(this.item.title, Validators.required),
            address: new FormControl(this.item.address, Validators.required),
            time: new FormControl(this.item.time, Validators.required),
            description: new FormControl(this.item.description, Validators.required)
          });
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  updateItem(value) {
    const updateHiking = {
      id: this.item.id,
      title: value.title,
      address: value.address,
      time: value.time,
      description: value.description
    };
    this.itemService.updateItem(updateHiking);
    this.goBack();
  }

}
