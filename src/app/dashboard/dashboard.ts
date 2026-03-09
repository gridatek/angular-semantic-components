import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
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
  ScTab,
  ScTabContent,
  ScTabList,
  ScTabPanel,
  ScTabs,
} from '@semantic-components/ui';
import {
  SiChartBarIncreasingIcon,
  SiDownloadIcon,
  SiHouseIcon,
  SiPackageIcon,
  SiSettingsIcon,
  SiUsersIcon,
} from '@semantic-icons/lucide-icons';

import { DashboardHeader } from './dashboard-header';
import { MetricCards } from './metric-cards';
import { OverviewChart } from './overview-chart';
import { RecentSales } from './recent-sales';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DashboardHeader,
    MetricCards,
    OverviewChart,
    RecentSales,
    ScButton,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardBody,
    ScTabs,
    ScTabList,
    ScTab,
    ScTabPanel,
    ScTabContent,
    ScSidebarProvider,
    ScSidebar,
    ScSidebarHeader,
    ScSidebarBody,
    ScSidebarFooter,
    ScSidebarMenu,
    ScSidebarMenuItem,
    ScSidebarMenuButton,
    ScSidebarGroup,
    ScSidebarGroupLabel,
    ScSidebarGroupContent,
    ScSidebarInset,
    ScSidebarRail,
    SiDownloadIcon,
    SiHouseIcon,
    SiUsersIcon,
    SiPackageIcon,
    SiChartBarIncreasingIcon,
    SiSettingsIcon,
  ],
  template: `
    <div scSidebarProvider class="flex min-h-screen">
      <div scSidebar>
        <div scSidebarHeader>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 text-lg font-semibold">
            Acme Inc.
          </a>
        </div>

        <div scSidebarBody>
          <div scSidebarGroup>
            <div scSidebarGroupLabel>Navigation</div>
            <div scSidebarGroupContent>
              <ul scSidebarMenu>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton href="#" [isActive]="true">
                    <svg siHouseIcon class="size-4" aria-hidden="true"></svg>
                    <span>Overview</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton href="#">
                    <svg siUsersIcon class="size-4" aria-hidden="true"></svg>
                    <span>Customers</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton href="#">
                    <svg siPackageIcon class="size-4" aria-hidden="true"></svg>
                    <span>Products</span>
                  </a>
                </li>
                <li scSidebarMenuItem>
                  <a scSidebarMenuButton href="#">
                    <svg siChartBarIncreasingIcon class="size-4" aria-hidden="true"></svg>
                    <span>Analytics</span>
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
                  <a scSidebarMenuButton href="#">
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

        <div class="flex-1 space-y-4 p-4 pt-6 md:p-8">
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div class="flex items-center gap-2">
              <button scButton variant="outline" size="sm">
                <svg siDownloadIcon class="mr-2 size-4" aria-hidden="true"></svg>
                Download
              </button>
            </div>
          </div>

          <div scTabs>
            <div scTabList>
              <button scTab value="overview">Overview</button>
              <button scTab value="analytics" disabled>Analytics</button>
              <button scTab value="reports" disabled>Reports</button>
              <button scTab value="notifications" disabled>Notifications</button>
            </div>

            <div scTabPanel value="overview">
              <ng-template scTabContent>
                <div class="space-y-4 pt-4">
                  <app-metric-cards />

                  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div scCard class="col-span-full lg:col-span-4">
                      <div scCardHeader>
                        <h3 scCardTitle>Overview</h3>
                      </div>
                      <div scCardBody class="pl-2">
                        <app-overview-chart />
                      </div>
                    </div>

                    <div scCard class="col-span-full lg:col-span-3">
                      <div scCardHeader>
                        <h3 scCardTitle>Recent Sales</h3>
                        <p scCardDescription>You made 265 sales this month.</p>
                      </div>
                      <div scCardBody>
                        <app-recent-sales />
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
            </div>

            <div scTabPanel value="analytics">
              <ng-template scTabContent>
                <div class="pt-4">
                  <div scCard>
                    <div scCardBody class="flex h-64 items-center justify-center">
                      <p class="text-muted-foreground">Analytics content coming soon.</p>
                    </div>
                  </div>
                </div>
              </ng-template>
            </div>

            <div scTabPanel value="reports">
              <ng-template scTabContent>
                <div class="pt-4">
                  <div scCard>
                    <div scCardBody class="flex h-64 items-center justify-center">
                      <p class="text-muted-foreground">Reports content coming soon.</p>
                    </div>
                  </div>
                </div>
              </ng-template>
            </div>

            <div scTabPanel value="notifications">
              <ng-template scTabContent>
                <div class="pt-4">
                  <div scCard>
                    <div scCardBody class="flex h-64 items-center justify-center">
                      <p class="text-muted-foreground">Notifications content coming soon.</p>
                    </div>
                  </div>
                </div>
              </ng-template>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class Dashboard {}
