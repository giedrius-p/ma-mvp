<template>
  <div>
    <div class="header-image"></div>
    <div class="congress-proposals-wrapper">
      <div class="congress-proposal" v-for="proposal in proposals">
        <div class="proposal-title">{{proposal.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CongressPage',
    data () {
      return {
        proposals: [{
          title: 'Proposal 1'
        }, {
          title: 'Proposal 2'
        }, {
          title: 'Proposal 3'
        }, {
          title: 'Proposal 4'
        }, {
          title: 'Proposal 5'
        }, {
          title: 'Proposal 6'
        }, {
          title: 'Proposal 7'
        }, {
          title: 'Proposal 8'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .header-image {
    height: 250px;
    width: 100%;
    background: #d0d0d0;
    margin-bottom: 20px;
  }

  .congress-proposals-wrapper {
    padding: 20px 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .congress-proposal {
    display: flex;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 1%;
    margin-right: 1%;
    flex: 0 0 23%;
    min-height: 200px;
    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);

    .proposal-title {
      text-align: center;
      width: 100%;
    }
  }

</style>
