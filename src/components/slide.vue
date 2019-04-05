<template>
	<div class="carousel-wrap" id="carousel">
			<li>
				<a>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768809049&di=db3755b56d5fc55ecffe158413ad067c&imgtype=0&src=http%3A%2F%2Fdigital.zol.com.cn%2F275_module_images%2F17%2F537dbbf398e85.jpg" />
        </a>
			</li>
		<div class="carousel-items">
			<span>
		
			</span>
		</div>
	</div>
</template>

<script>
export default{
    
}
</script>

<style>
 .carousel-wrap {
   height: 453px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>