import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ScRadio,
  ScRadioField,
  ScRadioGroup,
  ScSeparator,
  ScSwitch,
  ScSwitchField,
  ScSwitchVisual,
  ScTab,
  ScTabContent,
  ScTabList,
  ScTabPanel,
  ScTabs,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ScButton,
    ScCard,
    ScCardBody,
    ScCardDescription,
    ScCardFooter,
    ScCardHeader,
    ScCardTitle,
    ScInput,
    ScLabel,
    ScRadio,
    ScRadioField,
    ScRadioGroup,
    ScSeparator,
    ScSwitch,
    ScSwitchField,
    ScSwitchVisual,
    ScTab,
    ScTabContent,
    ScTabList,
    ScTabPanel,
    ScTabs,
    ScTextarea,
  ],
  template: `
    <div class="mx-auto max-w-3xl space-y-6 p-4 md:p-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight">Settings</h2>
        <p class="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div scSeparator></div>

      <div scTabs>
        <div scTabList>
          <button scTab value="account">Account</button>
          <button scTab value="appearance">Appearance</button>
          <button scTab value="notifications">Notifications</button>
        </div>

        <!-- Account Tab -->
        <div scTabPanel value="account">
          <ng-template scTabContent>
            <div class="space-y-6 pt-6">
              <div scCard>
                <div scCardHeader>
                  <h3 scCardTitle>Profile</h3>
                  <p scCardDescription>Update your personal information.</p>
                </div>
                <div scCardBody class="space-y-4">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                      <label scLabel for="first-name">First name</label>
                      <input
                        scInput
                        id="first-name"
                        type="text"
                        placeholder="John"
                        [(ngModel)]="firstName"
                        name="firstName"
                        autocomplete="given-name"
                      />
                    </div>
                    <div class="space-y-2">
                      <label scLabel for="last-name">Last name</label>
                      <input
                        scInput
                        id="last-name"
                        type="text"
                        placeholder="Doe"
                        [(ngModel)]="lastName"
                        name="lastName"
                        autocomplete="family-name"
                      />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label scLabel for="email">Email</label>
                    <input
                      scInput
                      id="email"
                      type="email"
                      placeholder="john&#64;example.com"
                      [(ngModel)]="email"
                      name="email"
                      autocomplete="email"
                    />
                  </div>
                  <div class="space-y-2">
                    <label scLabel for="bio">Bio</label>
                    <textarea
                      scTextarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      [(ngModel)]="bio"
                      name="bio"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div scCardFooter>
                  <button scButton>Save changes</button>
                </div>
              </div>
            </div>
          </ng-template>
        </div>

        <!-- Appearance Tab -->
        <div scTabPanel value="appearance">
          <ng-template scTabContent>
            <div class="space-y-6 pt-6">
              <div scCard>
                <div scCardHeader>
                  <h3 scCardTitle>Theme</h3>
                  <p scCardDescription>Choose your preferred theme.</p>
                </div>
                <div scCardBody>
                  <div scRadioGroup class="space-y-3">
                    <label scRadioField class="flex items-center gap-3">
                      <input
                        type="radio"
                        scRadio
                        name="theme"
                        value="light"
                        [(ngModel)]="theme"
                      />
                      <div>
                        <p class="text-sm font-medium">Light</p>
                        <p class="text-sm text-muted-foreground">A clean, bright look.</p>
                      </div>
                    </label>
                    <label scRadioField class="flex items-center gap-3">
                      <input
                        type="radio"
                        scRadio
                        name="theme"
                        value="dark"
                        [(ngModel)]="theme"
                      />
                      <div>
                        <p class="text-sm font-medium">Dark</p>
                        <p class="text-sm text-muted-foreground">Easy on the eyes.</p>
                      </div>
                    </label>
                    <label scRadioField class="flex items-center gap-3">
                      <input
                        type="radio"
                        scRadio
                        name="theme"
                        value="system"
                        [(ngModel)]="theme"
                      />
                      <div>
                        <p class="text-sm font-medium">System</p>
                        <p class="text-sm text-muted-foreground">Matches your OS setting.</p>
                      </div>
                    </label>
                  </div>
                </div>
                <div scCardFooter>
                  <button scButton>Save preference</button>
                </div>
              </div>

              <div scCard>
                <div scCardHeader>
                  <h3 scCardTitle>Font Size</h3>
                  <p scCardDescription>Select the base font size for the interface.</p>
                </div>
                <div scCardBody>
                  <div scRadioGroup orientation="horizontal" class="flex gap-4">
                    <label scRadioField class="flex items-center gap-2">
                      <input
                        type="radio"
                        scRadio
                        name="fontSize"
                        value="sm"
                        [(ngModel)]="fontSize"
                      />
                      <span class="text-sm">Small</span>
                    </label>
                    <label scRadioField class="flex items-center gap-2">
                      <input
                        type="radio"
                        scRadio
                        name="fontSize"
                        value="md"
                        [(ngModel)]="fontSize"
                      />
                      <span class="text-sm">Medium</span>
                    </label>
                    <label scRadioField class="flex items-center gap-2">
                      <input
                        type="radio"
                        scRadio
                        name="fontSize"
                        value="lg"
                        [(ngModel)]="fontSize"
                      />
                      <span class="text-sm">Large</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </ng-template>
        </div>

        <!-- Notifications Tab -->
        <div scTabPanel value="notifications">
          <ng-template scTabContent>
            <div class="space-y-6 pt-6">
              <div scCard>
                <div scCardHeader>
                  <h3 scCardTitle>Email Notifications</h3>
                  <p scCardDescription>Configure which emails you receive.</p>
                </div>
                <div scCardBody class="space-y-4">
                  <label scSwitchField class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">Marketing emails</p>
                      <p class="text-sm text-muted-foreground">
                        Receive product updates and promotions.
                      </p>
                    </div>
                    <span scSwitchVisual>
                      <input
                        type="checkbox"
                        scSwitch
                        [(checked)]="marketingEmails"
                      />
                    </span>
                  </label>
                  <div scSeparator></div>
                  <label scSwitchField class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">Security alerts</p>
                      <p class="text-sm text-muted-foreground">
                        Get notified about suspicious activity.
                      </p>
                    </div>
                    <span scSwitchVisual>
                      <input
                        type="checkbox"
                        scSwitch
                        [(checked)]="securityAlerts"
                      />
                    </span>
                  </label>
                  <div scSeparator></div>
                  <label scSwitchField class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">Weekly digest</p>
                      <p class="text-sm text-muted-foreground">
                        A weekly summary of your activity.
                      </p>
                    </div>
                    <span scSwitchVisual>
                      <input
                        type="checkbox"
                        scSwitch
                        [(checked)]="weeklyDigest"
                      />
                    </span>
                  </label>
                  <div scSeparator></div>
                  <label scSwitchField class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">Comment replies</p>
                      <p class="text-sm text-muted-foreground">
                        Get notified when someone replies to your comments.
                      </p>
                    </div>
                    <span scSwitchVisual>
                      <input
                        type="checkbox"
                        scSwitch
                        [(checked)]="commentReplies"
                      />
                    </span>
                  </label>
                </div>
                <div scCardFooter>
                  <button scButton>Save notifications</button>
                </div>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class Settings {
  readonly firstName = signal('John');
  readonly lastName = signal('Doe');
  readonly email = signal('john@example.com');
  readonly bio = signal('');
  readonly theme = signal('system');
  readonly fontSize = signal('md');
  readonly marketingEmails = signal(false);
  readonly securityAlerts = signal(true);
  readonly weeklyDigest = signal(true);
  readonly commentReplies = signal(false);
}
