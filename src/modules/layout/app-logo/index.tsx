import LocalizedClientLink from '@modules/common/components/localized-client-link';
import AppLogoIcon from './icon';
import { twMerge } from "tailwind-merge"

export default function AppLogo({ dark = false}: { dark?: boolean }) {
    return (
        <LocalizedClientLink href='/' className='flex items-center justify-center gap-2'>
            <div className="flex aspect-square size-14 items-center justify-center rounded-md">
                <AppLogoIcon className={twMerge("size-32 fill-current", dark ? 'text-black' : 'text-white')} />
            </div>
            <div className="grid flex-1 text-left text-sm">
                <span className={twMerge("mb-0.5 truncate leading-tight tracking-tight text-lg font-bold", dark ? 'text-black' : 'text-white')}>NOKTRA Studio.</span>
            </div>
        </LocalizedClientLink>
    );
}
