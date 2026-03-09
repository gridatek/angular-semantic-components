import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAvatar,
  ScAvatarFallback,
  ScAvatarImage,
} from '@semantic-components/ui';

interface Sale {
  name: string;
  email: string;
  amount: string;
  initials: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-recent-sales',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScAvatar, ScAvatarFallback, ScAvatarImage],
  template: `
    <div class="space-y-8">
      @for (sale of sales; track sale.email) {
        <div class="flex items-center">
          <span scAvatar class="size-9">
            <img scAvatarImage [src]="sale.avatarUrl" [alt]="sale.name" />
            <span scAvatarFallback>{{ sale.initials }}</span>
          </span>
          <div class="ml-4 space-y-1">
            <p class="text-sm font-medium leading-none">{{ sale.name }}</p>
            <p class="text-sm text-muted-foreground">{{ sale.email }}</p>
          </div>
          <div class="ml-auto font-medium">{{ sale.amount }}</div>
        </div>
      }
    </div>
  `,
})
export class RecentSales {
  protected readonly sales: Sale[] = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: '+$1,999.00',
      initials: 'OM',
      avatarUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=OM',
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: '+$39.00',
      initials: 'JL',
      avatarUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=JL',
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: '+$299.00',
      initials: 'IN',
      avatarUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=IN',
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      amount: '+$99.00',
      initials: 'WK',
      avatarUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=WK',
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      amount: '+$39.00',
      initials: 'SD',
      avatarUrl: 'https://api.dicebear.com/9.x/initials/svg?seed=SD',
    },
  ];
}
