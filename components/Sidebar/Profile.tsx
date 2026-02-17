import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Button from '../Button'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/gihoekveld.png"
        alt=""
        className="h10 w-10 rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Giselle Hoekveld
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          gisellehoekveld.contato@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
