import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFaqModule} from '@angular-material-extensions/faq';

import {DisqusModule} from 'ngx-disqus';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    MatFaqModule.forRoot(),
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('ngx-material-faq'),
    HighlightModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    MatFaqModule,
    NgxMaterialPagesModule,
    DisqusModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
