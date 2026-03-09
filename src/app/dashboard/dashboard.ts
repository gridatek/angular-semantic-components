import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
  ScTab,
  ScTabContent,
  ScTabList,
  ScTabPanel,
  ScTabs,
} from '@semantic-components/ui';
import { SiDownloadIcon } from '@semantic-icons/lucide-icons';

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
    SiDownloadIcon,
  ],
  template: `
    <div class="flex min-h-screen flex-col">
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
    </div>
  `,
})
export class Dashboard {}
