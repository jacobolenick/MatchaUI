export type ComponentEntry = {
  slug: string;
  title: string;
  description: string;
  code: string;
};

export const componentRegistry: ComponentEntry[] = [
  {
    slug: "accordion",
    title: "Accordion",
    description: "Stacked sections for FAQs, settings, and nested content.",
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "matcha-ui";

<Accordion type="single" collapsible className="w-full max-w-md">
  <AccordionItem value="one">
    <AccordionTrigger>Is Matcha UI responsive?</AccordionTrigger>
    <AccordionContent>
      Yes. Components use Tailwind breakpoints and fluid layouts for mobile-first SaaS UIs.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    slug: "alert",
    title: "Alert",
    description: "Inline status and feedback messages.",
    code: `import { Alert, AlertDescription, AlertTitle } from "matcha-ui";
import { Terminal } from "phosphor-react";

<Alert>
  <Terminal size={18} weight="bold" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>
    You can add Matcha UI to your app with npm.
  </AlertDescription>
</Alert>`,
  },
  {
    slug: "alert-dialog",
    title: "Alert Dialog",
    description: "Modal confirmations for destructive or critical actions.",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "matcha-ui";
import { Button } from "matcha-ui";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },
  {
    slug: "avatar",
    title: "Avatar",
    description: "User images with graceful fallback initials.",
    code: `import { Avatar, AvatarFallback, AvatarImage } from "matcha-ui";

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>MU</AvatarFallback>
</Avatar>`,
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Compact labels for status, plans, and metadata.",
    code: `import { Badge } from "matcha-ui";

<div className="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Pro</Badge>
  <Badge variant="outline">Trial</Badge>
</div>`,
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb",
    description: "Hierarchical navigation for nested app routes.",
    code: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "matcha-ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Settings</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    slug: "button",
    title: "Button",
    description: "Primary actions, links-as-buttons, and icon affordances.",
    code: `import { Button } from "matcha-ui";

<div className="flex flex-wrap gap-2">
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
</div>`,
  },
  {
    slug: "card",
    title: "Card",
    description:
      "Content containers for dashboards, pricing, and summaries.",
    code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "matcha-ui";

<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Revenue</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl font-semibold">$12,450</p>
  </CardContent>
</Card>`,
  },
  {
    slug: "line-chart",
    title: "Line Chart Card",
    description: "Responsive time-series charts for metrics dashboards.",
    code: `import { LineChartCard } from "matcha-ui";

const data = [
  { label: "Jan", value: 12000 },
  { label: "Feb", value: 13500 },
  { label: "Mar", value: 12800 },
  { label: "Apr", value: 15400 },
  { label: "May", value: 17100 },
  { label: "Jun", value: 16000 },
];

<LineChartCard
  title="Monthly revenue"
  description="Last 6 months"
  data={data}
/>`,
  },
  {
    slug: "bar-chart",
    title: "Bar Chart Card",
    description: "Responsive category charts for SaaS reports and KPIs.",
    code: `import { BarChartCard } from "matcha-ui";

const data = [
  { label: "Mon", value: 34 },
  { label: "Tue", value: 41 },
  { label: "Wed", value: 28 },
  { label: "Thu", value: 52 },
  { label: "Fri", value: 47 },
];

<BarChartCard
  title="Weekly signups"
  description="New users per day"
  data={data}
/>`,
  },
  {
    slug: "donut-chart",
    title: "Donut Chart Card",
    description: "Responsive distribution charts for plans and segments.",
    code: `import { DonutChartCard } from "matcha-ui";

const data = [
  { label: "Free", value: 38 },
  { label: "Pro", value: 46 },
  { label: "Enterprise", value: 16 },
];

<DonutChartCard
  title="Subscribers by plan"
  description="Current mix"
  data={data}
/>`,
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    description: "Multi-select controls for tables and forms.",
    code: `import { Checkbox } from "matcha-ui";
import { Label } from "matcha-ui";

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,
  },
  {
    slug: "command",
    title: "Command",
    description: "Command palette and searchable lists (⌘K patterns).",
    code: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "matcha-ui";

<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Search…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  },
  {
    slug: "dialog",
    title: "Dialog",
    description: "Modal surfaces for forms, media, and focused tasks.",
    code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "matcha-ui";
import { Button } from "matcha-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes here.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    description: "Actions, navigation, and account menus.",
    code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "matcha-ui";
import { Button } from "matcha-ui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>My account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    slug: "input",
    title: "Input",
    description: "Text fields sized for forms and filters.",
    code: `import { Input } from "matcha-ui";
import { Label } from "matcha-ui";

<div className="grid w-full max-w-sm gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@company.com" />
</div>`,
  },
  {
    slug: "label",
    title: "Label",
    description: "Accessible labels paired with form controls.",
    code: `import { Input } from "matcha-ui";
import { Label } from "matcha-ui";

<div className="grid gap-2 max-w-sm">
  <Label htmlFor="name">Display name</Label>
  <Input id="name" />
</div>`,
  },
  {
    slug: "navigation-menu",
    title: "Navigation Menu",
    description: "Top-level product navigation with mega-menu support.",
    code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "matcha-ui";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-2 p-4 w-[220px]">
          <li>
            <NavigationMenuLink href="#">Analytics</NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },
  {
    slug: "pagination",
    title: "Pagination",
    description: "Table and list paging controls.",
    code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "matcha-ui";

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  },
  {
    slug: "popover",
    title: "Popover",
    description: "Anchored floating content for pickers and previews.",
    code: `import { Button } from "matcha-ui";
import { Popover, PopoverContent, PopoverTrigger } from "matcha-ui";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <p className="text-sm">Contextual help or filters go here.</p>
  </PopoverContent>
</Popover>`,
  },
  {
    slug: "progress",
    title: "Progress",
    description: "Determinate progress for uploads and onboarding.",
    code: `import { Progress } from "matcha-ui";

<Progress value={66} className="max-w-sm" />`,
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    description: "Single-choice options in forms and settings.",
    code: `import { Label } from "matcha-ui";
import { RadioGroup, RadioGroupItem } from "matcha-ui";

<RadioGroup defaultValue="monthly" className="grid gap-2 max-w-xs">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="monthly" id="m" />
    <Label htmlFor="m">Monthly</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="annual" id="a" />
    <Label htmlFor="a">Annual</Label>
  </div>
</RadioGroup>`,
  },
  {
    slug: "scroll-area",
    title: "Scroll Area",
    description: "Custom scrollbars for sidebars and logs.",
    code: `import { ScrollArea } from "matcha-ui";

<ScrollArea className="h-32 w-full max-w-sm rounded-md border p-4">
  <div className="space-y-2 text-sm">
    {Array.from({ length: 12 }).map((_, i) => (
      <p key={i}>Line {i + 1} of scrollable content</p>
    ))}
  </div>
</ScrollArea>`,
  },
  {
    slug: "select",
    title: "Select",
    description: "Native-feeling selects for forms and filters.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "matcha-ui";

<Select defaultValue="pro">
  <SelectTrigger className="max-w-xs">
    <SelectValue placeholder="Plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="free">Free</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
  </SelectContent>
</Select>`,
  },
  {
    slug: "separator",
    title: "Separator",
    description: "Visual dividers in menus, settings, and layouts.",
    code: `import { Separator } from "matcha-ui";

<div className="flex flex-col gap-2 max-w-xs">
  <span>Section A</span>
  <Separator />
  <span>Section B</span>
</div>`,
  },
  {
    slug: "sheet",
    title: "Sheet",
    description: "Slide-over panels for mobile navigation and quick edits.",
    code: `import { Button } from "matcha-ui";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "matcha-ui";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Refine your view.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    description: "Loading placeholders for dashboards and tables.",
    code: `import { Skeleton } from "matcha-ui";

<div className="flex flex-col gap-2 max-w-sm">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="h-24 w-full" />
</div>`,
  },
  {
    slug: "slider",
    title: "Slider",
    description: "Numeric range input for filters and settings.",
    code: `import { Slider } from "matcha-ui";

<Slider defaultValue={[40]} max={100} step={1} className="max-w-sm" />`,
  },
  {
    slug: "sonner",
    title: "Sonner (Toast)",
    description: "Stacked toast notifications for async feedback.",
    code: `import { Toaster } from "matcha-ui";
import { toast } from "sonner";

// In your root layout:
<Toaster richColors closeButton />

// Anywhere in the app:
toast.success("Workspace created");`,
  },
  {
    slug: "switch",
    title: "Switch",
    description: "Binary toggles for feature flags and preferences.",
    code: `import { Label } from "matcha-ui";
import { Switch } from "matcha-ui";

<div className="flex items-center gap-2">
  <Switch id="notify" />
  <Label htmlFor="notify">Email notifications</Label>
</div>`,
  },
  {
    slug: "table",
    title: "Table",
    description: "Responsive data tables with horizontal scroll on small screens.",
    code: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "matcha-ui";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Customer</TableHead>
      <TableHead className="text-right">MRR</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Acme Co</TableCell>
      <TableCell className="text-right">$120</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Switch between related views without new routes.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "matcha-ui";

<Tabs defaultValue="overview" className="w-full max-w-md">
  <TabsList className="w-full sm:w-auto">
    <TabsTrigger value="overview" className="flex-1 sm:flex-initial">
      Overview
    </TabsTrigger>
    <TabsTrigger value="billing" className="flex-1 sm:flex-initial">
      Billing
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Account overview</TabsContent>
  <TabsContent value="billing">Invoices and payment method</TabsContent>
</Tabs>`,
  },
  {
    slug: "textarea",
    title: "Textarea",
    description: "Multi-line text for notes, comments, and descriptions.",
    code: `import { Label } from "matcha-ui";
import { Textarea } from "matcha-ui";

<div className="grid w-full max-w-md gap-2">
  <Label htmlFor="msg">Message</Label>
  <Textarea id="msg" placeholder="Write something…" rows={4} />
</div>`,
  },
  {
    slug: "collapsible",
    title: "Collapsible",
    description: "Expandable sections for settings, filters, and nested nav.",
    code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "matcha-ui";

<Collapsible>
  <CollapsibleTrigger>Advanced</CollapsibleTrigger>
  <CollapsibleContent>
    Extra options go here.
  </CollapsibleContent>
</Collapsible>`,
  },
  {
    slug: "sidebar",
    title: "Sidebar navigation",
    description:
      "Collapsible rail, groups, tooltips, and optional `AppShell` when you need a mobile sheet plus main pane.",
    code: `import {
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
} from "matcha-ui";

const sidebar = (
  <>
    <SidebarHeader>Acme</SidebarHeader>
    <SidebarContent>
      <SidebarNav>
        <SidebarNavLink href="/app" isActive>
          Dashboard
        </SidebarNavLink>
        <SidebarNavLink href="/customers">Customers</SidebarNavLink>
      </SidebarNav>
      <SidebarNavGroup label="Workspace" defaultOpen>
        <SidebarNavLink href="/projects">Projects</SidebarNavLink>
      </SidebarNavGroup>
    </SidebarContent>
    <SidebarFooter>
      <div data-sidebar-persist="" className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarImage src="/avatar.jpg" alt="" />
          <AvatarFallback>YO</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="sm" className="text-xs">
          Sign out
        </Button>
      </div>
    </SidebarFooter>
  </>
);

<SidebarProvider>
  <div className="flex h-screen">
    <aside className="flex w-64 flex-col border-r">{sidebar}</aside>
    <div className="flex w-9 flex-col items-center border-l pt-2">
      <SidebarCollapseTrigger />
    </div>
    <main className="flex-1">{/* page */}</main>
  </div>
</SidebarProvider>`,
  },
  {
    slug: "page-header",
    title: "Page header",
    description: "Title, optional description, and action buttons for app pages.",
    code: `import { Button } from "matcha-ui";
import { PageHeader } from "matcha-ui";

<PageHeader
  title="Customers"
  description="Manage invitations and billing contacts."
  actions={<Button size="sm">Invite</Button>}
/>`,
  },
  {
    slug: "empty-state",
    title: "Empty state",
    description: "Placeholder panels for empty lists, search results, and onboarding.",
    code: `import { Button } from "matcha-ui";
import { EmptyState } from "matcha-ui";
import { Tray } from "phosphor-react";

<EmptyState
  icon={Tray}
  title="No projects"
  description="Create a project to get started."
  action={<Button size="sm">Create project</Button>}
/>`,
  },
  {
    slug: "kpi-card",
    title: "KPI card",
    description: "Metric tiles for dashboards (MRR, usage, churn).",
    code: `import { KpiCard } from "matcha-ui";

<div className="grid gap-4 sm:grid-cols-3">
  <KpiCard label="MRR" value="$48.2k" hint="+12% MoM" />
  <KpiCard label="Seats" value="42" />
</div>`,
  },
  {
    slug: "data-table-toolbar",
    title: "Data table toolbar",
    description: "Search and actions row above dense data tables.",
    code: `import { Button } from "matcha-ui";
import { DataTableToolbar } from "matcha-ui";
import { Input } from "matcha-ui";

<DataTableToolbar
  start={<Input placeholder="Search…" className="max-w-xs" />}
  end={<Button variant="outline" size="sm">Columns</Button>}
/>`,
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    description: "Contextual hints for dense interfaces.",
    code: `import { Button } from "matcha-ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "matcha-ui";

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      ?
    </Button>
  </TooltipTrigger>
  <TooltipContent>Keyboard shortcut: ⌘K</TooltipContent>
</Tooltip>`,
  },
];

export function getComponentBySlug(slug: string) {
  return componentRegistry.find((c) => c.slug === slug);
}
