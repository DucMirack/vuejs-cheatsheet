<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
    </div>
</template>

<script>
  export default {
    props: ['name'] // Crée une proriété 'name' dans le component, on peut donc assigner une valeur cette propriété lors de la déclaration du composant
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
