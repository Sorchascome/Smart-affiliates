import React from 'react'
import LayoutContainer from './Container'
import LayoutColumn from './Column'
import LayoutRow from './Row'

export const Container = (props) => <LayoutContainer {...props} />
export const Column = (props) => <LayoutColumn {...props} />
export const Row = (props) => <LayoutRow {...props} />