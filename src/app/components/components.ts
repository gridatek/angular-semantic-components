import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScAccordionBody,
  ScAccordionContent,
  ScAccordionGroup,
  ScAccordionHeader,
  ScAccordionItem,
  ScAccordionPanel,
  ScAccordionTrigger,
  ScAlertDialog,
  ScAlertDialogAction,
  ScAlertDialogCancel,
  ScAlertDialogDescription,
  ScAlertDialogFooter,
  ScAlertDialogHeader,
  ScAlertDialogPortal,
  ScAlertDialogProvider,
  ScAlertDialogTitle,
  ScAlertDialogTrigger,
  ScAvatar,
  ScAvatarFallback,
  ScAvatarGroup,
  ScAvatarImage,
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
  ScCheckbox,
  ScCheckboxField,
  ScCheckboxVisual,
  ScCollapsible,
  ScCollapsibleBody,
  ScCollapsibleContent,
  ScCollapsiblePanel,
  ScCollapsibleTrigger,
  ScDatePicker,
  ScDialog,
  ScDialogClose,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogHeader,
  ScDialogPortal,
  ScDialogProvider,
  ScDialogTitle,
  ScDialogTrigger,
  ScHoverCard,
  ScHoverCardPortal,
  ScHoverCardProvider,
  ScHoverCardTrigger,
  ScInput,
  ScKbd,
  ScLabel,
  ScPopover,
  ScPopoverPortal,
  ScPopoverProvider,
  ScPopoverTrigger,
  ScProgress,
  ScRadio,
  ScRadioField,
  ScRadioGroup,
  ScSelect,
  ScSelectDisplayValue,
  ScSelectIcon,
  ScSelectInput,
  ScSelectItem,
  ScSelectItemIndicator,
  ScSelectItemLabel,
  ScSelectList,
  ScSelectOrigin,
  ScSelectPopup,
  ScSelectPortal,
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
  ScSkeleton,
  ScSlider,
  ScSpinner,
  ScSwitch,
  ScSwitchField,
  ScSwitchVisual,
  ScTab,
  ScTabContent,
  ScTabList,
  ScTabPanel,
  ScTabs,
  ScTextarea,
  ScToaster,
  ScToggle,
  ScToggleGroup,
  ScToggleGroupItem,
  ScTooltipTrigger,
} from '@semantic-components/ui';
import {
  SiBoldIcon,
  SiChevronDownIcon,
  SiItalicIcon,
  SiUnderlineIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-components',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ScAccordionBody,
    ScAccordionContent,
    ScAccordionGroup,
    ScAccordionHeader,
    ScAccordionItem,
    ScAccordionPanel,
    ScAccordionTrigger,
    ScAlertDialog,
    ScAlertDialogAction,
    ScAlertDialogCancel,
    ScAlertDialogDescription,
    ScAlertDialogFooter,
    ScAlertDialogHeader,
    ScAlertDialogPortal,
    ScAlertDialogProvider,
    ScAlertDialogTitle,
    ScAlertDialogTrigger,
    ScAvatar,
    ScAvatarFallback,
    ScAvatarGroup,
    ScAvatarImage,
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
    ScCheckbox,
    ScCheckboxField,
    ScCheckboxVisual,
    ScCollapsible,
    ScCollapsibleBody,
    ScCollapsibleContent,
    ScCollapsiblePanel,
    ScCollapsibleTrigger,
    ScDatePicker,
    ScDialog,
    ScDialogClose,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogHeader,
    ScDialogPortal,
    ScDialogProvider,
    ScDialogTitle,
    ScDialogTrigger,
    ScHoverCard,
    ScHoverCardPortal,
    ScHoverCardProvider,
    ScHoverCardTrigger,
    ScInput,
    ScKbd,
    ScLabel,
    ScPopover,
    ScPopoverPortal,
    ScPopoverProvider,
    ScPopoverTrigger,
    ScProgress,
    ScRadio,
    ScRadioField,
    ScRadioGroup,
    ScSelect,
    ScSelectDisplayValue,
    ScSelectIcon,
    ScSelectInput,
    ScSelectItem,
    ScSelectItemIndicator,
    ScSelectItemLabel,
    ScSelectList,
    ScSelectOrigin,
    ScSelectPopup,
    ScSelectPortal,
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
    ScSkeleton,
    ScSlider,
    ScSpinner,
    ScSwitch,
    ScSwitchField,
    ScSwitchVisual,
    ScTab,
    ScTabContent,
    ScTabList,
    ScTabPanel,
    ScTabs,
    ScTextarea,
    ScToggle,
    ScToggleGroup,
    ScToggleGroupItem,
    ScTooltipTrigger,
    SiBoldIcon,
    SiChevronDownIcon,
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

      <!-- Avatar -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Avatar</h3>
          <p scCardDescription>User profile images with fallback initials.</p>
        </div>
        <div scCardBody class="space-y-6">
          <div class="flex items-center gap-4">
            <span scAvatar>
              <img scAvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=OM" alt="Olivia Martin" />
              <span scAvatarFallback>OM</span>
            </span>
            <span scAvatar>
              <img scAvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=JL" alt="Jackson Lee" />
              <span scAvatarFallback>JL</span>
            </span>
            <span scAvatar>
              <span scAvatarFallback>IN</span>
            </span>
            <span scAvatar size="sm">
              <span scAvatarFallback>SM</span>
            </span>
            <span scAvatar size="lg">
              <span scAvatarFallback>LG</span>
            </span>
          </div>
          <div scSeparator></div>
          <div>
            <p class="mb-2 text-sm font-medium">Avatar Group</p>
            <div scAvatarGroup>
              <span scAvatar>
                <img scAvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=OM" alt="Olivia Martin" />
                <span scAvatarFallback>OM</span>
              </span>
              <span scAvatar>
                <img scAvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=JL" alt="Jackson Lee" />
                <span scAvatarFallback>JL</span>
              </span>
              <span scAvatar>
                <span scAvatarFallback>IN</span>
              </span>
              <span scAvatar>
                <span scAvatarFallback>WK</span>
              </span>
            </div>
          </div>
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

      <!-- Dialog -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Dialog</h3>
          <p scCardDescription>A modal dialog for focused interactions.</p>
        </div>
        <div scCardBody>
          <div scDialogProvider>
            <button scButton scDialogTrigger variant="outline">Open Dialog</button>
            <ng-template scDialogPortal>
              <div scDialog>
                <div scDialogHeader>
                  <h2 scDialogTitle>Edit Profile</h2>
                  <p scDialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </p>
                </div>
                <div class="space-y-4 px-6 py-4">
                  <div class="space-y-2">
                    <label scLabel for="dialog-name">Name</label>
                    <input scInput id="dialog-name" type="text" placeholder="Enter your name" />
                  </div>
                  <div class="space-y-2">
                    <label scLabel for="dialog-email">Email</label>
                    <input scInput id="dialog-email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div scDialogFooter>
                  <button scDialogClose variant="outline">Cancel</button>
                  <button scDialogClose>Save changes</button>
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Alert Dialog -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Alert Dialog</h3>
          <p scCardDescription>A confirmation dialog for destructive actions.</p>
        </div>
        <div scCardBody>
          <div scAlertDialogProvider>
            <button scButton scAlertDialogTrigger variant="destructive">Delete Account</button>
            <ng-template scAlertDialogPortal>
              <div scAlertDialog>
                <div scAlertDialogHeader>
                  <h2 scAlertDialogTitle>Are you absolutely sure?</h2>
                  <p scAlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove
                    your data from our servers.
                  </p>
                </div>
                <div scAlertDialogFooter>
                  <button scAlertDialogCancel>Cancel</button>
                  <button scAlertDialogAction variant="destructive">Yes, delete account</button>
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Accordion -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Accordion</h3>
          <p scCardDescription>Expandable sections for organizing content.</p>
        </div>
        <div scCardBody>
          <div scAccordionGroup>
            <div scAccordionItem>
              <h4 scAccordionHeader>
                <button scAccordionTrigger panelId="acc-1">Is it accessible?</button>
              </h4>
              <div scAccordionPanel panelId="acc-1">
                <ng-template scAccordionContent>
                  <sc-accordion-body>
                    Yes. It adheres to the WAI-ARIA design pattern for accordions.
                  </sc-accordion-body>
                </ng-template>
              </div>
            </div>
            <div scAccordionItem>
              <h4 scAccordionHeader>
                <button scAccordionTrigger panelId="acc-2">Is it styled?</button>
              </h4>
              <div scAccordionPanel panelId="acc-2">
                <ng-template scAccordionContent>
                  <sc-accordion-body>
                    Yes. It comes with default styles that match the other components' aesthetic.
                  </sc-accordion-body>
                </ng-template>
              </div>
            </div>
            <div scAccordionItem>
              <h4 scAccordionHeader>
                <button scAccordionTrigger panelId="acc-3">Is it animated?</button>
              </h4>
              <div scAccordionPanel panelId="acc-3">
                <ng-template scAccordionContent>
                  <sc-accordion-body>
                    Yes. It's animated by default, but you can disable it if you prefer.
                  </sc-accordion-body>
                </ng-template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Tabs</h3>
          <p scCardDescription>Tabbed interface for switching between views.</p>
        </div>
        <div scCardBody>
          <div scTabs>
            <div scTabList>
              <button scTab value="overview">Overview</button>
              <button scTab value="features">Features</button>
              <button scTab value="specs">Specs</button>
            </div>
            <div scTabPanel value="overview">
              <ng-template scTabContent>
                <div class="pt-4">
                  <h4 class="text-sm font-semibold">Product Overview</h4>
                  <p class="mt-1 text-sm text-muted-foreground">
                    A comprehensive overview of the product including key highlights and benefits.
                  </p>
                </div>
              </ng-template>
            </div>
            <div scTabPanel value="features">
              <ng-template scTabContent>
                <div class="pt-4">
                  <h4 class="text-sm font-semibold">Key Features</h4>
                  <ul class="mt-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Responsive design</li>
                    <li>Accessible by default</li>
                    <li>Customizable themes</li>
                  </ul>
                </div>
              </ng-template>
            </div>
            <div scTabPanel value="specs">
              <ng-template scTabContent>
                <div class="pt-4">
                  <h4 class="text-sm font-semibold">Technical Specifications</h4>
                  <p class="mt-1 text-sm text-muted-foreground">
                    Built with Angular 21, Tailwind CSS 4, and TypeScript 5.9.
                  </p>
                </div>
              </ng-template>
            </div>
          </div>
        </div>
      </div>

      <!-- Collapsible -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Collapsible</h3>
          <p scCardDescription>An expandable section that can be toggled open and closed.</p>
        </div>
        <div scCardBody>
          <div scCollapsible>
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-semibold">3 items tagged</h4>
              <button scButton scCollapsibleTrigger panelId="collapsible-1" variant="ghost" size="sm">
                <svg siChevronDownIcon class="size-4" aria-hidden="true"></svg>
                <span class="sr-only">Toggle</span>
              </button>
            </div>
            <div class="mt-2 rounded-md border px-4 py-3 text-sm">&#64;radix-ui/primitives</div>
            <div scCollapsiblePanel panelId="collapsible-1">
              <ng-template scCollapsibleContent>
                <sc-collapsible-body>
                  <div class="mt-2 space-y-2">
                    <div class="rounded-md border px-4 py-3 text-sm">&#64;radix-ui/colors</div>
                    <div class="rounded-md border px-4 py-3 text-sm">&#64;stitches/react</div>
                  </div>
                </sc-collapsible-body>
              </ng-template>
            </div>
          </div>
        </div>
      </div>

      <!-- Select -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Select</h3>
          <p scCardDescription>A dropdown menu for selecting from a list of options.</p>
        </div>
        <div scCardBody class="flex gap-4">
          <div scSelect class="w-48">
            <div scSelectOrigin>
              <input scSelectInput placeholder="Select a fruit" />
              <span scSelectDisplayValue></span>
              <svg scSelectIcon></svg>
            </div>
            <ng-template scSelectPortal>
              <div scSelectPopup>
                <div scSelectList>
                  <div scSelectItem value="apple" label="Apple">
                    <svg scSelectItemIndicator></svg>
                    <span scSelectItemLabel>Apple</span>
                  </div>
                  <div scSelectItem value="banana" label="Banana">
                    <svg scSelectItemIndicator></svg>
                    <span scSelectItemLabel>Banana</span>
                  </div>
                  <div scSelectItem value="cherry" label="Cherry">
                    <svg scSelectItemIndicator></svg>
                    <span scSelectItemLabel>Cherry</span>
                  </div>
                  <div scSelectItem value="grape" label="Grape">
                    <svg scSelectItemIndicator></svg>
                    <span scSelectItemLabel>Grape</span>
                  </div>
                  <div scSelectItem value="orange" label="Orange">
                    <svg scSelectItemIndicator></svg>
                    <span scSelectItemLabel>Orange</span>
                  </div>
                </div>
              </div>
            </ng-template>
          </div>
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

      <!-- Checkbox -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Checkbox</h3>
          <p scCardDescription>A control for toggling boolean options.</p>
        </div>
        <div scCardBody class="space-y-4">
          <label scCheckboxField class="flex items-center gap-3">
            <span scCheckboxVisual>
              <input type="checkbox" scCheckbox [(checked)]="acceptTerms" />
            </span>
            <div>
              <p class="text-sm font-medium">Accept terms and conditions</p>
              <p class="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </label>
          <label scCheckboxField class="flex items-center gap-3">
            <span scCheckboxVisual>
              <input type="checkbox" scCheckbox [(checked)]="receiveEmails" />
            </span>
            <span class="text-sm font-medium">Receive marketing emails</span>
          </label>
          <label scCheckboxField class="flex items-center gap-3">
            <span scCheckboxVisual>
              <input type="checkbox" scCheckbox disabled />
            </span>
            <span class="text-sm font-medium text-muted-foreground">Disabled option</span>
          </label>
        </div>
      </div>

      <!-- Radio Group -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Radio Group</h3>
          <p scCardDescription>A set of mutually exclusive options.</p>
        </div>
        <div scCardBody>
          <div scRadioGroup class="space-y-3">
            <label scRadioField class="flex items-center gap-3">
              <input type="radio" scRadio name="plan" value="free" [(ngModel)]="selectedPlan" />
              <div>
                <p class="text-sm font-medium">Free</p>
                <p class="text-sm text-muted-foreground">Up to 3 projects, basic features.</p>
              </div>
            </label>
            <label scRadioField class="flex items-center gap-3">
              <input type="radio" scRadio name="plan" value="pro" [(ngModel)]="selectedPlan" />
              <div>
                <p class="text-sm font-medium">Pro</p>
                <p class="text-sm text-muted-foreground">Unlimited projects, advanced features.</p>
              </div>
            </label>
            <label scRadioField class="flex items-center gap-3">
              <input type="radio" scRadio name="plan" value="enterprise" [(ngModel)]="selectedPlan" />
              <div>
                <p class="text-sm font-medium">Enterprise</p>
                <p class="text-sm text-muted-foreground">Custom solutions, dedicated support.</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Switch -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Switch</h3>
          <p scCardDescription>A toggle switch for on/off states.</p>
        </div>
        <div scCardBody class="space-y-4">
          <label scSwitchField class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium">Airplane Mode</p>
              <p class="text-sm text-muted-foreground">Disable all wireless connections.</p>
            </div>
            <span scSwitchVisual>
              <input type="checkbox" scSwitch [(checked)]="airplaneMode" />
            </span>
          </label>
          <div scSeparator></div>
          <label scSwitchField class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium">Dark Mode</p>
              <p class="text-sm text-muted-foreground">Toggle dark theme.</p>
            </div>
            <span scSwitchVisual>
              <input type="checkbox" scSwitch [(checked)]="darkMode" />
            </span>
          </label>
        </div>
      </div>

      <!-- Date Picker -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Date Picker</h3>
          <p scCardDescription>A date selection component with calendar popup.</p>
        </div>
        <div scCardBody>
          <div class="flex items-center gap-4">
            <label scLabel>Pick a date</label>
            <sc-date-picker placeholder="Select a date"></sc-date-picker>
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

      <!-- Input & Textarea -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Input & Textarea</h3>
          <p scCardDescription>Text input fields for collecting user data.</p>
        </div>
        <div scCardBody class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label scLabel for="input-name">Name</label>
              <input scInput id="input-name" type="text" placeholder="Enter your name" />
            </div>
            <div class="space-y-2">
              <label scLabel for="input-email">Email</label>
              <input scInput id="input-email" type="email" placeholder="you&#64;example.com" />
            </div>
          </div>
          <div class="space-y-2">
            <label scLabel for="input-bio">Bio</label>
            <textarea scTextarea id="input-bio" placeholder="Tell us about yourself" rows="3"></textarea>
          </div>
        </div>
      </div>

      <!-- Toast -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Toast</h3>
          <p scCardDescription>Temporary notification messages.</p>
        </div>
        <div scCardBody class="flex flex-wrap gap-3">
          <button
            scButton
            variant="outline"
            (click)="showToast('default')"
          >
            Default
          </button>
          <button
            scButton
            variant="outline"
            (click)="showToast('success')"
          >
            Success
          </button>
          <button
            scButton
            variant="outline"
            (click)="showToast('error')"
          >
            Error
          </button>
          <button
            scButton
            variant="outline"
            (click)="showToast('warning')"
          >
            Warning
          </button>
          <button
            scButton
            variant="outline"
            (click)="showToast('info')"
          >
            Info
          </button>
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

      <!-- Skeleton & Spinner -->
      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Skeleton & Spinner</h3>
          <p scCardDescription>Loading state placeholders and indicators.</p>
        </div>
        <div scCardBody class="space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium">Skeleton</p>
            <div class="flex items-center gap-4">
              <div scSkeleton class="size-10 rounded-full"></div>
              <div class="space-y-2">
                <div scSkeleton class="h-4 w-48"></div>
                <div scSkeleton class="h-4 w-32"></div>
              </div>
            </div>
          </div>
          <div scSeparator></div>
          <div>
            <p class="mb-3 text-sm font-medium">Spinner</p>
            <div class="flex items-center gap-4">
              <svg scSpinner class="size-6" aria-label="Loading"></svg>
              <span class="text-sm text-muted-foreground">Loading content...</span>
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
  private readonly toaster = inject(ScToaster);

  readonly boldPressed = signal(false);
  readonly formattingOptions = signal<string[]>([]);
  readonly progressValue = signal(33);
  readonly sliderValue = signal(50);
  readonly temperatureValue = signal(22);
  readonly acceptTerms = signal(false);
  readonly receiveEmails = signal(false);
  readonly selectedPlan = signal('free');
  readonly airplaneMode = signal(false);
  readonly darkMode = signal(false);

  setProgress(value: number) {
    this.progressValue.set(value);
  }

  showToast(variant: string) {
    const messages: Record<string, { title: string; description: string }> = {
      default: { title: 'Notification', description: 'This is a default toast message.' },
      success: { title: 'Success', description: 'Your changes have been saved.' },
      error: { title: 'Error', description: 'Something went wrong. Please try again.' },
      warning: { title: 'Warning', description: 'Please review your settings.' },
      info: { title: 'Info', description: 'A new version is available.' },
    };

    const msg = messages[variant] ?? messages['default'];

    switch (variant) {
      case 'success':
        this.toaster.success(msg);
        break;
      case 'error':
        this.toaster.error(msg);
        break;
      case 'warning':
        this.toaster.warning(msg);
        break;
      case 'info':
        this.toaster.info(msg);
        break;
      default:
        this.toaster.show(msg);
        break;
    }
  }
}
