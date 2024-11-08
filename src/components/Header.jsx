import { useEffect, useState } from 'react'
import Logo from '../assets/cropped_image.png'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import ContactUsButton from './ContactUsButton'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const navigateTo = (path) => {
        setMobileMenuOpen(false); // Close mobile menu after navigation
        navigate(path);
    };

    return (
        <header className='bg-white shadow-xl rounded-xl  top-0 z-10 mt-6 border border-gray-100'>
            <nav aria-label="Global" className=" mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Ingla</span>
                        <button onClick={() => navigateTo('/')} className='exo-2 text-4xl mb-2'>Thexactime</button>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <button onClick={() => navigateTo('/timezones')} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Timezones</button>

                    <button onClick={() => navigateTo('/calendars')} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Calendars</button>
                    <button onClick={() => navigateTo('/historicaltimelines')} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Historical Timelines</button>
                    <button onClick={() => navigateTo('/annualwwevents')} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Annual Events</button>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ContactUsButton onClick={() => navigateTo('/')} >Contact Us</ContactUsButton>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-black opacity-30" />
                <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={Logo} className="h-8 w-auto" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <button onClick={() => navigateTo('/timezones')} className='-mx-3 block rounded-lg px-3 py-2'>Time Zones</button>
                                <button onClick={() => navigateTo('/calendars')} className='-mx-3 block rounded-lg px-3 py-2'>Calendars</button>
                                <button onClick={() => navigateTo('/historicaltimelines')} className='-mx-3 block rounded-lg px-3 py-2'>Historical Timelines</button>
                                <button onClick={() => navigateTo('/annualwwevents')} className='-mx-3 block rounded-lg px-3 py-2'>Annual Worldwide Events</button>
                            </div>
                            <div className="py-6">
                                <ContactUsButton onClick={() => navigateTo('/')} >Contact Us</ContactUsButton>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
