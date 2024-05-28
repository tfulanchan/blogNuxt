<template>
  <div class="lg:col-span-8">
    <div class="relative border-b border-gray-200 dark:border-gray-800 py-8">
      <div
        class="mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5"
      >
        Getting Started
      </div>
      <div class="flex flex-col lg:flex-row items-start gap-6">
        <!---->
        <div class="flex-1">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              Installation
            </h1>
            <!---->
          </div>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Using Tailwind CSS in your Nuxt project is only one command away.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-24 prose prose-primary dark:prose-invert max-w-none">
      <div>
        <h2
          id="installation"
          class="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#installation"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Installation</a
          >
        </h2>
        <ol>
          <li>
            Install <code class="">@nuxtjs/tailwindcss</code> dependency to your
            project:
          </li>
        </ol>
        <div
          class="relative [&amp;>div:last-child]:!my-0 [&amp;>div:last-child]:!static my-5"
        >
          <div
            class="flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2"
          >
            <button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800"
            >
              <!----><span>nuxi</span></button
            ><button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <span>yarn</span></button
            ><button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <span>npm</span></button
            ><button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <span>pnpm</span>
            </button>
          </div>
          <div
            class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
          >
            <!----><button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
              aria-label="Copy code to clipboard"
              tabindex="-1"
            >
              <span
                class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
                aria-hidden="true"
              ></span
              ><!----><!---->
            </button>
            <pre
              class="language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
            ><code><span class="line" line="1"><span style="--shiki-light: #E2931D; --shiki-default: #FFCB6B; --shiki-dark: #FFCB6B;">npx</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> nuxi@latest</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> module</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> add</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> tailwindcss
</span></span></code></pre>
          </div>
        </div>
        <ol start="2">
          <li>
            If not already done, add it to your
            <code class="">modules</code> section in your
            <code class="">nuxt.config</code>:
          </li>
        </ol>
        <div
          class="relative [&amp;>div:last-child]:!my-0 [&amp;>div:last-child]:!static my-5"
        >
          <div
            class="flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2"
          >
            <button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800"
            >
              <!----><span>Nuxt 3</span></button
            ><button
              tabindex="-1"
              class="px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              <!----><span>Nuxt 2</span>
            </button>
          </div>
          <div
            class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
          >
            <!----><button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
              aria-label="Copy code to clipboard"
              tabindex="-1"
            >
              <span
                class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
                aria-hidden="true"
              ></span
              ><!----><!---->
            </button>
            <pre
              class="language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
            ><code><span class="line" line="1"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">export</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;"> default</span><span style="--shiki-light: #6182B8; --shiki-default: #82AAFF; --shiki-dark: #82AAFF;"> defineNuxtConfig</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">(</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">{
</span></span><span class="line" line="2"><span style="--shiki-light: #E53935; --shiki-default: #F07178; --shiki-dark: #F07178;">  modules</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">:</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;"> [</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">'</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;">@nuxtjs/tailwindcss</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">'</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">]
</span></span><span class="line" line="3"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">}</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">)
</span></span></code></pre>
          </div>
        </div>
        <div
          class="block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900"
          style="--color-light: #00c16a; --color-dark: #00dc82"
        >
          <!----><span
            class="i-ph-check-circle-duotone w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"
          ></span
          ><!---->That's it! You can now use Tailwind classes in your Nuxt app
          ✨
        </div>
        <div
          class="block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900"
          style="--color-light: #f59e0b; --color-dark: #fbbf24"
        >
          <!----><span
            class="i-ph-warning-duotone w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"
          ></span
          ><!---->For Nuxt 2.15 and lower, also add
          <a href="https://github.com/nuxt/postcss8" rel="nofollow"
            ><code class="">@nuxt/postcss8</code></a
          >
          to your dependencies.
        </div>
        <div
          class="block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900"
          style="--color-light: #3b82f6; --color-dark: #60a5fa"
        >
          <!----><span
            class="i-ph-info-duotone w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"
          ></span
          ><!---->Discover your color palette based on your Tailwind config with
          the <a href="/tailwind/viewer" class="">Tailwind viewer</a>.
        </div>
        <h3
          id="nightly-releases"
          class="scroll-mt-[calc(48px+32px+var(--header-height))] lg:scroll-mt-[calc(32px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#nightly-releases"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Nightly Releases</a
          >
        </h3>
        <p>
          After each commit is merged into the <code class="">main</code> branch
          of <code class="">@nuxtjs/tailwindcss</code> and
          <strong>passing all tests</strong>, we trigger an automated npm
          release using GitHub Actions and
          <a href="https://github.com/unjs/changelogen" rel="nofollow"
            >changelogen</a
          >.
        </p>
        <p>
          You can opt in to use this release channel and avoid waiting for the
          next release and helping the module by beta testing changes.
        </p>
        <p>
          The build and publishing method and quality of nightly releases are
          the same as stable ones. The only difference is that you should often
          check the
          <a href="https://github.com/nuxt-modules/tailwindcss" rel="nofollow"
            >GitHub repository</a
          >
          for updates. There is a slight chance of regressions not being caught
          during the review process and by the automated tests. Therefore, we
          internally use this channel to double-check everything before each
          release.
        </p>
        <h3
          id="opting-into-the-nightly-channel"
          class="scroll-mt-[calc(48px+32px+var(--header-height))] lg:scroll-mt-[calc(32px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#opting-into-the-nightly-channel"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Opting into the nightly channel</a
          >
        </h3>
        <p>
          Update <code class="">@nuxtjs/tailwindcss</code> dependency inside
          <code class="">package.json</code>:
        </p>
        <div
          class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
        >
          <div
            class="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose"
          >
            <span class="text-gray-700 dark:text-gray-200 text-sm/6"
              >package.json</span
            >
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
            aria-label="Copy code to clipboard"
            tabindex="-1"
          >
            <span
              class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            ></span
            ><!----><!---->
          </button>
          <pre
            class="language-diff shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
          ><code><span class="line" line="1"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">{
