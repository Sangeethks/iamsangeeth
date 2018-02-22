<template>
    <div class="ims-port-card">
        <div class="ims-port-card-bar">
            <div class="ims-pcb-icos">
                <p class="ico-red"></p>
                <p class="ico-yellow"></p>
                <p class="ico-green"></p>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="ims-port-card-box">
            <div class="ims-pcbx-img">
                <img src="~@/assets/logo.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~scss/modules/variables';

.ims-port-card-bar {
    background-color: $bg-window-color;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 3px 10px;
}
.ims-pcb-icos p {
    float: left;
    width: 13px;
    height: 13px;
    display: block;
    margin-right: 5px;
    text-align: center;
    border-radius: 50%;
    font-size: 10px;
    &.ico-red {
        background-color: $bg-window-ico-red-color;
    }
    &.ico-yellow {
        background-color: $bg-window-ico-yellow-color;
    }
    &.ico-green {
        background-color: $bg-window-ico-green-color;
    }
}
.ims-pcbx-img {
    text-align: center;
}
</style>
