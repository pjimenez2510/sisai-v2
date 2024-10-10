import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding d-flex">
      <a [routerLink]="['/']" class="d-flex" >
        <img
          src="assets/images/logos/logo-eeasa.png"
          class="align-middle m-2 "
          width="190"
          height="auto"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