</span></span><span class="line" line="2"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">  "devDependencies": {
</span></span><span class="line" line="3"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">-</span><span style="--shiki-light: #E53935; --shiki-default: #F07178; --shiki-dark: #F07178;">   "@nuxtjs/tailwindcss": "^6.10.0"
</span></span><span class="line" line="4"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">+</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;">   "@nuxtjs/tailwindcss": "npm:@nuxtjs/tailwindcss@nightly"
</span></span><span class="line" line="5"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">  }
</span></span><span class="line" line="6"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">}
</span></span></code></pre>
        </div>
        <p>
          Remove lockfile (<code class="">package-lock.json</code>,
          <code class="">yarn.lock</code>, or
          <code class="">pnpm-lock.yaml</code>) and reinstall dependencies.
        </p>
        <h4
          id="opting-out-from-the-edge-channel"
          class="scroll-mt-[calc(48px+24px+var(--header-height))] lg:scroll-mt-[calc(24px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#opting-out-from-the-edge-channel"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-1 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Opting out from the edge channel</a
          >
        </h4>
        <p>
          Update <code class="">@nuxtjs/tailwindcss</code> dependency inside
          <code class="">package.json</code>:
        </p>
        <div
          class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
        >
          <div
            class="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose"
          >
            <span class="text-gray-700 dark:text-gray-200 text-sm/6"
              >package.json</span
            >
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
            aria-label="Copy code to clipboard"
            tabindex="-1"
          >
            <span
              class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            ></span
            ><!----><!---->
          </button>
          <pre
            class="language-diff shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
          ><code><span class="line" line="1"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">{
</span></span><span class="line" line="2"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">  "devDependencies": {
</span></span><span class="line" line="3"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">-</span><span style="--shiki-light: #E53935; --shiki-default: #F07178; --shiki-dark: #F07178;">   "@nuxtjs/tailwindcss": "npm:@nuxtjs/tailwindcss@nightly"
</span></span><span class="line" line="4"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">+</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;">   "@nuxtjs/tailwindcss": "^6.10.0"
</span></span><span class="line" line="5"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">  }
</span></span><span class="line" line="6"><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">}
</span></span></code></pre>
        </div>
        <p>
          Remove lockfile (<code class="">package-lock.json</code>,
          <code class="">yarn.lock</code>, or
          <code class="">pnpm-lock.yaml</code>) and reinstall dependencies.
        </p>
        <h2
          id="tailwind-files"
          class="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#tailwind-files"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Tailwind Files</a
          >
        </h2>
        <p>
          When running <code class="">npm run dev</code>, this module will look
          for these files:
        </p>
        <ul>
          <li><code class="">./assets/css/tailwind.css</code></li>
          <li><code class="">./tailwind.config.{js,cjs,mjs,ts}</code></li>
        </ul>
        <p>
          If these files don't exist, the module will automatically generate a
          basic configuration for them, so you don't have to create these files
          manually.
        </p>
        <p>
          You can create the <code class="">tailwind.config.js</code> file by
          running the following command:
        </p>
        <div class="relative">
          <!----><button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
            aria-label="Copy code to clipboard"
            tabindex="-1"
          >
            <span
              class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            ></span
            ><!----><!---->
          </button>
          <pre
            class="language-bash shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
          ><code><span class="line" line="1"><span style="--shiki-light: #E2931D; --shiki-default: #FFCB6B; --shiki-dark: #FFCB6B;">npx</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> tailwindcss</span><span style="--shiki-light: #91B859; --shiki-default: #C3E88D; --shiki-dark: #C3E88D;"> init
</span></span></code></pre>
        </div>
        <div
          class="block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900"
          style="--color-light: #3b82f6; --color-dark: #60a5fa"
        >
          <!----><span
            class="i-ph-info-duotone w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"
          ></span
          ><!---->You can configure the paths in the
          <a href="/getting-started/configuration" class="">module options</a>.
        </div>
        <p>
          If you're going to create your own Tailwind CSS file, make sure to add
          the <code class="">@tailwind</code> directives for each of Tailwind’s
          layer types (base, components, and utilities).
        </p>
        <div
          class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
        >
          <div
            class="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose"
          >
            <span class="text-gray-700 dark:text-gray-200 text-sm/6"
              >~/assets/css/tailwind.css</span
            >
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
            aria-label="Copy code to clipboard"
            tabindex="-1"
          >
            <span
              class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            ></span
            ><!----><!---->
          </button>
          <pre
            class="language-css shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
          ><code><span class="line" line="1"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">@tailwind</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;"> base</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">;
