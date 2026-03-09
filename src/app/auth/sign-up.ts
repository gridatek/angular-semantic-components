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
  selector: 'app-sign-up',
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
          <h1 scCardTitle class="text-2xl">Create an Account</h1>
          <p scCardDescription>Enter your details to get started</p>
        </div>

        <div scCardBody>
          <form (ngSubmit)="onSubmit()" class="space-y-4">
            <div class="space-y-2">
              <label scLabel for="name">Name</label>
              <input
                scInput
                id="name"
                type="text"
                placeholder="John Doe"
                [(ngModel)]="name"
                name="name"
                required
                autocomplete="name"
              />
            </div>

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
                placeholder="Create a password"
                [(ngModel)]="password"
                name="password"
                required
                autocomplete="new-password"
              />
            </div>

            <button scButton class="w-full" type="submit">Sign Up</button>
          </form>
        </div>

        <div scCardFooter class="justify-center">
          <p class="text-sm text-muted-foreground">
            Already have an account?
            <a routerLink="/sign-in" class="text-primary underline-offset-4 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class SignUp {
  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');

  onSubmit() {
    // placeholder for auth logic
  }
}
