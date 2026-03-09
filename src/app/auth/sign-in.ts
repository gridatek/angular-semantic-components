import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScInput,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sign-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    ScButton,
    ScCard,
    ScCardBody,
    ScCardDescription,
    ScCardFooter,
    ScCardHeader,
    ScCardTitle,
    ScInput,
    ScLabel,
  ],
  template: `
    <div class="flex min-h-screen items-center justify-center bg-background px-4">
      <div scCard class="w-full max-w-sm">
        <div scCardHeader class="text-center">
          <h1 scCardTitle class="text-2xl">Sign In</h1>
          <p scCardDescription>Enter your credentials to access your account</p>
        </div>

        <div scCardBody>
          <form (ngSubmit)="onSubmit()" class="space-y-4">
            <div class="space-y-2">
              <label scLabel for="email">Email</label>
              <input
                scInput
                id="email"
                type="email"
                placeholder="m@example.com"
                [(ngModel)]="email"
                name="email"
                required
                autocomplete="email"
              />
            </div>

            <div class="space-y-2">
              <label scLabel for="password">Password</label>
              <input
                scInput
                id="password"
                type="password"
                placeholder="Enter your password"
                [(ngModel)]="password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>

            <button scButton class="w-full" type="submit">Sign In</button>
          </form>
        </div>

        <div scCardFooter class="justify-center">
          <p class="text-sm text-muted-foreground">
            Don't have an account?
            <a routerLink="/sign-up" class="text-primary underline-offset-4 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class SignIn {
  readonly email = signal('');
  readonly password = signal('');

  onSubmit() {
    // placeholder for auth logic
  }
}
