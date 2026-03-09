import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScAvatar,
  ScAvatarFallback,
  ScAvatarImage,
  ScBadge,
  ScButton,
  ScCard,
  ScCardBody,
  ScCardDescription,
  ScCardHeader,
  ScCardTitle,
  ScDialogClose,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogHeader,
  ScDialogPortal,
  ScDialogProvider,
  ScDialogTitle,
  ScDialogTrigger,
  ScDialog,
  ScPagination,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPrevious,
  ScTable,
  ScTableBody,
  ScTableCell,
  ScTableHeader,
  ScTableHeaderCell,
  ScTableRow,
  ScTooltipTrigger,
} from '@semantic-components/ui';
import { SiTrashIcon } from '@semantic-icons/lucide-icons';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar: string;
  initials: string;
}

@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScAvatar,
    ScAvatarFallback,
    ScAvatarImage,
    ScBadge,
    ScButton,
    ScCard,
    ScCardBody,
    ScCardDescription,
    ScCardHeader,
    ScCardTitle,
    ScDialog,
    ScDialogClose,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogHeader,
    ScDialogPortal,
    ScDialogProvider,
    ScDialogTitle,
    ScDialogTrigger,
    ScPagination,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationList,
    ScPaginationNext,
    ScPaginationPrevious,
    ScTable,
    ScTableBody,
    ScTableCell,
    ScTableHeader,
    ScTableHeaderCell,
    ScTableRow,
    ScTooltipTrigger,
    SiTrashIcon,
  ],
  template: `
    <div class="mx-auto max-w-5xl space-y-6 p-4 md:p-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold tracking-tight">Users</h2>
          <p class="text-muted-foreground">Manage team members and their roles.</p>
        </div>
        <button scButton>Add User</button>
      </div>

      <div scCard>
        <div scCardHeader>
          <h3 scCardTitle>Team Members</h3>
          <p scCardDescription>A list of all users in your organization.</p>
        </div>
        <div scCardBody class="p-0">
          <table scTable class="w-full">
            <thead scTableHeader>
              <tr scTableRow>
                <th scTableHeaderCell class="w-12"></th>
                <th scTableHeaderCell>Name</th>
                <th scTableHeaderCell>Email</th>
                <th scTableHeaderCell>Role</th>
                <th scTableHeaderCell>Status</th>
                <th scTableHeaderCell class="w-12"></th>
              </tr>
            </thead>
            <tbody scTableBody>
              @for (user of users(); track user.id) {
                <tr scTableRow>
                  <td scTableCell>
                    <span scAvatar size="sm">
                      <img
                        scAvatarImage
                        [src]="user.avatar"
                        [alt]="user.name"
                      />
                      <span scAvatarFallback>{{ user.initials }}</span>
                    </span>
                  </td>
                  <td scTableCell class="font-medium">{{ user.name }}</td>
                  <td scTableCell class="text-muted-foreground">{{ user.email }}</td>
                  <td scTableCell>{{ user.role }}</td>
                  <td scTableCell>
                    <span
                      scBadge
                      [variant]="user.status === 'active' ? 'default' : user.status === 'pending' ? 'secondary' : 'outline'"
                    >
                      {{ user.status }}
                    </span>
                  </td>
                  <td scTableCell>
                    <div scDialogProvider>
                      <button
                        scButton
                        scDialogTrigger
                        variant="ghost"
                        size="icon-sm"
                        [scTooltipTrigger]="'Delete user'"
                        aria-label="Delete user"
                      >
                        <svg siTrashIcon class="size-4" aria-hidden="true"></svg>
                      </button>

                      <ng-template scDialogPortal>
                        <div scDialog>
                          <div scDialogHeader>
                            <h2 scDialogTitle>Delete User</h2>
                            <p scDialogDescription>
                              Are you sure you want to remove {{ user.name }}? This action cannot be undone.
                            </p>
                          </div>
                          <div scDialogFooter>
                            <button scDialogClose variant="outline">Cancel</button>
                            <button scDialogClose variant="destructive">Delete</button>
                          </div>
                        </div>
                      </ng-template>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <nav
        scPagination
        [totalItems]="50"
        [currentPage]="currentPage()"
        [pageSize]="5"
        aria-label="User list pagination"
        (change)="currentPage.set($event.page)"
        #pagination="scPagination"
      >
        <ul scPaginationList>
          <li scPaginationItem>
            <button scPaginationPrevious>Previous</button>
          </li>
          @for (page of pagination.pages(); track page.value) {
            @if (page.type === 'page') {
              <li scPaginationItem>
                <button scPaginationLink [page]="page.value">{{ page.value }}</button>
              </li>
            }
          }
          <li scPaginationItem>
            <button scPaginationNext>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  `,
})
export class Users {
  readonly currentPage = signal(1);

  readonly users = signal<User[]>([
    { id: 1, name: 'Olivia Martin', email: 'olivia@example.com', role: 'Admin', status: 'active', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=OM', initials: 'OM' },
    { id: 2, name: 'Jackson Lee', email: 'jackson@example.com', role: 'Developer', status: 'active', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=JL', initials: 'JL' },
    { id: 3, name: 'Isabella Nguyen', email: 'isabella@example.com', role: 'Designer', status: 'pending', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=IN', initials: 'IN' },
    { id: 4, name: 'William Kim', email: 'william@example.com', role: 'Developer', status: 'active', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=WK', initials: 'WK' },
    { id: 5, name: 'Sofia Davis', email: 'sofia@example.com', role: 'Marketing', status: 'inactive', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=SD', initials: 'SD' },
  ]);
}
