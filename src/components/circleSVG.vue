<template>
<div>
<!--  <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--    <g id="Group1">-->
<!--      <circle id="Ellipse 1" cx="76.5" cy="76.5" r="76.5" fill="#FBFEEB"/>-->
<!--    </g>-->
<!--  </svg>-->

  <svg width="1139" height="670" viewBox="0 0 1139 670" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group1">
      <g id="Group2">
        <path id="Ellipse 1" d="M32 402C49.6731 402 64 387.673 64 370C64 352.327 49.6731 338 32 338C14.3269 338 0 352.327 0 370C0 387.673 14.3269 402 32 402Z" fill="#FEF8F8"/>
      </g>
      <g id="Group3">
        <path id="Ellipse 1_2" d="M100 167C108.837 167 116 159.837 116 151C116 142.163 108.837 135 100 135C91.1634 135 84 142.163 84 151C84 159.837 91.1634 167 100 167Z" fill="#FBFEEB"/>
      </g>
      <g id="Group4">
        <path id="Ellipse 1_3" d="M390 108C407.673 108 422 93.6731 422 76C422 58.3269 407.673 44 390 44C372.327 44 358 58.3269 358 76C358 93.6731 372.327 108 390 108Z" fill="#F2EFEF"/>
      </g>
      <g id="Group5">
        <path id="Ellipse 1_4" d="M733 316C741.837 316 749 308.837 749 300C749 291.163 741.837 284 733 284C724.163 284 717 291.163 717 300C717 308.837 724.163 316 733 316Z" fill="#DEDFDA"/>
      </g>
      <g id="Group6">
        <path id="Ellipse 1_5" d="M765 32C773.837 32 781 24.8366 781 16C781 7.16344 773.837 0 765 0C756.163 0 749 7.16344 749 16C749 24.8366 756.163 32 765 32Z" fill="#FEF8F8"/>
      </g>
      <path id="Ellipse 1_6" d="M279 300C287.284 300 294 294.404 294 287.5C294 280.596 287.284 275 279 275C270.716 275 264 280.596 264 287.5C264 294.404 270.716 300 279 300Z" fill="#FEF8F8"/>
      <g id="Group7">
        <path id="Ellipse 1_7" d="M901 619C909.837 619 917 611.837 917 603C917 594.163 909.837 587 901 587C892.163 587 885 594.163 885 603C885 611.837 892.163 619 901 619Z" fill="#FBFEEB"/>
      </g>
      <g id="Group8">
        <path id="Ellipse 1_8" d="M567 502C575.837 502 583 494.837 583 486C583 477.163 575.837 470 567 470C558.163 470 551 477.163 551 486C551 494.837 558.163 502 567 502Z" fill="#FBFEEB"/>
      </g>
      <g id="Group9">
        <path id="Ellipse 1_9" d="M976 215C993.673 215 1008 200.673 1008 183C1008 165.327 993.673 151 976 151C958.327 151 944 165.327 944 183C944 200.673 958.327 215 976 215Z" fill="#FBFEEB"/>
      </g>
      <g id="Group10">
        <path id="Ellipse 1_10" d="M1107 486C1124.67 486 1139 471.673 1139 454C1139 436.327 1124.67 422 1107 422C1089.33 422 1075 436.327 1075 454C1075 471.673 1089.33 486 1107 486Z" fill="#DEDFDA"/>
      </g>
      <g id="Group11">
        <path id="Ellipse 1_11" d="M326 670C343.673 670 358 655.673 358 638C358 620.327 343.673 606 326 606C308.327 606 294 620.327 294 638C294 655.673 308.327 670 326 670Z" fill="#FBFEEB"/>
      </g>
    </g>
  </svg>


</div>
</template>

<script>
export default {
name: "circleSVG"
}
</script>

<style scoped>
svg {
  width: 700px;
  height: 900px;
}
 #Group4,#Group2,#Group3,#Group7,#Group9,#Group11,#Group6,#Group8{
  animation: circleX  7s infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
  z-index: 99;
}
@keyframes circleY {
  0% { transform: translateY(0); }
  100% { transform: translateY(100px); }
}
@keyframes circleX {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
</style>