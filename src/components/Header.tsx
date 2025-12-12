import {
  Link
} from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'


export const Menu = ({
  menus,
}: {
  menus: Array<{
    label: string
    to: string
  }>
}) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {
            menus.map((menu) => (
              <NavigationMenuItem key={menu.label}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to={menu.to}>{menu.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          }
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default function Header() {
  const menus = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'todo',
      to: '/todos',
    },
  ]

  return (
    <>
      <div className="h-[60px] flex items-center justify-start gap-4 border border-gray-500 my-4 p-4 rounded-lg">
        <Menu menus={menus}></Menu>
      </div>
    </>
  )
}
