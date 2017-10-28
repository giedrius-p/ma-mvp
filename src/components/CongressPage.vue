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
          title: 'Moms Avenue Roadmap 2018'
        }, {
          title: 'Allocate 1,000,000 M.O.M. Tokens for Kick Off Business'
        }, {
          title: 'UX Upgrade v2 for Feed Section'
        }, {
          title: 'Social Media Promotion Campaign'
        }, {
          title: 'WomenInTech Event Support'
        }, {
          title: 'Automated location based Community Groups'
        }, {
          title: 'Increase video content reward by 10%'
        }, {
          title: 'Moms Avenue translation to German'
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
