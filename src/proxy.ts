import { HProxy, HScript, HArg } from './types'

export const P = ( h: HScript ) => {
  const handler: ProxyHandler<HProxy> = {
    get: ( _proxy, tagName ) => {
      if( typeof tagName === 'string' )
        return (...args: HArg[]) => h(tagName, ...args)
    }
  }
  
  const proxy = new Proxy( {} as HProxy, handler )
  
  return proxy
}
