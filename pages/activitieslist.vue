<template>
  <div class="card-container">
    <Item id="yoga"/>
    <Item id="meditation"/>
    <Item id="meditation"/>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  name: "ActivitiesListPage",
  components: { Item: Item },
};
</script>

<style scoped>

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 404px);
  gap: 24px;

  justify-content: center; /* Questo centra tutta la griglia */
}

</style>