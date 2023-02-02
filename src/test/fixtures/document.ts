import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html>')

const { window } = dom

global[ 'window'] = window as any
global[ 'document' ] = window.document
