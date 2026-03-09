import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScBadge,
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
  ScHoverCard,
  ScHoverCardPortal,
  ScHoverCardProvider,
  ScHoverCardTrigger,
  ScKbd,
  ScLabel,
  ScPopover,
  ScPopoverPortal,
  ScPopoverProvider,
  ScPopoverTrigger,
  ScProgress,
  ScSeparator,
  ScSheet,
  ScSheetClose,
  ScSheetDescription,
  ScSheetFooter,
  ScSheetHeader,
  ScSheetPortal,
  ScSheetProvider,
  ScSheetTitle,
  ScSheetTrigger,
  ScSlider,
  ScToggle,
  ScToggleGroup,
  ScToggleGroupItem,
  ScTooltipTrigger,
} from '@semantic-components/ui';
import {
  SiBoldIcon,
  SiItalicIcon,
  SiUnderlineIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-components',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScBadge,
    ScBreadcrumb,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbList,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    ScButton,
    ScCard,
    ScCardBody,
    ScCardDescription,
    ScCardHeader,
    ScCardTitle,
    ScHoverCard,
    ScHoverCardPortal,
    ScHoverCardProvider,
    ScHoverCardTrigger,
    ScKbd,
    ScLabel,
    ScPopover,
    ScPopoverPortal,
    ScPopoverProvider,
    ScPopoverTrigger,
    ScProgress,
    ScSeparator,
    ScSheet,
    ScSheetClose,
    ScSheetDescription,
    ScSheetFooter,
    ScSheetHeader,
    ScSheetPortal,
    ScSheetProvider,
    ScSheetTitle,
    ScSheetTrigger,
    ScSlider,
    ScToggle,
    ScToggleGroup,
    ScToggleGroupItem,
    ScTooltipTrigger,
    SiBoldIcon,
    SiItalicIcon,
    SiUnderlineIcon,
  ],
  template: `
    <div class="mx-auto max-w-4xl space-y-8 p-4 md:p-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight">Components</h2>
        <p class="text-muted-foreground">A gallery of UI components from the design system.</p>
      </div>

      <!-- Breadcrumb -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Breadcrumb</h3>
          <p scCardDescription>Navigation breadcrumbs to show hierarchy.</p>
        </div>
        <div scCardBody>
          <nav scBreadcrumb aria-label="Breadcrumb">
            <ol scBreadcrumbList>
              <li scBreadcrumbItem>
                <a scBreadcrumbLink href="#">Home</a>
              </li>
              <li scBreadcrumbSeparator aria-hidden="true"></li>
              <li scBreadcrumbItem>
                <a scBreadcrumbLink href="#">Dashboard</a>
              </li>
              <li scBreadcrumbSeparator aria-hidden="true"></li>
              <li scBreadcrumbItem>
                <span scBreadcrumbPage>Components</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Badge -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Badge</h3>
          <p scCardDescription>Small status indicators and labels.</p>
        </div>
        <div scCardBody class="flex flex-wrap gap-3">
          <span scBadge variant="default">Default</span>
          <span scBadge variant="secondary">Secondary</span>
          <span scBadge variant="outline">Outline</span>
          <span scBadge variant="destructive">Destructive</span>
          <span scBadge variant="ghost">Ghost</span>
          <span scBadge variant="link">Link</span>
        </div>
      </div>

      <!-- Tooltip -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Tooltip</h3>
          <p scCardDescription>Hover over elements to reveal more information.</p>
        </div>
        <div scCardBody class="flex gap-4">
          <button scButton variant="outline" [scTooltipTrigger]="'Add to library'">
            Hover me
          </button>
          <button
            scButton
            variant="outline"
            [scTooltipTrigger]="'This appears on the right'"
            tooltipPosition="right"
          >
            Right tooltip
          </button>
          <button
            scButton
            variant="outline"
            [scTooltipTrigger]="'This appears below'"
            tooltipPosition="bottom"
          >
            Bottom tooltip
          </button>
        </div>
      </div>

      <!-- Toggle & Toggle Group -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Toggle & Toggle Group</h3>
          <p scCardDescription>Toggle buttons for switching states or selecting options.</p>
        </div>
        <div scCardBody class="space-y-4">
          <div class="flex items-center gap-4">
            <label class="text-sm font-medium">Single toggle:</label>
            <button scToggle variant="outline" [(pressed)]="boldPressed" aria-label="Toggle bold">
              <svg siBoldIcon class="size-4" aria-hidden="true"></svg>
            </button>
          </div>
          <div scSeparator></div>
          <div class="flex items-center gap-4">
            <label class="text-sm font-medium">Toggle group:</label>
            <div scToggleGroup type="multiple" variant="outline" [(value)]="formattingOptions">
              <button scToggleGroupItem value="bold" aria-label="Toggle bold">
                <svg siBoldIcon class="size-4" aria-hidden="true"></svg>
              </button>
              <button scToggleGroupItem value="italic" aria-label="Toggle italic">
                <svg siItalicIcon class="size-4" aria-hidden="true"></svg>
              </button>
              <button scToggleGroupItem value="underline" aria-label="Toggle underline">
                <svg siUnderlineIcon class="size-4" aria-hidden="true"></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Progress</h3>
          <p scCardDescription>Displays completion status of a task.</p>
        </div>
        <div scCardBody class="space-y-6">
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span>Upload progress</span>
              <span>{{ progressValue() }}%</span>
            </div>
            <div scProgress [value]="progressValue()" aria-label="Upload progress"></div>
          </div>
          <div class="flex gap-2">
            <button scButton variant="outline" size="sm" (click)="setProgress(0)">0%</button>
            <button scButton variant="outline" size="sm" (click)="setProgress(25)">25%</button>
            <button scButton variant="outline" size="sm" (click)="setProgress(50)">50%</button>
            <button scButton variant="outline" size="sm" (click)="setProgress(75)">75%</button>
            <button scButton variant="outline" size="sm" (click)="setProgress(100)">100%</button>
          </div>
        </div>
      </div>

      <!-- Slider -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Slider</h3>
          <p scCardDescription>An input for selecting a numeric value within a range.</p>
        </div>
        <div scCardBody class="space-y-6">
          <div class="space-y-2">
            <label scLabel for="volume-slider">Volume: {{ sliderValue() }}</label>
            <input scSlider id="volume-slider" type="range" [(value)]="sliderValue" [min]="0" [max]="100" [step]="1" />
          </div>
          <div class="space-y-2">
            <label scLabel for="temperature-slider">Temperature: {{ temperatureValue() }}&#176;C</label>
            <input scSlider id="temperature-slider" type="range" [(value)]="temperatureValue" [min]="16" [max]="32" [step]="0.5" />
          </div>
        </div>
      </div>

      <!-- Popover -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Popover</h3>
          <p scCardDescription>A floating panel triggered by a button click.</p>
        </div>
        <div scCardBody>
          <div scPopoverProvider>
            <button scButton scPopoverTrigger variant="outline">Open Popover</button>
            <ng-template scPopoverPortal>
              <div scPopover class="w-72">
                <div class="space-y-4 p-4">
                  <div class="space-y-2">
                    <h4 class="text-sm font-semibold">Dimensions</h4>
                    <p class="text-sm text-muted-foreground">
                      Configure the dimensions of the component.
                    </p>
                  </div>
                  <div class="grid gap-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm">Width</span>
                      <span class="text-sm text-muted-foreground">100%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm">Max Width</span>
                      <span class="text-sm text-muted-foreground">300px</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm">Height</span>
                      <span class="text-sm text-muted-foreground">auto</span>
                    </div>
                  </div>
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Hover Card -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Hover Card</h3>
          <p scCardDescription>A card that appears when hovering over a trigger element.</p>
        </div>
        <div scCardBody>
          <div scHoverCardProvider>
            <a href="#" scHoverCardTrigger class="text-sm font-medium underline underline-offset-4">
              &#64;angular
            </a>
            <ng-template scHoverCardPortal>
              <div scHoverCard class="w-80">
                <div class="space-y-2 p-4">
                  <h4 class="text-sm font-semibold">Angular</h4>
                  <p class="text-sm text-muted-foreground">
                    The modern web developer's platform. Build for web, mobile, and desktop.
                  </p>
                  <div class="flex items-center gap-4 pt-2">
                    <div class="flex items-center gap-1">
                      <div class="size-3 rounded-full bg-red-500"></div>
                      <span class="text-xs text-muted-foreground">TypeScript</span>
                    </div>
                    <span class="text-xs text-muted-foreground">Updated March 2026</span>
                  </div>
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Keyboard Shortcuts -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Keyboard Shortcuts</h3>
          <p scCardDescription>Display keyboard shortcut indicators.</p>
        </div>
        <div scCardBody>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm">Save</span>
              <div class="flex gap-1">
                <kbd scKbd>Ctrl</kbd>
                <kbd scKbd>S</kbd>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Copy</span>
              <div class="flex gap-1">
                <kbd scKbd>Ctrl</kbd>
                <kbd scKbd>C</kbd>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Search</span>
              <div class="flex gap-1">
                <kbd scKbd>Ctrl</kbd>
                <kbd scKbd>K</kbd>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Undo</span>
              <div class="flex gap-1">
                <kbd scKbd>Ctrl</kbd>
                <kbd scKbd>Z</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sheet -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Sheet</h3>
          <p scCardDescription>A slide-out panel from the edge of the screen.</p>
        </div>
        <div scCardBody class="flex gap-4">
          <div scSheetProvider side="right">
            <button scButton scSheetTrigger variant="outline">Open Sheet</button>
            <ng-template scSheetPortal>
              <div scSheet>
                <div scSheetHeader>
                  <h2 scSheetTitle>Edit Profile</h2>
                  <p scSheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </p>
                </div>
                <div class="space-y-4 px-4 py-6">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium">Name</span>
                    <span class="text-sm text-muted-foreground">Olivia Martin</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium">Email</span>
                    <span class="text-sm text-muted-foreground">olivia&#64;example.com</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium">Role</span>
                    <span class="text-sm text-muted-foreground">Admin</span>
                  </div>
                </div>
                <div scSheetFooter>
                  <button scSheetClose variant="outline">Cancel</button>
                  <button scSheetClose>Save changes</button>
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Components {
  readonly boldPressed = signal(false);
  readonly formattingOptions = signal<string[]>([]);
  readonly progressValue = signal(33);
  readonly sliderValue = signal(50);
  readonly temperatureValue = signal(22);

  setProgress(value: number) {
    this.progressValue.set(value);
  }
}
