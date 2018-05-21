import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'ion-page' }
})
export class ExampleModalComponent {


  isShown: boolean;
  constructor(private modalCtrl: ModalController) {
    this.isShown = true;
  }

  closeModal() {
      this.modalCtrl.dismiss();
  }
}

