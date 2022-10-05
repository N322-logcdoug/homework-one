import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { DetailsService } from '../services/details.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mods = [];
  constructor(private detailsService: DetailsService) {}

  ngOnInit() {
    this.mods = this.detailsService.mods;
  }

  @ViewChild(IonModal) modal: IonModal;

  //message = 'Add a new image to your card array';
  title: string;
  author: string;
  iconURL: string;
  short: string;
  info: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  //makes a new card with a new id
  confirm() {
    let newID = this.detailsService.mods.length;
    let newMod = {
      id: newID.toString(),
      modIcon: this.iconURL,
      modTitle: this.title,
      modAuthor: this.author,
      modShort: this.short,
      modInfo: this.info,
    };
    this.modal.dismiss(newMod, 'confirm');
  }

  //when the confirm button is pressed, it runs the add card function in the service sending the new card data
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.detailsService.addMod(ev.detail.data);
    }
  }
}
