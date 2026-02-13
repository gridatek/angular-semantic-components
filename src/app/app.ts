import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScButton],
  template: `
    <h1>Hello, {{ title() }}</h1>

    <button sc-button>Default</button>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('angular-semantic-components');
}
