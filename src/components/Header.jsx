
import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import ContactUsButton from './ContactUsButton'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    const [navigateToHome, setNavigateToHome] = useState(false)
    const [navigateToTimezones, setNavigateToTimezones] = useState(false)
    const [navigateToCalendars, setNavigateToCalendars] = useState(false)
    const [navigateToHistorical, setNavigateToHistorical] = useState(false)
    const [navigateToAnnual, setNavigateToAnnual] = useState(false)

    useEffect(() => {
        if (navigateToHome) {
            navigate('/')
            setNavigateToHome(false)
        }
        if (navigateToTimezones) {
            navigate('/timezones')
            setNavigateToTimezones(false)

        }
        if (navigateToCalendars) {
            navigate('/calendars')
            setNavigateToCalendars(false)
        }
        if (navigateToHistorical) {
            navigate('/historicaltimelines')
            setNavigateToHistorical(false)
        }
        if (navigateToAnnual) {
            navigate('/annualwwevents')
            setNavigateToAnnual(false)
        }
        else {
            console.log('Navigation did not occur')
        }
        return (console.log('Navigated'))
    }, [navigateToHome, navigateToAnnual, navigateToCalendars, navigateToHistorical, navigateToTimezones])


    return (

        <header className='bg-our-bg' style={{ top: '0', position: 'sticky' }}  >
            <nav aria-label="Global" className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <button onClick={() => setNavigateToHome(true)} className='exo-2 text-4xl mb-2'>Thexactime</button>
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
                    <Popover className="relative">


                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >

                        </PopoverPanel>
                    </Popover>

                    <button onClick={() => setNavigateToTimezones(true)} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Time Zones</button>
                    <button onClick={() => setNavigateToCalendars(true)} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Calendars</button>
                    <button onClick={() => setNavigateToHistorical(true)} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Historical Timelines</button>
                    <button onClick={() => setNavigateToAnnual(true)} className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'>Annual Worldwide Events</button>

                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ContactUsButton onClick={() => setNavigateToHome(true)} >Contact Us</ContactUsButton>

                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-our-bg" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="../public/cropped_image.ico"
                                className="h-8 w-auto"
                            />
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

                                <button onClick={() => setNavigateToTimezones(true)} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Time Zones</button>
                                <button onClick={() => setNavigateToCalendars(true)} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Calendars</button>
                                <button onClick={() => setNavigateToHistorical(true)} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Historical Timelines</button>
                                <button onClick={() => setNavigateToAnnual(true)} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Annual Worldwide Events</button>

                            </div>
                            <div className="py-6">
                                <ContactUsButton onClick={() => setNavigateToHome(true)} >Contact Us</ContactUsButton>

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
            <hr className="h-px mb-10 h-0.5 border-0 bg-our-black" />

        </header>
    )
}
