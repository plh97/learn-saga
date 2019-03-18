import { get } from 'lodash'

/**
 * url 地址转义函数
 * @export
 * @param string https://api.pipk.top:8080/upload?name=1&type=png#hash
 * @returns Object { 
 *  hash: "" ,
 *  host: "jestjs.io" ,
 *  hostname: "jestjs.io" ,
 *  href: "https://jestjs.io/docs/zh-Hans/tutorial-async" ,
 *  origin: "https://jestjs.io" ,
 *  pathname: "/docs/zh-Hans/tutorial-async" ,
 *  port: "" ,
 *  protocol: "https:"
 * } 
 */
export function parse(_url_) {
  let url = _url_
  const origin = get(url.match(/^https{0,1}:\/\/(\w+\.)+(top|net|com|cn|im)(:\d+){0,1}/g), '0', '')
  const protocol = get(url.match(/\w+:(?=\/\/)/), '0', '')
  url = url.replace(/\w+:\/\//, '')
  const port = get(url.match(/(?<=:)\d+/g), '0', '')
  const hostname = get(url.match(/^(\w+\.)+(top|net|com|cn|im)/g), '0', '')
  const host = get(url.match(/^(\w+\.)+(top|net|com|cn|im)(:\d+){0,1}/g), '0', '')
  url = url.replace(/^(\w+\.)+(top|net|com|cn|im)(:\d+){0,1}/g, '')
  const hash = get(url.match(/(?<=#)[\w|\W]+/), '0', '')
  url = url.replace(/#[\w|\W]+/, '')
  const pathname = get(url.match(/(\/[\w\.\+\-\_]+){1,24}/), '0', '')
  const search = get(url.match(/\?[\w\W]+/), '0', '')
  return {
    protocol,
    port,
    pathname,
    hostname,
    hash,
    origin,
    host,
    href: _url_,
    search,
  }
}