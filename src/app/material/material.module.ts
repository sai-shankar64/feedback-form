import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridList, MatGridTile, MatGridListModule,
        MatSlideToggleModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,
            MatSlideToggleModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,
            MatSlideToggleModule, MatCardModule],
  declarations: []
})
export class MaterialModule { }
