<template>
<div
  class="withFrame titleBar">
  <div class="titlebar--title">
   Modpack Store
  </div>
  <v-spacer/>
  <div class="reverse">
  <div
    class="winButton winClose"
    aria-label="Cerrar"
    tabindex="-1"
    role="button"
    @click="winClose()"
  >
    <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
      <polygon
        fill="currentColor"
        fill-rule="evenodd"
        points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
      ></polygon>
    </svg>
  </div>
  <div
    class="winButton"
    tabindex="-1"
    role="button"
    @click="winMinMax()"
  >
    <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
      <rect
        width="9"
        height="9"
        x="1.5"
        y="1.5"
        fill="none"
        stroke="currentColor"
      ></rect>
    </svg>
  </div>
  <div
    class="winButton"
    aria-label="Minimizar"
    tabindex="-1"
    role="button"
    @click="winMinimize()"
  >
    <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
      <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
    </svg>
  </div>
</div>
</div>

</template>


<style type="text/css" scoped>
	.titleBar {
    z-index: 3001;
    -webkit-app-region: drag;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #000;
    display: flex;
}

.reverse {
	-webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-orient: horizontal;
    display: flex;
}

.winButton {
    color: #999;
    text-align: center;
    position: relative;
    top: 0px;
    cursor: pointer;
    width: 28px;
    height: 28px;
    -webkit-app-region: no-drag;
    cursor: pointer;
    pointer-events: auto;
    font-size: large;
}

.withFrame {
    height: 28px;
}

.winButton:hover {
    background-color: #4f545c29;
    color: #fff
}

.winClose:hover {
    color: #fff;
    background-color: red;
}

.titlebar--title {
	color: #fff;
	font-family: Jost;
	font-size: 14px;
	position: absolute;
    top: 0;
    left: 0;
    padding: 4px 9px 3px;
}
</style>

<script type="text/javascript">
const { BrowserWindow } = require('electron').remote;
var win = BrowserWindow.getFocusedWindow();

export default {
    name: 'TitleBar',
    methods: {
   winMinimize () {
    win.minimize();
    },
    winMinMax() {
    if(!win.isMaximized()) {
     win.maximize()
    } else {
    win.unmaximize()
    }
    },
    winClose() {
    win.close()
    }
    }
}
</script>
