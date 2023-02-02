import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html>')

const { window } = dom

global[ 'window'] = global[ 'window'] || window
global[ 'document' ] = global[ 'document' ] || window.document
