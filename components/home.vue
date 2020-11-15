<template>
  <div id="wrap">
    <div class="home page show">
      <div class="titles">
        <div class="page-title">Warp Driving</div>
        <div class="page-subtitle">Design | Develop | Motion</div>
      </div>
    </div>

    <canvas id="blob"></canvas>
    <div class="controls">
      <div>
        <!-- 速度 -->
        <label>Speed</label>
        <input
          type="range"
          min="10"
          max="120"
          value="60"
          step="1"
          name="speed"
        />
      </div>
      <div>
        <!-- 尖刺 -->
        <label>Spikes</label>
        <input
          type="range"
          min=".05"
          max="2"
          value=".6"
          step=".05"
          name="spikes"
        />
      </div>
      <div>
        <!-- 處理 -->
        <label>Processing</label>
        <input
          type="range"
          min=".6"
          max="2.4"
          value="1"
          step=".01"
          name="processing"
        />
      </div>
    </div>

    <div class="footer-menu show">
      <ul class="menu-items">
        <li class="menu-item menu-work cc_pointer" data-link="work">
          <nuxt-link to="/" class="slideBar">
            <span>work</span>
          </nuxt-link>
        </li>
        <li class="menu-item menu-prototypes cc_pointer" data-link="prototypes">
          <nuxt-link to="/" class="slideBar">
            <span>prototypes</span>
          </nuxt-link>
        </li>
        <li class="menu-item menu-art cc_pointer" data-link="art">
          <nuxt-link to="/" class="slideBar">
            <span>art</span>
          </nuxt-link>
        </li>
        <li class="menu-item menu-press cc_pointer" data-link="press">
          <nuxt-link to="/" class="slideBar">
            <span>press</span>
          </nuxt-link>
        </li>
        <li class="menu-item menu-info cc_pointer" data-link="info">
          <nuxt-link to="/" class="slideBar">
            <span>info</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    for (
      let i = 0, element;
      (element = document.querySelectorAll('input[type="range"]')[i++]);

    ) {
      rangeSlider.create(element, {
        polyfill: true,
      });
    }

    $(document).ready(function() {
      // Range Bar 設定
      let speedSlider = $('input[name="speed"]');
      let spikesSlider = $('input[name="spikes"]');
      let processingSlider = $('input[name="processing"]');

      //選取 canvas
      const canvas = document.querySelector('#blob');
      const renderer = new THREE.WebGLRenderer({
        canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true,
      });
      let simplex = new SimplexNoise();

      //場景及相機設定
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);

      //相機定位
      camera.position.z = 4;

      //滑鼠控制軌跡
      let controls = new THREE.OrbitControls(camera, canvas);
      controls.enableDamping = true; //拖拉慣性

      controls.campingFactor = 0.25; //拖拉慣性阻尼參數搭配enableDamping使用

      controls.enableZoom = false; //相機變焦移動

      controls.enablePan = false; //相機平移

      controls.enableRotate = true;

      //禁用水平控制單軸
      // controls.maxAzimuthAngle = 1;
      // controls.minAzimuthAngle = 1;

      //禁用垂直控制單軸
      // controls.maxPolarAngle = 1;
      // controls.minPolarAngle = 1;
      controls.update();

      //幾何球體
      let geometry = new THREE.SphereGeometry(0.8, 128, 128);

      //材質設定
      let material = new THREE.MeshPhongMaterial({
        color: 0xe4ecfa,
        shininess: 10,
      });

      //光源燈設定
      let lightTop = new THREE.DirectionalLight(0xffffff, 0.7);
      lightTop.position.set(0, 500, 200);
      lightTop.castShadow = true;
      scene.add(lightTop);

      let lightBottom = new THREE.DirectionalLight(0xffffff, 0.25);
      lightBottom.position.set(0, -500, 400);
      lightBottom.castShadow = true;
      scene.add(lightBottom);

      let ambientLight = new THREE.AmbientLight(0x798296);
      scene.add(ambientLight);

      //網面設定 = 幾何 + 材質
      let sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      //Blob數據設定
      let update = () => {
        let time =
            performance.now() *
            0.00001 *
            speedSlider.val() *
            Math.pow(processingSlider.val(), 3),
          spikes = spikesSlider.val() * processingSlider.val();

        for (let i = 0; i < sphere.geometry.vertices.length; i++) {
          let p = sphere.geometry.vertices[i];
          p.normalize().multiplyScalar(
            1 +
              0.3 *
                simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time)
          );
        }

        sphere.geometry.computeVertexNormals();
        sphere.geometry.normalsNeedUpdate = true;
        sphere.geometry.verticesNeedUpdate = true;
      };

      //調整畫布大小設定
      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        // HD-DPI 顯示優化設定
        const pixelRatio = window.devicePixelRatio;
        const width = (canvas.clientWidth * pixelRatio) | 0;
        const height = (canvas.clientHeight * pixelRatio) | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

      //動畫執行
      function animate() {
        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils/_utils.scss';

.h1 {
  font-family: 'Dokdo', cursive;
  font-size: map-get($font-size, 1-1);
  text-shadow: 1px 1px 10px $color-black;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  letter-spacing: 3px;
  line-height: 1;
  text-align: center;
  transition: line-height 0.85s cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 0s;

  @include min-width(map-get($tablet, sm)) {
    height: 80px;
    line-height: 4;
    font-size: map-get($font-size, 1);
  }

  @include min-width(map-get($tablet, lg)) {
    text-align: left;
  }
}
.h2 {
  height: auto;
  font-family: 'Dokdo', cursive;
  font-size: map-get($font-size, 5);
  text-shadow: 1px 1px 6px $color-black;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  transition: line-height 0.85s cubic-bezier(0.77, 0, 0.175, 1);
  font-weight: 300;
  transition-delay: 0s;

  @include min-width(map-get($tablet, sm)) {
    height: 35px;
    line-height: 4;
    font-size: map-get($font-size, 2);
  }

  @include min-width(map-get($tablet, lg)) {
    text-align: left;
  }
}

#wrap {
  width: 100%;
  min-height: 100vh;
  padding: 0 1rem;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.page {
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  padding-bottom: 10vw;
}

.home {
  overflow: hidden;
  height: 100%;
  padding-bottom: 0;
  pointer-events: none;

  .titles {
    width: 100%;
    top: 50%;
    left: 50%;
    z-index: 100;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    margin: 0;
    padding: 0;

    .page-title {
      position: relative;
      top: 0;
      left: auto;
      transform: none;
      ext-transform: uppercase;
      pointer-events: none;
      text-align: center;
      font-size: 5vw;
      letter-spacing: 2.6vw;
      color: rgb(0, 0, 0);
      text-shadow: 0.1px 0.1px 10px #3d525748;
      text-indent: 2.6vw;
      font-weight: 100;
    }

    .page-subtitle {
      margin-top: 1rem;
      position: relative;
      top: 0;
      left: auto;
      text-transform: uppercase;
      text-align: center;
      pointer-events: none;
      font-size: 1vw;
      letter-spacing: 1.8vw;
      text-indent: 1.8vw;
      transform: none;
    }
  }
}

#blob {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 0;

  @include min-width(map-get($phone, lg)) {
    width: 600px;
    height: 500px;
  }

  @include min-width(map-get($tablet, md)) {
    width: 800px;
  }

  @include min-width(map-get($desktop, md)) {
    width: 1000px;
    height: 650px;
  }

  @include min-width(map-get($desktop, xl)) {
    width: 1200px;
    height: 800px;
  }

  &:focus {
    outline: none;
  }
}

.footer-menu {
  width: 100%;
  position: fixed;
  bottom: 20vh;
  z-index: 100;
  text-align: center;
}

.menu-items {
  width: 100%;
  display: flex;
  justify-content: center;
}

.footer-menu .menu-item {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2vw;
  text-indent: 0.2vw;
  font-size: 1vw;
  // opacity: 0.5;
  padding: 0.25rem 4vw;
  user-select: none;

  @include min-width(map-get($phone, lg)) {
    padding: 0 4vw;
  }

  > a {
    width: 100%;
    height: 100%;
    display: block;

    > span {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
