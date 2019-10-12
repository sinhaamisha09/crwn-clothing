import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
	<div className='cart-icon'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatcherToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatcherToProps())(CartIcon);