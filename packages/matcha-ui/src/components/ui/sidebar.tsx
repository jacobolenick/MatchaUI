"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronDown, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { Separator } from "./separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

/* ——— Context ——— */

type SidebarContextValue = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

/** Mobile sheet always shows full labels; desktop rail uses `collapsed`. */
function SidebarSheetBranch({ children }: { children: React.ReactNode }) {
  const parent = useSidebar();
  const value = React.useMemo(
    () => ({
      ...parent,
      collapsed: false,
    }),
    [parent]
  );
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within SidebarProvider or AppShell.");
  }
  return ctx;
}

export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const toggleCollapsed = React.useCallback(
    () => setCollapsed((c) => !c),
    []
  );
  const value = React.useMemo(
    () => ({
      mobileOpen,
      setMobileOpen,
      collapsed,
      setCollapsed,
      toggleCollapsed,
    }),
    [mobileOpen, collapsed, toggleCollapsed]
  );
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarContext.Provider value={value}>
        {children}
      </SidebarContext.Provider>
    </TooltipProvider>
  );
}

/* ——— App shell (desktop sidebar + mobile sheet) ——— */

export function AppShell({
  sidebar,
  children,
  className,
  defaultCollapsed = false,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Desktop sidebar starts collapsed (icon rail). Mobile sheet is unchanged. */
  defaultCollapsed?: boolean;
}) {
  return (
    <SidebarProvider defaultCollapsed={defaultCollapsed}>
      <AppShellLayout sidebar={sidebar} className={className}>
        {children}
      </AppShellLayout>
    </SidebarProvider>
  );
}

function AppShellLayout({
  sidebar,
  children,
  className,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const { mobileOpen, setMobileOpen, collapsed } = useSidebar();
  return (
    <div
      className={cn(
        "bg-background flex min-h-screen w-full flex-col md:flex-row",
        className
      )}
    >
      <aside
        data-collapsed={collapsed ? "true" : undefined}
        className={cn(
          "group/sidebar bg-muted/30 hidden min-h-0 min-w-0 shrink-0 flex-col overflow-hidden border-r transition-[width] duration-200 ease-out md:flex",
          collapsed ? "md:w-14" : "md:w-64"
        )}
        aria-label="Application navigation"
      >
        {sidebar}
      </aside>
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="flex w-[min(100vw-1rem,20rem)] flex-col gap-0 overflow-y-auto p-0"
          aria-describedby={undefined}
        >
          <SheetHeader className="border-b px-4 py-3 text-left">
            <SheetTitle className="text-base">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto">
            <SidebarSheetBranch>{sidebar}</SidebarSheetBranch>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

/* ——— Mobile menu button ——— */

export function SidebarMobileTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setMobileOpen } = useSidebar();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("size-9 md:hidden", className)}
      onClick={() => setMobileOpen(true)}
      aria-label="Open navigation menu"
      {...props}
    >
      <Menu className="size-5" />
    </Button>
  );
}

export function SidebarTopBar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-4 md:hidden",
        className
      )}
      {...props}
    >
      <SidebarMobileTrigger />
      {children}
    </div>
  );
}

/** Desktop header row: collapse control + optional title/actions (hidden on small screens). */
export function SidebarDesktopBar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-background hidden h-14 shrink-0 items-center gap-2 border-b px-2 md:flex",
        className
      )}
      {...props}
    >
      <SidebarCollapseTrigger />
      {children}
    </div>
  );
}

export function SidebarCollapseTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { collapsed, toggleCollapsed } = useSidebar();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      data-sidebar-persist=""
      className={cn("size-9 shrink-0", className)}
      onClick={toggleCollapsed}
      aria-expanded={!collapsed}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      {...props}
    >
      {collapsed ? (
        <ChevronRight className="size-4" aria-hidden />
      ) : (
        <ChevronLeft className="size-4" aria-hidden />
      )}
    </Button>
  );
}

/* ——— Sidebar regions ——— */

export function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-14 shrink-0 items-center px-4 py-3 group-data-[collapsed=true]/sidebar:min-h-0 group-data-[collapsed=true]/sidebar:justify-center group-data-[collapsed=true]/sidebar:px-2 group-data-[collapsed=true]/sidebar:py-2 group-data-[collapsed=true]/sidebar:[&>*:not([data-sidebar-persist])]:sr-only",
        className
      )}
      {...props}
    />
  );
}

