import { Component } from '@angular/core';

import { AllPage } from '../all/all';
import { ActivePage } from '../active/active';
import { CompletedPage } from '../completed/completed';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = AllPage;
  tab2Root = ActivePage;
  tab3Root = CompletedPage;

  constructor() {

  }
}
