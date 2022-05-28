export const MOBILE_SIDEBAR_CLASS = 'app-mobile-sidebar'
export const MOBILE_SIDEBAR_TOGGLER_CLASS = 'app-mobile-sidebar-toggler'

export function initMobileSidebarToggle() {
  const mobileSidebarElement =
    document.querySelector('.' + MOBILE_SIDEBAR_CLASS)
  const mobileSidebarTogglerElement =
    document.querySelector('.' + MOBILE_SIDEBAR_TOGGLER_CLASS)

  if (
    !mobileSidebarElement
    || !mobileSidebarTogglerElement
  ) {
    return false
  }

  console.log('FOUND MOBILE SIDEBAR')

  return true
}
