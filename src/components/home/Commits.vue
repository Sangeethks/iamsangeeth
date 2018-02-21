<template lang="html">
  <div class="ims-commits ims-section">
    <h5 class="ims-sec-title">COMMITS</h5>
    <div class="ims-commit-table">
      <table>
        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot green"></span></td>
          <td><p>Front-End Engineer<span class="ims-cmt-yr">// Current</span></p></td>
          <td>
            <p><span class="text-red">Mobiotics, Bangalore, IN</span></p>
          </td>
        </tr>

        <tr class="spacer"></tr>

        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot blue"></span></td>
          <td><p>Freelance Project<span class="ims-cmt-yr">// Aug 2016</span></p></td>
          <td>
            <p>For a company named <span class="text-green">ITSCCTV</span> based in <span class="text-green">Dubai, UAE</span></p>
          </td>
        </tr>

        <tr class="spacer"></tr>

        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot orange"></span></td>
          <td><p>Jn. Software Engineer<span class="ims-cmt-yr">// Nov 2015</span></p></td>
          <td>
            <p>Joined <span class="text-violet">Oceao Technologies, Kochi, IN</span></p>
            <p>as Junior web developer</p>
          </td>
        </tr>

        <tr class="spacer"></tr>

        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot red"></span></td>
          <td><p>Web Developer Trainee<span class="ims-cmt-yr">// Oct 2015</span></p></td>
          <td>
            <p>From <span class="text-blue">Baabte System Technologies, Bangalore, IN</span></p>
            <p>becomes certified web developer</p>
          </td>
        </tr>

        <tr class="spacer"></tr>

        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot green"></span></td>
          <td><p>Graduated<span class="ims-cmt-yr">// Mar 2015</span></p></td>
          <td>
            <p><span class="text-orange">Bachelor of Computer Application</span>, from </p>
            <p>Bharathiyar University, TN</p>
          </td>
        </tr>

        <tr class="spacer"></tr>

        <tr>
          <td class="ims-cmt-dot-td"><span class="ims-cmt-dot violet"></span></td>
          <td><p>First Freelance Project<span class="ims-cmt-yr">// Oct 2014</span></p></td>
          <td>
            <p>Website for <span class="text-green">MNH Hospital</span></p>
          </td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
@import "~scss/modules/variables";

.ims-commit-table {
  table {
    width: 100%;
    .ims-cmt-yr {
      display: block;
      font-size: 12px;
      margin-top: 3px;
      color: $text-comment-color;
    }
    .spacer {
      display: block;
      margin-bottom: 20px;
    }
  }
  .ims-cmt-dot {
    width: 12px;
    height: 12px;
    display: block;
    border-radius: 20px;
    &.orange {
      background-color: $bg-orange-color;
    }
    &.green {
      background-color: $bg-green-color;
    }
    &.violet {
      background-color: $bg-violet-color;
    }
    &.red {
      background-color: $bg-red-color;
    }
    &.blue {
      background-color: $bg-blue-color;
    }
  }
  .ims-cmt-dot-td {
    vertical-align: middle;
    padding-right: 10px;
  }
}
</style>
