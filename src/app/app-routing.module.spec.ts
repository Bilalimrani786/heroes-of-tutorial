import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;

  const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: '' },
    { path: 'detail/:id', component: '' },
    { path: 'heroes', component: '' }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    });

    router = TestBed.get(Router);
    location = TestBed.get(location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  describe('AppRoutingModule', () => {
    it('should render initial render', fakeAsync(() => {
      router.navigate(['/dashboard']);
      tick(50);
      expect(location.path()).toBe('/dashboard');
    }));
  });

});
