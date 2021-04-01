import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputComponent ],
      imports: [
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
          logOnly: environment.production,
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
