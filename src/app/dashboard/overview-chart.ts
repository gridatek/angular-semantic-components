import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface MonthData {
  label: string;
  value: number;
}

@Component({
  selector: 'app-overview-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="w-full" role="img" aria-label="Monthly revenue overview bar chart">
      <svg
        [attr.viewBox]="'0 0 ' + chartWidth + ' ' + chartHeight"
        class="w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- Y-axis labels -->
        @for (tick of yTicks(); track tick.value) {
          <text
            [attr.x]="padding - 8"
            [attr.y]="tick.y + 4"
            text-anchor="end"
            class="fill-muted-foreground text-[11px]"
          >
            {{ tick.label }}
          </text>
          <line
            [attr.x1]="padding"
            [attr.y1]="tick.y"
            [attr.x2]="chartWidth - padding / 2"
            [attr.y2]="tick.y"
            class="stroke-border"
            stroke-dasharray="4 4"
          />
        }

        <!-- Bars -->
        @for (bar of bars(); track bar.label; let i = $index) {
          <rect
            [attr.x]="bar.x"
            [attr.y]="bar.y"
            [attr.width]="barWidth()"
            [attr.height]="bar.height"
            rx="4"
            class="fill-primary"
          >
            <title>{{ bar.label }}: {{ formatCurrency(bar.value) }}</title>
          </rect>
          <text
            [attr.x]="bar.x + barWidth() / 2"
            [attr.y]="chartHeight - 8"
            text-anchor="middle"
            class="fill-muted-foreground text-[11px]"
          >
            {{ bar.label }}
          </text>
        }
      </svg>
    </div>
  `,
})
export class OverviewChart {
  protected readonly chartWidth = 800;
  protected readonly chartHeight = 350;
  protected readonly padding = 50;

  protected readonly data = signal<MonthData[]>([
    { label: 'Jan', value: 4500 },
    { label: 'Feb', value: 3200 },
    { label: 'Mar', value: 2800 },
    { label: 'Apr', value: 4800 },
    { label: 'May', value: 3900 },
    { label: 'Jun', value: 4200 },
    { label: 'Jul', value: 2100 },
    { label: 'Aug', value: 4600 },
    { label: 'Sep', value: 3500 },
    { label: 'Oct', value: 3000 },
    { label: 'Nov', value: 5200 },
    { label: 'Dec', value: 4100 },
  ]);

  protected readonly maxValue = computed(() =>
    Math.max(...this.data().map((d) => d.value)),
  );

  protected readonly barWidth = computed(() => {
    const availableWidth = this.chartWidth - this.padding * 2;
    return availableWidth / this.data().length - 8;
  });

  protected readonly bars = computed(() => {
    const plotHeight = this.chartHeight - this.padding * 2;
    const availableWidth = this.chartWidth - this.padding * 2;
    const gap = availableWidth / this.data().length;
    const max = this.maxValue();

    return this.data().map((d, i) => {
      const height = (d.value / max) * plotHeight;
      return {
        label: d.label,
        value: d.value,
        x: this.padding + i * gap + (gap - this.barWidth()) / 2,
        y: this.chartHeight - this.padding - height,
        height,
      };
    });
  });

  protected formatCurrency(value: number): string {
    return '$' + value.toLocaleString();
  }

  protected readonly yTicks = computed(() => {
    const max = this.maxValue();
    const plotHeight = this.chartHeight - this.padding * 2;
    const steps = [0, 0.25, 0.5, 0.75, 1];

    return steps.map((step) => ({
      value: Math.round(max * step),
      label: '$' + (Math.round(max * step) / 1000).toFixed(1) + 'k',
      y: this.chartHeight - this.padding - step * plotHeight,
    }));
  });
}
