import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [FormsModule, RouterModule.forRoot(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const myFixture = TestBed.createComponent(HeroesComponent);
    expect(myFixture).toMatchSnapshot();
  });
  it('should render my heroes title', () => {
    const fix = TestBed.createComponent(HeroesComponent);
    const elem = fix.debugElement.componentInstance;
    expect(elem.heroTitle).toEqual('My Heroes');
  });
});
