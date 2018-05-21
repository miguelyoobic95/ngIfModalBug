import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [ExampleModalComponent],
  entryComponents: [ExampleModalComponent],
})
export class ComponentsModule {}
