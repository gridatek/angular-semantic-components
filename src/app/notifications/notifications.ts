import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScAccordionBody,
  ScAccordionContent,
  ScAccordionGroup,
  ScAccordionHeader,
  ScAccordionItem,
  ScAccordionPanel,
  ScAccordionTrigger,
  ScAlert,
  ScAlertDescription,
  ScAlertTitle,
  ScBadge,
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
  ScSeparator,
  ScSkeleton,
} from '@semantic-components/ui';
import {
  SiBellIcon,
  SiCircleCheckIcon,
  SiInfoIcon,
  SiTriangleAlertIcon,
} from '@semantic-icons/lucide-icons';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScAccordionBody,
    ScAccordionContent,
    ScAccordionGroup,
    ScAccordionHeader,
    ScAccordionItem,
    ScAccordionPanel,
    ScAccordionTrigger,
    ScAlert,
    ScAlertDescription,
    ScAlertTitle,
    ScBadge,
    ScButton,
    ScCard,
    ScCardBody,
    ScCardDescription,
    ScCardHeader,
    ScCardTitle,
    ScSeparator,
    ScSkeleton,
    SiBellIcon,
    SiCircleCheckIcon,
    SiInfoIcon,
    SiTriangleAlertIcon,
  ],
  template: `
    <div class="mx-auto max-w-3xl space-y-6 p-4 md:p-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold tracking-tight">Notifications</h2>
          <p class="text-muted-foreground">Stay up to date with what's happening.</p>
        </div>
        <button scButton variant="outline" (click)="markAllRead()">Mark all as read</button>
      </div>

      <!-- Alerts Section -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold">System Alerts</h3>

        <div scAlert>
          <svg siInfoIcon class="size-4" aria-hidden="true"></svg>
          <h4 scAlertTitle>Scheduled Maintenance</h4>
          <p scAlertDescription>
            The system will be undergoing maintenance on March 15, 2026 from 2:00 AM to 4:00 AM UTC.
          </p>
        </div>

        <div scAlert variant="destructive">
          <svg siTriangleAlertIcon class="size-4" aria-hidden="true"></svg>
          <h4 scAlertTitle>API Rate Limit Warning</h4>
          <p scAlertDescription>
            You have reached 90% of your API rate limit. Consider upgrading your plan.
          </p>
        </div>

        <div scAlert>
          <svg siCircleCheckIcon class="size-4" aria-hidden="true"></svg>
          <h4 scAlertTitle>Deployment Successful</h4>
          <p scAlertDescription>
            Version 2.4.1 has been successfully deployed to production.
          </p>
        </div>
      </div>

      <div scSeparator></div>

      <!-- Recent Notifications -->
      <div scCard>
        <div scCardHeader>
          <div class="flex items-center justify-between">
            <h3 scCardTitle>Recent Notifications</h3>
            <span scBadge variant="secondary">{{ unreadCount() }} new</span>
          </div>
          <p scCardDescription>Your latest activity and updates.</p>
        </div>
        <div scCardBody class="p-0">
          @for (notification of notifications(); track notification.id) {
            <div
              class="flex items-start gap-4 border-b p-4 last:border-b-0"
              [class.bg-muted/50]="!notification.read"
            >
              <svg siBellIcon class="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true"></svg>
              <div class="flex-1 space-y-1">
                <div class="flex items-center gap-2">
                  <p class="text-sm font-medium">{{ notification.title }}</p>
                  @if (!notification.read) {
                    <span scBadge variant="default" class="text-xs">New</span>
                  }
                </div>
                <p class="text-sm text-muted-foreground">{{ notification.description }}</p>
                <p class="text-xs text-muted-foreground">{{ notification.time }}</p>
              </div>
            </div>
          }
        </div>
      </div>

      <div scSeparator></div>

      <!-- FAQ Accordion -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">Notification FAQ</h3>
        <div scAccordionGroup>
          <div scAccordionItem>
            <h4 scAccordionHeader>
              <button scAccordionTrigger panelId="faq-1">
                How do I customize my notification preferences?
              </button>
            </h4>
            <div scAccordionPanel panelId="faq-1">
              <ng-template scAccordionContent>
                <sc-accordion-body>
                  Go to Settings &gt; Notifications to configure which types of
                  notifications you receive and how they are delivered.
                </sc-accordion-body>
              </ng-template>
            </div>
          </div>
          <div scAccordionItem>
            <h4 scAccordionHeader>
              <button scAccordionTrigger panelId="faq-2">
                Can I snooze notifications?
              </button>
            </h4>
            <div scAccordionPanel panelId="faq-2">
              <ng-template scAccordionContent>
                <sc-accordion-body>
                  Yes, you can snooze individual notifications for 1 hour,
                  4 hours, or 1 day by clicking the snooze icon next to each notification.
                </sc-accordion-body>
              </ng-template>
            </div>
          </div>
          <div scAccordionItem>
            <h4 scAccordionHeader>
              <button scAccordionTrigger panelId="faq-3">
                What are push notifications?
              </button>
            </h4>
            <div scAccordionPanel panelId="faq-3">
              <ng-template scAccordionContent>
                <sc-accordion-body>
                  Push notifications are real-time alerts sent to your browser
                  or mobile device. Enable them in your browser settings and our
                  notification preferences page.
                </sc-accordion-body>
              </ng-template>
            </div>
          </div>
        </div>
      </div>

      <div scSeparator></div>

      <!-- Skeleton Loading Demo -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">Loading States</h3>
        <div scCard>
          <div scCardHeader>
            <h3 scCardTitle>Skeleton Preview</h3>
            <p scCardDescription>A preview of how loading skeletons appear.</p>
          </div>
          <div scCardBody class="space-y-4">
            <div class="flex items-center gap-4">
              <div scSkeleton class="size-10 rounded-full"></div>
              <div class="space-y-2">
                <div scSkeleton class="h-4 w-48"></div>
                <div scSkeleton class="h-4 w-32"></div>
              </div>
            </div>
            <div scSkeleton class="h-4 w-full"></div>
            <div scSkeleton class="h-4 w-3/4"></div>
            <div class="flex gap-4">
              <div scSkeleton class="h-20 w-1/3 rounded-lg"></div>
              <div scSkeleton class="h-20 w-1/3 rounded-lg"></div>
              <div scSkeleton class="h-20 w-1/3 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Notifications {
  readonly notifications = signal<Notification[]>([
    { id: 1, title: 'New team member added', description: 'Jackson Lee joined the development team.', time: '2 minutes ago', read: false },
    { id: 2, title: 'Deployment completed', description: 'v2.4.1 has been deployed to production successfully.', time: '1 hour ago', read: false },
    { id: 3, title: 'New comment on PR #42', description: 'Olivia Martin commented on your pull request.', time: '3 hours ago', read: false },
    { id: 4, title: 'Invoice paid', description: 'Invoice #1234 for $500.00 has been paid.', time: '1 day ago', read: true },
    { id: 5, title: 'Password changed', description: 'Your account password was changed successfully.', time: '2 days ago', read: true },
  ]);

  readonly unreadCount = signal(3);

  markAllRead() {
    this.notifications.update((items) =>
      items.map((item) => ({ ...item, read: true })),
    );
    this.unreadCount.set(0);
  }
}
