import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAvatar,
  ScAvatarFallback,
  ScAvatarImage,
  ScButton,
  ScInput,
  ScMenu,
  ScMenuContent,
  ScMenuItem,
  ScMenuPortal,
  ScMenuProvider,
  ScMenuSeparator,
  ScMenuTrigger,
} from '@semantic-components/ui';
import { SiSearchIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-dashboard-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScButton,
    ScInput,
    ScAvatar,
    ScAvatarFallback,
    ScAvatarImage,
    ScMenu,
    ScMenuContent,
    ScMenuItem,
    ScMenuPortal,
    ScMenuProvider,
    ScMenuSeparator,
    ScMenuTrigger,
    SiSearchIcon,
  ],
  template: `
    <div class="border-b">
      <div class="flex h-16 items-center px-4 md:px-8">
        <nav class="flex items-center gap-4 lg:gap-6" aria-label="Main navigation">
          <a href="#" class="text-sm font-medium transition-colors hover:text-primary">
            Overview
          </a>
          <a href="#" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Customers
          </a>
          <a href="#" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Products
          </a>
          <a href="#" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Settings
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-4">
          <div class="relative">
            <svg
              siSearchIcon
              class="absolute left-2.5 top-2.5 size-4 text-muted-foreground"
              aria-hidden="true"
            ></svg>
            <input
              scInput
              type="search"
              placeholder="Search..."
              aria-label="Search"
              class="w-48 pl-8 lg:w-64"
            />
          </div>

          <div scMenuProvider>
            <button scButton variant="ghost" size="icon" scMenuTrigger aria-label="User menu">
              <span scAvatar size="sm">
                <img scAvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=SC" alt="User avatar" />
                <span scAvatarFallback>SC</span>
              </span>
            </button>

            <ng-template scMenuPortal>
              <div scMenu>
                <ng-template scMenuContent>
                  <div class="px-2 py-1.5">
                    <p class="text-sm font-medium">shadcn</p>
                    <p class="text-xs text-muted-foreground">m&#64;example.com</p>
                  </div>
                  <div scMenuSeparator></div>
                  <button scMenuItem value="profile">Profile</button>
                  <button scMenuItem value="settings">Settings</button>
                  <div scMenuSeparator></div>
                  <button scMenuItem value="logout">Log out</button>
                </ng-template>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardHeader {}
