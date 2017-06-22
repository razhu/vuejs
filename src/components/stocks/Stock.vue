<template>
<div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
  <div class="panel-heading">
    <h3 class="panel-title">{{stock.name}} {{stock.price}}</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
</div>
</template>
<script>
    export default {
        props: ['stock']
    }
</script>
