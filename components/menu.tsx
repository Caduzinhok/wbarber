import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MenuIcon } from 'lucide-react'


export const menuObj = [
  { name: 'Sobre', href: '#Sobre' },
  { name: 'Nossos Serviços', href: '#Nossos_servicos' },
  { name: 'Depoimentos', href: '#Depoimentos' },
  { name: 'Equipe', href: '#' },
  { name: 'Entre em Contato', href: '#Contato' },
]

export default function MenuNavbar() {
  return (
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 font-semibold focus:outline-none">
          <MenuIcon className='size-10 text-white' />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="flex flex-col p-4 max-w-max origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {menuObj.map((item) => (
              <MenuItem key={item.name}>
                <a href={item.href} className=' text-white'>
                  {item.name}
                </a>
              </MenuItem>
            ))}            
        </MenuItems>
      </Menu>
  )
}
