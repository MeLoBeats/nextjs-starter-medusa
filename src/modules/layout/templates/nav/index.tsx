import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AppLogo from "@modules/layout/app-logo"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-background border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <AppLogo />
          <NavCart />
        </nav>
      </header>
    </div>
  )
}

const NavCart = () => (
  <Suspense
      fallback={
        <LocalizedClientLink
          className="hover:text-ui-fg-base flex gap-2"
          href="/cart"
          data-testid="nav-cart-link"
        >
          Mon panier (0)
        </LocalizedClientLink>
      }
    >
      <CartButton />
    </Suspense>
)