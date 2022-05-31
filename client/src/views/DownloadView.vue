<template>
  <div class="container">
    <div class="columns">
      <div class="column is-center is-10 is-offset-1">
        <h1 class="heading">Youtube Video Downloader</h1>
        <textarea
          class="textarea"
          cols="30"
          rows="10"
          v-model="textAreaValue"
        ></textarea>
        <button class="button is-primary mt-5" @click="download">
          Convert
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import fileDownload from "@/util/fileDownload";

const textAreaValue = ref("");

const download = () => {
  const urls = textAreaValue.value.split("\n");

  urls.forEach((url) => {
    let fileName = "";
    fetch(`${process.env.VUE_APP_API_URL}/download?url=${url}`, {
      method: "GET",
    })
      .then((res) => {
        fileName = res.headers.get("File-Name");
        return res.blob();
      })
      .then((res) => {
        fileDownload(res, fileName);
      });
  });
};
</script>

<style lang="scss">
.heading {
  margin-top: 5vh;
}
</style>
