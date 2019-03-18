import { parse } from '../http'

// util testing -> TDD(test drive development)
describe('counter reducers testing', () => {
  // parse function which can parse url<string>
  it('it should return object contain message about url', () => {
    const url = 'https://api.pipk.top:8080/upload?name=1&type=png#hash'
    const res = {
      hash: 'hash',
      host: 'api.pipk.top:8080',
      hostname: 'api.pipk.top',
      href: 'https://api.pipk.top:8080/upload?name=1&type=png#hash',
      origin: 'https://api.pipk.top:8080',
      pathname: '/upload',
      port: '8080',
      protocol: 'https:',
      search: '?name=1&type=png',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url = 'https://api.pipk.top:8080/upload?name=1&type=png'
    const res = {
      hash: '',
      host: 'api.pipk.top:8080',
      hostname: 'api.pipk.top',
      href: 'https://api.pipk.top:8080/upload?name=1&type=png',
      origin: 'https://api.pipk.top:8080',
      pathname: '/upload',
      port: '8080',
      protocol: 'https:',
      search: '?name=1&type=png',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url = 'http://api.pipk.top:8080/upload?name=1&type=png'
    const res = {
      hash: '',
      host: 'api.pipk.top:8080',
      hostname: 'api.pipk.top',
      href: 'http://api.pipk.top:8080/upload?name=1&type=png',
      origin: 'http://api.pipk.top:8080',
      pathname: '/upload',
      port: '8080',
      protocol: 'http:',
      search: '?name=1&type=png',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url = 'http://api.pipk.top/upload?name=1&type=png'
    const res = {
      hash: '',
      host: 'api.pipk.top',
      hostname: 'api.pipk.top',
      href: 'http://api.pipk.top/upload?name=1&type=png',
      origin: 'http://api.pipk.top',
      pathname: '/upload',
      port: '',
      protocol: 'http:',
      search: '?name=1&type=png',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url = 'http://pipk.top/upload?name=1&type=png'
    const res = {
      hash: '',
      host: 'pipk.top',
      hostname: 'pipk.top',
      href: 'http://pipk.top/upload?name=1&type=png',
      origin: 'http://pipk.top',
      pathname: '/upload',
      port: '',
      protocol: 'http:',
      search: '?name=1&type=png',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url = 'https://github.com/pengliheng/pengliheng.github.io/issues'
    const res = {
      hash: '',
      host: 'github.com',
      hostname: 'github.com',
      href: 'https://github.com/pengliheng/pengliheng.github.io/issues',
      origin: 'https://github.com',
      pathname: '/pengliheng/pengliheng.github.io/issues',
      port: '',
      protocol: 'https:',
      search: '',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url =
      'https://uk.reuters.com/article/uk-mideast-crisis-syria-islamic-state/over-60000-people-mostly-civilians-have-fled-from-last-islamic-state-syria-enclave-sdf-idUKKCN1QY0EG'
    const res = {
      hash: '',
      host: 'uk.reuters.com',
      hostname: 'uk.reuters.com',
      href:
        'https://uk.reuters.com/article/uk-mideast-crisis-syria-islamic-state/over-60000-people-mostly-civilians-have-fled-from-last-islamic-state-syria-enclave-sdf-idUKKCN1QY0EG',
      origin: 'https://uk.reuters.com',
      pathname:
        '/article/uk-mideast-crisis-syria-islamic-state/over-60000-people-mostly-civilians-have-fled-from-last-islamic-state-syria-enclave-sdf-idUKKCN1QY0EG',
      port: '',
      protocol: 'https:',
      search: '',
    }
    expect(parse(url)).toEqual(res)
  })

  it('it should return object contain message about url', () => {
    const url =
      'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=sd&rn=&oq=&rsv_pq=f24a08f1000c0b2c&rsv_t=3dedBIkt6peRE9hX7k0NX981bf7QtC%2BZq509kLZIo6peu5yLSCbquMYU4%2B4&rqlang=cn'
    const res = {
      hash: '',
      host: 'www.baidu.com',
      hostname: 'www.baidu.com',
      href:
        'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=sd&rn=&oq=&rsv_pq=f24a08f1000c0b2c&rsv_t=3dedBIkt6peRE9hX7k0NX981bf7QtC%2BZq509kLZIo6peu5yLSCbquMYU4%2B4&rqlang=cn',
      origin: 'https://www.baidu.com',
      pathname: '/s',
      port: '',
      protocol: 'https:',
      search:
        '?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=sd&rn=&oq=&rsv_pq=f24a08f1000c0b2c&rsv_t=3dedBIkt6peRE9hX7k0NX981bf7QtC%2BZq509kLZIo6peu5yLSCbquMYU4%2B4&rqlang=cn',
    }
    expect(parse(url)).toEqual(res)
  })
})
