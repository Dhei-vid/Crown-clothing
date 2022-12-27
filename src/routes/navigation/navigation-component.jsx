import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
// Allows interaction from component with redux store
import { useSelector, useDispatch } from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon-component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component'

import { selectCartStatus } from '../../store/cart/cart.selectors'
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { userSignOutStart } from '../../store/user/user.action'

// import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink
} from './navigation-styles'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectCartStatus)
  const dispatch = useDispatch()

  console.log(currentUser)

  const signOutHandler = () => dispatch(userSignOutStart())

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className='logo--container' to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* the outlet here makes it possible to render the home and shop pages */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
