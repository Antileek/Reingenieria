import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [AccordionModule, MenubarModule, ButtonModule, TableModule],
})
export class PrimengModule {}
