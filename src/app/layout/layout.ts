import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  ScSidebar,
  ScSidebarBody,
  ScSidebarFooter,
  ScSidebarGroup,
  ScSidebarGroupContent,
  ScSidebarGroupLabel,
  ScSidebarHeader,
  ScSidebarInset,
  ScSidebarMenu,
  ScSidebarMenuButton,
  ScSidebarMenuItem,
  ScSidebarProvider,
  ScSidebarRail,
} from '@semantic-components/ui';
import {
  SiBellIcon,
  SiComponentIcon,
  SiHouseIcon,
  SiSettingsIcon,
  SiUsersIcon,
} from '@semantic-icons/lucide-icons';

import { DashboardHeader } from '../dashboard/dashboard-header';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DashboardHeader,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ScSidebar,
    ScSidebarBody,
    ScSidebarFooter,
    ScSidebarGroup,
    ScSidebarGroupContent,
    ScSidebarGroupLabel,
    ScSidebarHeader,
    ScSidebarInset,
    ScSidebarMenu,
    ScSidebarMenuButton,
    ScSidebarMenuItem,
    ScSidebarProvider,
    ScSidebarRail,
    SiBellIcon,
    SiComponentIcon,
    SiHouseIcon,
    SiSettingsIcon,
    SiUsersIcon,
  ],
  template: `
    <div scSidebarProvider class="flex min-h-screen">
      <div scSidebar>
        <div scSidebarHeader>
          <a routerLink="/" class="flex items-center gap-2 px-2 py-1.5 text-lg font-semibold">
            Acme Inc.
          </a>
        </div>

        <div scSidebarBody>
          <div scSidebarGroup>
            <div scSidebarGroupLabel>Navigation</div>
            <div scSidebarGroupContent>
              <ul scSidebarMenu>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton routerLink="/" routerLinkActive="font-medium" [routerLinkActiveOptions]="{ exact: true }">
                    <svg siHouseIcon class="size-4" aria-hidden="true"></svg>
                    <span>Overview</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton routerLink="/users" routerLinkActive="font-medium">
                    <svg siUsersIcon class="size-4" aria-hidden="true"></svg>
                    <span>Users</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton routerLink="/notifications" routerLinkActive="font-medium">
                    <svg siBellIcon class="size-4" aria-hidden="true"></svg>
                    <span>Notifications</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton routerLink="/components" routerLinkActive="font-medium">
                    <svg siComponentIcon class="size-4" aria-hidden="true"></svg>
                    <span>Components</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div scSidebarGroup>
            <div scSidebarGroupLabel>Settings</div>
            <div scSidebarGroupContent>
              <ul scSidebarMenu>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton routerLink="/settings" routerLinkActive="font-medium">
                    <svg siSettingsIcon class="size-4" aria-hidden="true"></svg>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div scSidebarFooter>
          <p class="px-2 text-xs text-muted-foreground">&copy; 2026 Acme Inc.</p>
        </div>

        <button scSidebarRail></button>
      </div>

      <main scSidebarInset>
        <app-dashboard-header />
        <router-outlet />
      </main>
    </div>
  `,
})
export class Layout {}
