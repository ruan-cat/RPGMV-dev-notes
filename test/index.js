#!/usr/bin/env node
import {
  existsSync as p,
  readFileSync as g,
  writeFileSync as M,
} from 'node:fs';
import { resolve as a, dirname as f } from 'node:path';
import { cac as I } from 'cac';
import { spawnSync as c } from 'node:child_process';
import { get as T } from 'node:https';
import C from 'semver';
import { createRequire as D } from 'node:module';
const N = [
    '@vue/compiler-core',
    '@vue/compiler-dom',
    '@vue/compiler-sfc',
    '@vue/compiler-ssr',
    '@vue/devtools-api',
    '@vue/reactivity',
    '@vue/reactivity-transform',
    '@vue/runtime-core',
    '@vue/runtime-dom',
    '@vue/server-renderer',
    '@vue/shared',
    'vue',
    'vue-router',
  ],
  O = ['@vuepress/bundler-vite', '@vuepress/bundler-webpack', 'vuepress'],
  j = /^@vuepress\/(?:plugin|theme)-/,
  F = ['vuepress-webpack', 'vuepress-vite'],
  G = [
    '@vuepress/cli',
    '@vuepress/client',
    '@vuepress/core',
    '@vuepress/markdown',
    '@vuepress/shared',
    '@vuepress/utils',
  ],
  L = /^(@.*\/)?vuepress-plugin-/,
  U = /^(@.*\/)?vuepress-theme-/,
  { version: J } = D(import.meta.url)('vp-update/package.json'),
  h = 'https://registry.npmmirror.com/',
  k = (e) =>
    e === 'yarn' &&
    !c(`${e} --version`, { shell: !0 }).stdout.toString().startsWith('1')
      ? c(`${e} config get npmRegistryServer`)
          .stdout.toString()
          .replace(/\/?$/, '/')
      : e === 'bun' && !c(`${e} --version`, { shell: !0 }).status
      ? (console.warn(
          'bun does not support get registry at the time, using npm global registry instead'
        ),
        c('npm config get registry', { shell: !0 })
          .stdout.toString()
          .replace(/\/?$/, '/'))
      : c(`${e} config get registry`, { shell: !0 })
          .stdout.toString()
          .replace(/\/?$/, '/'),
  V = (e) => {
    const n = k(e);
    /https:\/\/registry\.npm\.taobao\.org\/?/.test(n) &&
      (console.error(
        'npm.taobao.org is no longer available, resetting it to npmmirror.com'
      ),
      e === 'yarn'
        ? c(`${e} config set npmRegistryServer  ${h}`, { shell: !0 })
        : e === 'bun'
        ? c(`npm config set registry ${h}`, { shell: !0 })
        : c(`${e} config set registry ${h}`, { shell: !0 }));
  },
  P = new Map(),
  i = new Map(),
  y = 'package.json',
  E = 'package-lock.json',
  $ = 'yarn.lock',
  A = 'pnpm-lock.yaml',
  R = 'bun.lockb',
  H = (e) => {
    try {
      const n = c(`${e === 'yarn1' ? 'yarn' : e} --version`, { shell: !0 });
      return e === 'yarn1'
        ? n.stdout.toString().startsWith('1')
        : n.status === 0;
    } catch {
      return !1;
    }
  },
  w = (e) => {
    const n = `global:${e}`,
      r = P.get(n);
    return r !== void 0 ? r : H(e) ? (P.set(n, !0), !0) : !1;
  },
  K = (e = process.cwd(), n = !0) => {
    const r = `package:${e}`,
      t = i.get(r);
    if (t !== void 0) return t;
    if (p(a(e, y))) {
      const { packageManager: s } = JSON.parse(g(a(e, y), 'utf-8'));
      if (s) {
        const o = s.split('@')[0];
        return i.set(r, o), o;
      }
    }
    if (n) {
      let s = e;
      for (; s !== f(s); )
        if (((s = f(s)), p(a(e, y)))) {
          const { packageManager: o } = JSON.parse(g(a(e, y), 'utf-8'));
          if (o) {
            const l = o.split('@')[0];
            return i.set(r, l), l;
          }
        }
    }
    return null;
  },
  W = (e = process.cwd(), n = !0) => {
    const r = `local:${e}`,
      t = i.get(r);
    if (t !== void 0) return t;
    if (p(a(e, A))) return i.set(r, 'pnpm'), 'pnpm';
    if (p(a(e, $))) {
      const s = g(a(e, $), { encoding: 'utf-8' }).includes('yarn lockfile v1')
        ? 'yarn1'
        : 'yarn';
      return i.set(r, s), s;
    }
    if (p(a(e, R))) return i.set(r, 'bun'), 'bun';
    if (p(a(e, E))) return i.set(r, 'npm'), 'npm';
    if (n) {
      let s = e;
      for (; s !== f(s); ) {
        if (((s = f(s)), p(a(s, A)))) return i.set(r, 'pnpm'), 'pnpm';
        if (p(a(s, $))) {
          const o = g(a(s, $), { encoding: 'utf-8' }).includes(
            'yarn lockfile v1'
          )
            ? 'yarn1'
            : 'yarn';
          return i.set(r, o), o;
        }
        if (p(a(s, R))) return i.set(r, 'bun'), 'bun';
        if (p(a(s, E))) return i.set(r, 'npm'), 'npm';
      }
    }
    return null;
  },
  Y = (e = process.cwd(), n = !0) =>
    K(e, n) ||
    W(e, n) ||
    (w('pnpm') ? 'pnpm' : w('yarn') ? 'yarn' : w('bun') ? 'bun' : 'npm'),
  m = async (e, n, r = 'auto', t = 3) => {
    const s = `${k(e)}-/package/${n}/dist-tags`,
      o = () =>
        new Promise((v, d) => {
          T(s, (u) => {
            if (u.statusCode === 200) {
              let S = '';
              u.on('data', (_) => (S += _)),
                u.on('end', () => {
                  v(JSON.parse(S));
                });
            } else d();
          }).on('error', d);
        });
    let l = 1;
    do {
      const v = await o().catch(() => {
        console.log(`Get ${n} version failed, [${l}/${t}]`);
      });
      if (v) {
        const { next: d, latest: u } = v;
        return r === 'latest' ? u : r === 'next' || (d && C.gt(d, u)) ? d : u;
      }
      l++;
    } while (l <= t);
    throw new Error(`Failed to get ${n} version!
 Can not get version info from ${s}
    
 看看仓库地址？ ${k(e)}
    `);
  },
  x = async (e, n) => {
    await Promise.all(
      Object.keys(n).map(async (r) => {
        F.includes(r)
          ? (console.error(
              `Removing "${r}" from your dependencies, as it's no longer maintained.`
            ),
            delete n[r])
          : G.includes(r)
          ? (console.error(
              `"${r}"is deprecated, please remove it from your dependencies and import "${r.substring(
                1
              )}" from "vuepress" directly.`
            ),
            (n[r] = `^${await m(e, r, 'next')}`))
          : N.includes(r)
          ? (n[r] = `^${await m(e, r, 'latest')}`)
          : O.includes(r)
          ? (n[r] = await m(e, r, 'next'))
          : j.test(r)
          ? (n[r] = await m(e, r, 'next'))
          : (L.test(r) || U.test(r)) && (n[r] = await m(e, r, 'auto'));
      })
    );
  },
  b = I('vp-update');
