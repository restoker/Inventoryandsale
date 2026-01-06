'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { useViewTransition } from '@/hooks/useViewTransition'

const navigation = [
    { name: 'Home', href: '/dashboard/home', icon: HomeIcon, current: true },
    { name: 'Vender', href: '/dashboard/sell', icon: UsersIcon, current: false },
    { name: 'Kardex', href: '/dashboard/kardex', icon: FolderIcon, current: false },
    // { name: 'R', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reportes', href: '/dashboard/reports', icon: ChartPieIcon, current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { navigateWithTransition } = useViewTransition();
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                </button>
                            </div>
                        </TransitionChild>

                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 before:pointer-events-none before:absolute before:inset-0 before:border-r before:border-white/10 before:bg-black/10">
                            <div className="relative flex h-16 shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=amber&shade=400"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <nav className="relative flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-white/5 text-white'
                                                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                item.current ? 'text-white' : 'text-gray-500 group-hover:text-white',
                                                                'size-6 shrink-0',
                                                            )}
                                                        />
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs/6 font-semibold text-gray-500">Your teams</div>
                                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                                            {teams.map((team) => (
                                                <li key={team.name}>
                                                    <a
                                                        href={team.href}
                                                        className={classNames(
                                                            team.current
                                                                ? 'bg-white/5 text-white'
                                                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                        )}
                                                    >
                                                        <span
                                                            className={classNames(
                                                                team.current
                                                                    ? 'border-white/20 text-white'
                                                                    : 'border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-white',
                                                                'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white/5 text-[0.625rem] font-medium',
                                                            )}
                                                        >
                                                            {team.initial}
                                                        </span>
                                                        <span className="truncate">{team.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-white/10 bg-zinc-800 px-6 before:pointer-events-none before:absolute before:inset-0 before:bg-black/10">
                    <div className="relative flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=amber&shade=500"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="relative flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <button
                                                onClick={() => navigateWithTransition(item.href)}
                                                className={classNames(
                                                    pathName === item.href ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        pathName === item.href ? 'text-white' : 'text-gray-500 group-hover:text-white',
                                                        'size-6 shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs/6 font-semibold text-gray-500">Your teams</div>
                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={classNames(
                                                    team.current ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                )}
                                            >
                                                <span
                                                    className={classNames(
                                                        team.current
                                                            ? 'border-white/20 text-white'
                                                            : 'border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-white',
                                                        'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white/5 text-[0.625rem] font-medium',
                                                    )}
                                                >
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">{team.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto">
                                <Menu as="div" className="relative">
                                    <MenuButton className="relative flex w-full justify-center gap-4 items-center rounded-t-2xl bg-amber-400 hover:bg-amber-500 transition-colors outline-0">
                                        {/* <span className="absolute -inset-1.5" /> */}
                                        <img
                                            alt=""
                                            src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                                            className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                                        />
                                        <span className="text-white">Opciones</span>

                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        className="absolute -top-29 right-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-950/5 backdrop-blur-2xl py-1 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 before:pointer-events-none before:absolute before:inset-0 before:border-b before:border-white/10 before:bg-black/10 sm:px-6 lg:hidden">
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="relative -m-2.5 p-2.5 text-gray-400 lg:hidden"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
                <div className="relative flex-1 text-sm/6 font-semibold text-white">
                    Dashboard
                </div>
                <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                            alt=""
                            src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                            className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                        />
                    </MenuButton>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                                <button
                                    onClick={() => navigateWithTransition(item.href)}
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                >
                                    {item.name}
                                </button>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            </div>

            <main className="lg:pl-72">
                <div className="xl:pr-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        {/* your content here */}
                        {children}
                    </div>
                </div>
            </main>


        </div>
    )
}

export default LayoutDashboard