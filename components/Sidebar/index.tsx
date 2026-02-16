'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import Button from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
            <div className="space-y-1">
              <span className="text-sm/5 font-medium text-violet-700">
                Used space
              </span>
              <p className="leading text-sm/5 text-violet-500">
                Your team has used 80% of your available space. Need more?
              </p>
            </div>

            <div className="h-2 rounded-full bg-violet-100">
              <div className="h-2 w-4/5 rounded-full bg-violet-600" />
            </div>

            <UsedSpaceWidget />
          </div>

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