b
  .command('[dir]', 'Update VuePress project')
  .usage(
    'pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]'
  )
  .example('docs')
  .action(async (e = '') => {
    console.log('Bumping deps...');
    const n = a(process.cwd(), e),
      r = a(n, 'package.json');
    if (!p(r))
      return new Error(`No package.json found in ${e || 'current dir'}`);
    const t = Y();
    V(t);
    const s = g(r, { encoding: 'utf-8' }),
      o = JSON.parse(s);
    await Promise.all([
      o.dependencies ? x(t, o.dependencies) : Promise.resolve(),
      o.devDependencies ? x(t, o.devDependencies) : Promise.resolve(),
    ]),
      M(
        r,
        `${JSON.stringify(o, null, 2)}
`
      ),
      console.log('Install deps...'),
      c(`${t} install`, { shell: !0, stdio: 'inherit' }),
      console.log('Upgrading deps...'),
      c(
        t === 'pnpm'
          ? 'pnpm update'
          : t === 'yarn1'
          ? 'yarn upgrade'
          : t === 'yarn'
          ? 'yarn up'
          : t === 'bun'
          ? 'bun update'
          : 'npm update',
        { shell: !0, stdio: 'inherit' }
      );
  }),
  b.help(() => [
    {
      title:
        'pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]',
      body: 'Update VuePress project in [dir]',
    },
  ]),
  b.version(J),
  b.parse();
//# sourceMappingURL=index.js.map
