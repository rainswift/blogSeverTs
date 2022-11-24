<template>
  <div>
    5555
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
import {ref} from "vue";
const page = ref("")
const deatils = (item) =>{
  request.post('http://localhost:8080/edit/deatils', {
    id: 7
  }).then(res => {

  })
}
deatils()
</script>

<style>
</style>