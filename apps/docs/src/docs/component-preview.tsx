"use client";

import * as React from "react";
import { Terminal, Tray } from "phosphor-react";
import { toast } from "sonner";
import { SaasShellPreview } from "./saas-shell-preview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  LineChartCard,
  BarChartCard,
  DonutChartCard,
  DataTableToolbar,
  EmptyState,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  KpiCard,
  Label,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "matcha-ui";

const previews: Record<string, React.ReactNode> = {
  accordion: (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="one">
        <AccordionTrigger>Is Matcha UI responsive?</AccordionTrigger>
        <AccordionContent>
          Yes. Components use Tailwind breakpoints and fluid layouts for
          mobile-first SaaS UIs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Does it work with Next.js?</AccordionTrigger>
        <AccordionContent>
          Yes. Add <code className="text-xs">transpilePackages: [&quot;matcha-ui&quot;]</code>{" "}
          to your Next config.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  alert: (
    <Alert className="max-w-md">
      <Terminal size={18} weight="bold" className="shrink-0" />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        You can add Matcha UI to your app with npm.
      </AlertDescription>
    </Alert>
  ),
  "alert-dialog": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  avatar: (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>MU</AvatarFallback>
    </Avatar>
  ),
  badge: (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Pro</Badge>
      <Badge variant="destructive">Action</Badge>
      <Badge variant="outline">Trial</Badge>
    </div>
  ),
  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Settings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  button: (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  card: (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tabular-nums">$12,450</p>
      </CardContent>
    </Card>
  ),
  "line-chart": (
    <div className="w-full max-w-2xl">
      <LineChartCard
        title="Monthly revenue"
        description="Last 6 months"
        data={[
          { label: "Jan", value: 12000 },
          { label: "Feb", value: 13500 },
          { label: "Mar", value: 12800 },
          { label: "Apr", value: 15400 },
          { label: "May", value: 17100 },
          { label: "Jun", value: 16000 },
        ]}
      />
    </div>
  ),
  "bar-chart": (
    <div className="w-full max-w-2xl">
      <BarChartCard
        title="Weekly signups"
        description="New users per day"
        data={[
          { label: "Mon", value: 34 },
          { label: "Tue", value: 41 },
          { label: "Wed", value: 28 },
          { label: "Thu", value: 52 },
          { label: "Fri", value: 47 },
        ]}
      />
    </div>
  ),
  "donut-chart": (
    <div className="w-full max-w-2xl">
      <DonutChartCard
        title="Subscribers by plan"
        description="Current mix"
        data={[
          { label: "Free", value: 38 },
          { label: "Pro", value: 46 },
          { label: "Enterprise", value: 16 },
        ]}
        height={240}
      />
    </div>
  ),
  "data-table-toolbar": (
    <div className="w-full max-w-2xl">
      <DataTableToolbar
        start={<Input placeholder="Search…" className="max-w-xs" />}
        end={
          <Button variant="outline" size="sm" type="button">
            Columns
          </Button>
        }
      />
    </div>
  ),
  "empty-state": (
    <div className="max-w-lg">
      <EmptyState
        icon={Tray}
        title="No projects yet"
        description="Create a project to organize API keys and environments."
        action={
          <Button type="button" size="sm">
            Create project
          </Button>
        }
      />
    </div>
  ),
  "kpi-card": (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
      <KpiCard label="MRR" value="$48.2k" hint="+12% MoM" />
      <KpiCard label="Seats" value="42" />
      <KpiCard label="Trials" value="128" />
    </div>
  ),
  "page-header": (
    <div className="w-full max-w-3xl border-x">
      <PageHeader
        title="Customers"
        description="Manage invitations and billing contacts."
        actions={
          <Button size="sm" type="button">
            Invite
          </Button>
        }
      />
    </div>
  ),
  sidebar: <SaasShellPreview />,
  checkbox: (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-demo" />
      <Label htmlFor="terms-demo">Accept terms</Label>
    </div>
  ),
  collapsible: (
    <Collapsible className="w-full max-w-md rounded-lg border p-4">
      <CollapsibleTrigger className="hover:bg-accent/50 flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium">
        Advanced settings
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground mt-2 px-2 text-sm">
        Extra workspace options appear here.
      </CollapsibleContent>
    </Collapsible>
  ),
  command: (
    <Command className="max-w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Settings</CommandItem>
          <CommandItem>Invite team</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes here.</DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">Dialog body content.</p>
      </DialogContent>
    </Dialog>
  ),
  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  input: (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email-demo">Email</Label>
      <Input id="email-demo" type="email" placeholder="you@company.com" />
    </div>
  ),
  label: (
    <div className="grid gap-2 max-w-sm">
      <Label htmlFor="name-demo">Display name</Label>
      <Input id="name-demo" />
    </div>
  ),
  "navigation-menu": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[220px] gap-2 p-4">
              <li>
                <NavigationMenuLink
                  className="hover:bg-accent block rounded-md p-2 text-sm"
                  href="#"
                >
                  Analytics
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  className="hover:bg-accent block rounded-md p-2 text-sm"
                  href="#"
                >
                  Automation
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  pagination: (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive onClick={(e) => e.preventDefault()}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={(e) => e.preventDefault()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  popover: (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="text-sm">Contextual help or filters go here.</p>
      </PopoverContent>
    </Popover>
  ),
  progress: <Progress value={66} className="max-w-sm" />,
  "radio-group": (
    <RadioGroup defaultValue="monthly" className="grid max-w-xs gap-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="m-demo" />
        <Label htmlFor="m-demo">Monthly</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="annual" id="a-demo" />
        <Label htmlFor="a-demo">Annual</Label>
      </div>
    </RadioGroup>
  ),
  "scroll-area": (
    <ScrollArea className="h-32 w-full max-w-sm rounded-md border p-4">
      <div className="space-y-2 text-sm">
        {Array.from({ length: 12 }).map((_, i) => (
          <p key={i}>Line {i + 1} of scrollable content</p>
        ))}
      </div>
    </ScrollArea>
  ),
  select: (
    <Select defaultValue="pro">
      <SelectTrigger className="max-w-xs">
        <SelectValue placeholder="Plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
      </SelectContent>
    </Select>
  ),
  separator: (
    <div className="flex max-w-xs flex-col gap-2">
      <span>Section A</span>
      <Separator />
      <span>Section B</span>
    </div>
  ),
  sheet: (
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
    </Sheet>
  ),
  skeleton: (
    <div className="flex max-w-sm flex-col gap-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-24 w-full" />
    </div>
  ),
  slider: <Slider defaultValue={[40]} max={100} step={1} className="max-w-sm" />,
  sonner: (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" onClick={() => toast.success("Saved")}>
        Success toast
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={() => toast.error("Something went wrong")}
      >
        Error toast
      </Button>
    </div>
  ),
  switch: (
    <div className="flex items-center gap-2">
      <Switch id="notify-demo" />
      <Label htmlFor="notify-demo">Email notifications</Label>
    </div>
  ),
  table: (
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
        <TableRow>
          <TableCell>Globex</TableCell>
          <TableCell className="text-right">$340</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  tabs: (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="overview" className="flex-1 sm:flex-initial">
          Overview
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex-1 sm:flex-initial">
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm">
        Account overview
      </TabsContent>
      <TabsContent value="billing" className="text-sm">
        Invoices and payment method
      </TabsContent>
    </Tabs>
  ),
  textarea: (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor="msg-demo">Message</Label>
      <Textarea id="msg-demo" placeholder="Write something…" rows={4} />
    </div>
  ),
  tooltip: (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Help">
          ?
        </Button>
      </TooltipTrigger>
      <TooltipContent>Keyboard shortcut: ⌘K</TooltipContent>
    </Tooltip>
  ),
};

export function ComponentPreview({ slug }: { slug: string }) {
  return previews[slug] ?? <p className="text-muted-foreground text-sm">Preview not found.</p>;
}
