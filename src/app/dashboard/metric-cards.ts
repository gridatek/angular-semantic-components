import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCard,
  ScCardBody,
  ScCardHeader,
  ScCardTitle,
} from '@semantic-components/ui';
import {
  SiActivityIcon,
  SiCreditCardIcon,
  SiDollarSignIcon,
  SiUsersIcon,
} from '@semantic-icons/lucide-icons';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  icon: 'dollar' | 'users' | 'credit-card' | 'activity';
}

@Component({
  selector: 'app-metric-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardBody,
    SiDollarSignIcon,
    SiUsersIcon,
    SiCreditCardIcon,
    SiActivityIcon,
  ],
  template: `
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      @for (card of cards; track card.title) {
        <div scCard>
          <div scCardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 scCardTitle class="text-sm font-medium">{{ card.title }}</h3>
            @switch (card.icon) {
              @case ('dollar') {
                <svg siDollarSignIcon class="size-4 text-muted-foreground" aria-hidden="true"></svg>
              }
              @case ('users') {
                <svg siUsersIcon class="size-4 text-muted-foreground" aria-hidden="true"></svg>
              }
              @case ('credit-card') {
                <svg siCreditCardIcon class="size-4 text-muted-foreground" aria-hidden="true"></svg>
              }
              @case ('activity') {
                <svg siActivityIcon class="size-4 text-muted-foreground" aria-hidden="true"></svg>
              }
            }
          </div>
          <div scCardBody>
            <div class="text-2xl font-bold">{{ card.value }}</div>
            <p class="text-xs text-muted-foreground">{{ card.change }}</p>
          </div>
        </div>
      }
    </div>
  `,
})
export class MetricCards {
  protected readonly cards: MetricCard[] = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      icon: 'dollar',
    },
    {
      title: 'Subscriptions',
      value: '+2,350',
      change: '+180.1% from last month',
      icon: 'users',
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19% from last month',
      icon: 'credit-card',
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '+201 since last hour',
      icon: 'activity',
    },
  ];
}
