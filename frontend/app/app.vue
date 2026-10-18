<script setup lang="ts">
const message = ref('')
const errorMessage = ref('')

async function fetchMessage() {
  message.value = ''
  errorMessage.value = ''

  try {
    message.value = await $fetch<string>('http://localhost:3001/')
  } catch {
    errorMessage.value = 'バックエンドとの通信に失敗しました'
  }
}


</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Passkey プロジェクト</h1>
    <button @click="fetchMessage">バックエンドに接続</button>
    <p>{{ message }}</p>
    <p>{{ errorMessage }}</p>
  </div>
</template>