export function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-0 min-w-0 flex-1 flex-col gap-6 overflow-y-auto overflow-x-hidden p-4 group-data-[collapsed=true]/sidebar:gap-2 group-data-[collapsed=true]/sidebar:px-1.5 group-data-[collapsed=true]/sidebar:py-2",
        className
      )}
      {...props}
    />
  );
}

export function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-auto flex shrink-0 flex-col gap-2 border-t p-4 group-data-[collapsed=true]/sidebar:items-center group-data-[collapsed=true]/sidebar:px-2 group-data-[collapsed=true]/sidebar:py-2 group-data-[collapsed=true]/sidebar:[&>*:not([data-sidebar-persist])]:sr-only",
        className
      )}
      {...props}
    />
  );
}

export function SidebarNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

const sidebarLinkVariants = cva(
  "focus-visible:ring-ring flex w-full min-w-0 max-w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 group-data-[collapsed=true]/sidebar:gap-0 group-data-[collapsed=true]/sidebar:px-2 group-data-[collapsed=true]/sidebar:py-2 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      active: {
        true: "bg-accent text-accent-foreground",
        false:
          "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

function collectText(node: React.ReactNode): string {
  if (node == null || node === false || node === true) return "";
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(collectText).filter(Boolean).join(" ").trim();
  }
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    if (props.children != null) return collectText(props.children);
  }
  return "";
}

export type SidebarNavLinkProps = {
  asChild?: boolean;
  isActive?: boolean;
  /** Shown in tooltip when the rail is collapsed; defaults to text after the icon. */
  tooltip?: string;
} & React.ComponentProps<"a"> &
  VariantProps<typeof sidebarLinkVariants>;

export const SidebarNavLink = React.forwardRef<
  HTMLAnchorElement,
  SidebarNavLinkProps
>(({ className, asChild, isActive, tooltip, children, ...props }, ref) => {
  const { collapsed } = useSidebar();
  const Comp = asChild ? Slot : "a";

  if (asChild) {
    return (
      <Comp
        ref={ref}
        className={cn(sidebarLinkVariants({ active: isActive }), className)}
        data-active={isActive ? "" : undefined}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  const childArray = React.Children.toArray(children);
  const first = childArray[0];
  const icon = React.isValidElement(first) ? first : null;
  const labelNodes = icon ? childArray.slice(1) : [];
  const labelText = (tooltip ?? collectText(labelNodes)).trim();

  if (!icon) {
    return (
      <Comp
        ref={ref}
        className={cn(sidebarLinkVariants({ active: isActive }), className)}
        data-active={isActive ? "" : undefined}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  const anchor = (
    <Comp
      ref={ref}
      className={cn(
        sidebarLinkVariants({ active: isActive }),
        "group-data-[collapsed=true]/sidebar:justify-center",
        className
      )}
      data-active={isActive ? "" : undefined}
      {...props}
    >
      <span className="inline-flex shrink-0 [&_svg]:size-4">{icon}</span>
      {labelNodes.length > 0 ? (
        <span className="min-w-0 flex-1 truncate group-data-[collapsed=true]/sidebar:sr-only">
          {labelNodes}
        </span>
      ) : null}
    </Comp>
  );

  if (collapsed && labelText) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{anchor}</TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={8}
          className="max-w-[min(100vw-2rem,16rem)] text-balance"
        >
          {labelText}
        </TooltipContent>
      </Tooltip>
    );
  }

  return anchor;
});
SidebarNavLink.displayName = "SidebarNavLink";

export function SidebarNavGroup({
  label,
  defaultOpen = false,
  children,
  className,
}: {
  label: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const { collapsed } = useSidebar();
  if (collapsed) {
    return (
      <div className={cn("flex flex-col gap-1", className)}>{children}</div>
    );
  }
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className={cn("group/collapsible", className)}
    >
      <CollapsibleTrigger className="text-muted-foreground hover:bg-accent/50 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-semibold tracking-wide uppercase outline-none">
        <span>{label}</span>
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden">
        <div className="mt-1 flex flex-col gap-1 border-l border-border/80 pl-3">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator className={cn("my-2", className)} {...props} />
  );
}

export function SidebarInset({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("flex min-h-0 min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  );
}
