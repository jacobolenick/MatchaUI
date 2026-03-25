"use client";

import type { ReactNode } from "react";
import {
  ChartBar,
  CreditCard,
  FolderOpen,
  GearSix,
  SquaresFour,
  Users,
} from "phosphor-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  SidebarCollapseTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarNavGroup,
  SidebarNavLink,
  SidebarProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useSidebar,
} from "matcha-ui";
import { cn } from "matcha-ui";

function StandaloneSidebarChrome({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { collapsed } = useSidebar();
  return (
    <aside
      data-collapsed={collapsed ? "true" : undefined}
      className={cn(
        "group/sidebar bg-muted/30 box-border flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden",
        className
      )}
      aria-label="Application navigation"
    >
      {children}
    </aside>
  );
}

/** Sidebar column width; collapse control lives in a separate rail to the right. */
function SidebarColumn({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar();
  return (
    <div
      className={cn(
        "flex min-h-0 min-w-0 flex-col transition-[width] duration-200 ease-out",
        collapsed ? "w-14 max-w-[100%]" : "w-full max-w-64"
      )}
    >
      {children}
    </div>
  );
}

/** Collapse control sits outside the nav surface, top-aligned on the right. */
function CollapseRail() {
  return (
    <div className="border-border bg-muted/20 flex w-9 shrink-0 flex-col items-center border-l pt-2">
      <SidebarCollapseTrigger className="shrink-0" />
    </div>
  );
}

function PreviewChrome({ children }: { children: ReactNode }) {
  return (
    <div className="border-border inline-flex h-[min(90dvh,900px)] overflow-hidden rounded-xl border bg-background shadow-sm">
      {children}
    </div>
  );
}

/**
 * Docs preview: sidebar only (no `AppShell`). Collapse control is outside the nav, top-right.
 */
export function SaasShellPreview() {
  return (
    <SidebarProvider defaultCollapsed={false}>
      <PreviewChrome>
        <SidebarColumn>
          <StandaloneSidebarChrome>
            <SidebarHeader className="text-foreground font-semibold">
              Acme
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav>
                <SidebarNavLink href="#" isActive>
                  <SquaresFour className="size-4" weight="bold" />
                  Dashboard
                </SidebarNavLink>
                <SidebarNavLink href="#">
                  <Users className="size-4" weight="bold" />
                  Customers
                </SidebarNavLink>
                <SidebarNavLink href="#">
                  <ChartBar className="size-4" weight="bold" />
                  Analytics
                </SidebarNavLink>
                <SidebarNavLink href="#">
                  <CreditCard className="size-4" weight="bold" />
                  Billing
                </SidebarNavLink>
              </SidebarNav>
              <SidebarNavGroup label="Workspace" defaultOpen>
                <SidebarNavLink href="#">
                  <FolderOpen className="size-4" weight="bold" />
                  Projects
                </SidebarNavLink>
                <SidebarNavLink href="#">
                  <GearSix className="size-4" weight="bold" />
                  Settings
                </SidebarNavLink>
              </SidebarNavGroup>
            </SidebarContent>
            <SidebarFooter className="text-muted-foreground">
              <div
                data-sidebar-persist=""
                className="flex w-full min-w-0 items-center gap-2 group-data-[collapsed=true]/sidebar:flex-col group-data-[collapsed=true]/sidebar:items-center group-data-[collapsed=true]/sidebar:gap-2"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="ring-offset-background focus-visible:ring-ring rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      <Avatar className="size-8 shrink-0">
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=acme"
                          alt=""
                        />
                        <AvatarFallback className="text-xs">AC</AvatarFallback>
                      </Avatar>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8}>
                    Account · Sign out
                  </TooltipContent>
                </Tooltip>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground h-8 shrink px-2 text-xs group-data-[collapsed=true]/sidebar:sr-only"
                >
                  Sign out
                </Button>
              </div>
            </SidebarFooter>
          </StandaloneSidebarChrome>
        </SidebarColumn>
        <CollapseRail />
      </PreviewChrome>
    </SidebarProvider>
  );
}