</span></span><span class="line" line="2"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">@tailwind</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;"> components</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">;
</span></span><span class="line" line="3"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">@tailwind</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;"> utilities</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">;
</span></span></code></pre>
        </div>
        <p>
          Learn more about overwriting the Tailwind configuration in the
          <a href="/tailwind/config" class="">Tailwind Config</a> section.
        </p>
        <h2
          id="options"
          class="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
        >
          <a
            aria-current="page"
            href="/getting-started/installation#options"
            class="router-link-active router-link-exact-active group"
            ><div
              class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute"
            >
              <span
                class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"
              ></span>
            </div>
            Options</a
          >
        </h2>
        <p>
          You can customize the module's behavior by using the
          <code class="">tailwindcss</code> property in
          <code class="">nuxt.config</code>:
        </p>
        <div
          class="relative [&amp;>pre]:!rounded-t-none [&amp;>pre]:!my-0 my-5"
        >
          <div
            class="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose"
          >
            <span class="text-gray-700 dark:text-gray-200 text-sm/6"
              >nuxt.config.ts</span
            >
          </div>
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5"
            aria-label="Copy code to clipboard"
            tabindex="-1"
          >
            <span
              class="i-heroicons-clipboard-document flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            ></span
            ><!----><!---->
          </button>
          <pre
            class="language-ts shiki shiki-themes material-theme-lighter material-theme material-theme-palenight"
          ><code><span class="line" line="1"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">export</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;"> default</span><span style="--shiki-light: #6182B8; --shiki-default: #82AAFF; --shiki-dark: #82AAFF;"> defineNuxtConfig</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">(</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">{
</span></span><span class="line" line="2"><span style="--shiki-light: #E53935; --shiki-default: #F07178; --shiki-dark: #F07178;">  tailwindcss</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">:</span><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;"> {
</span></span><span class="line" line="3"><span style="--shiki-light: #90A4AE; --shiki-default: #546E7A; --shiki-dark: #676E95; --shiki-light-font-style: italic; --shiki-default-font-style: italic; --shiki-dark-font-style: italic;">    // Options
</span></span><span class="line" line="4"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">  }
</span></span><span class="line" line="5"><span style="--shiki-light: #39ADB5; --shiki-default: #89DDFF; --shiki-dark: #89DDFF;">}</span><span style="--shiki-light: #90A4AE; --shiki-default: #EEFFFF; --shiki-dark: #BABED8;">)
</span></span></code></pre>
        </div>
        <p>
          See the
          <a href="/getting-started/configuration" class="">module options</a>.
        </p>
      </div>
      <hr />
      <div class="grid gap-8 sm:grid-cols-2">
        <span class="hidden sm:block">&nbsp;</span
        ><a
          href="/getting-started/configuration"
          class="block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group text-right"
          ><div
            class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
          >
            <span
              class="i-heroicons-arrow-right-20-solid w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"
            ></span>
          </div>
          <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
            Configuration
          </p>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
          >
            Configure Nuxt Tailwind with the `tailwindcss` property.
          </p></a
        >
      </div>
    </div>
  </div>
</template>
<style>
html .light .shiki span {
  color: var(--shiki-light);
  background: var(--shiki-light-bg);
  font-style: var(--shiki-light-font-style);
  font-weight: var(--shiki-light-font-weight);
  text-decoration: var(--shiki-light-text-decoration);
}
html.light .shiki span {
  color: var(--shiki-light);
  background: var(--shiki-light-bg);
  font-style: var(--shiki-light-font-style);
  font-weight: var(--shiki-light-font-weight);
  text-decoration: var(--shiki-light-text-decoration);
}
html .default .shiki span {
  color: var(--shiki-default);
  background: var(--shiki-default-bg);
  font-style: var(--shiki-default-font-style);
  font-weight: var(--shiki-default-font-weight);
  text-decoration: var(--shiki-default-text-decoration);
}
html .shiki span {
  color: var(--shiki-default);
  background: var(--shiki-default-bg);
  font-style: var(--shiki-default-font-style);
  font-weight: var(--shiki-default-font-weight);
  text-decoration: var(--shiki-default-text-decoration);
}
html .dark .shiki span {
  color: var(--shiki-dark);
  background: var(--shiki-dark-bg);
  font-style: var(--shiki-dark-font-style);
  font-weight: var(--shiki-dark-font-weight);
  text-decoration: var(--shiki-dark-text-decoration);
}
html.dark .shiki span {
  color: var(--shiki-dark);
  background: var(--shiki-dark-bg);
  font-style: var(--shiki-dark-font-style);
  font-weight: var(--shiki-dark-font-weight);
  text-decoration: var(--shiki-dark-text-decoration);
}
</style>
