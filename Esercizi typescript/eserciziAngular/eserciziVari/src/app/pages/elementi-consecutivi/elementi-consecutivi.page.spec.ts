import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElementiConsecutiviPage } from './elementi-consecutivi.page';

describe('ElementiConsecutiviPage', () => {
  let component: ElementiConsecutiviPage;
  let fixture: ComponentFixture<ElementiConsecutiviPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementiConsecutiviPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElementiConsecutiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
