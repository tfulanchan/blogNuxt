<script setup>
const { navigation } = useContent();
</script>
<template>
  <div class="max-w-md mx-auto bg-white rounded-xl md:max-w-2xl">
    <nav>
      <ul>
        <li class="font-semibold flex items-center gap-1 hover:text-primary"
        v-for="nav in navigation" :key="nav._path">
          <NuxtLink :to="nav._path">
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
  <br />
</template>

<style scoped>

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
}
nav ul li {
  list-style: none;
  margin: 0;
  padding: 2px 8px;
}
</style>