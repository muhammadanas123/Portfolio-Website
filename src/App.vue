<template>
  <div id="app" class="container-flex justify-center bg-white rounded-3xl">
    <full-page ref="fullpage" :options="options">
      <!-- Hello -->
      <div class="section">
        <div class="text-center">
          <h1 class="text-6xl font-semibold text-black p-2" id="hello-msg">
            Hello!
          </h1>
          <h2 class="text-xl font-medium text-gray-600 p-2">
            I'm Anas, Software Developer
          </h2>
          <div class="scroll-down svg" id="home-scroll-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_2"
              x="0px"
              y="0px"
              viewBox="0 0 25.166666 37.8704414"
              enable-background="new 0 0 25.166666 37.8704414"
              xml:space="preserve"
            >
              <path
                class="stroke"
                fill="none"
                stroke="#c7c4b8"
                stroke-width="2.5"
                stroke-miterlimit="10"
                d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
              ></path>
              <path
                class="scroller"
                fill="#c7c4b8"
                d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
              ></path></svg
            ><i class="icon icon-arrow-down"></i>
          </div>
        </div>
      </div>
      <!-- About -->
      <div class="section justify-center">
        <figure class="px-8">
          <img
            src="./assets/__anas.jpg"
            alt="Emir"
            class="flex rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto m-4"
          />
          <div class="text-center md:py-1 md:px-1">
            <h1 class="font-semibold text-4xl p-2 md:text-5xl">Muhammad Anas</h1>
            <p
              class="text-black text-opacity-80 font-normal py-3 max-w-3xl mx-auto text-lg"
            >
              I'm a Software developer familiar with languages like Javascript,
              Kotlin, Python, C++, Java, swift, Dart and some experience in technologies such as
              MongoDB, Mysql, Reactjs, Express, Node, Django, Flask, Flutter, Selenium. I'm always looking to learn new
              things and looking for new opportunities.
            </p>
          </div>
        </figure>
      </div>
      <!-- Projects -->
      <div class="section">
        <figure>
          <div class="text-center">
            <h1 class="text-5xl font-semibold text-black">My projects</h1>
          </div>
          <div class="py-4"></div>
          <div class="text-center">
            <div
              class="grid grid-flow-row grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-1 md:gap-0 justify-items-center md:mt-10"
            >
              <!-- Botsons -->
              <a id="botsons" href="https://github.com/muhammadanas123/human-pose-estimation-fyp" class="h-32 w-72 rounded-lg p-6">
                <div>
                  <h2 class="text-white font-semibold">Fitscape</h2>
                  <p class="text-white opacity-80">Web application that analyze the human posture during workout.</p>
                </div>
              </a>
              <!-- Spyfall -->
              <a id="spyfall" href="https://github.com/muhammadanas123/node-weather-website" class="h-32 w-72 rounded-lg p-6">
                <div>
                  <h2 class="text-white font-semibold">Weather App</h2>
                  <p class="text-white opacity-80">A simple weather app that use openweather api.</p>
                </div>
              </a>
              <!-- Type-Streak -->
              <a
                id="typestreak"
                href="https://github.com/muhammadanas123/E-commerce"
                class="h-32 w-72 rounded-lg p-6"
              >
                <div>
                  <h2 class="text-white font-semibold">E-Commerce Website</h2>
                  <p class="text-white opacity-80">
                    An e-commerce website using mern stack.
                  </p>
                </div>
              </a>
            </div>
            <span
              >More on
              <a 
                href="https://github.com/muhammadanas123"
                class="text-blue-700"
                target="_blank"
                >Github</a
              ></span
            >
          </div>
        </figure>
      </div>
      <!-- Contact -->
      <div class="section text-center">
        <div>
          <h1 class="text-5xl font-semibold text-black py-5">Links</h1>
          <pre class="text-left mx-auto inline links text-lg">
Mail: <a href="mailto:anasfarooqi53@gmail.com" class="text-blue-700">anasfarooqi53@gmail.com</a>
GitHub: <a href="https://github.com/muhammadanas123" class="text-blue-700">muhammadanas123</a>
LinkedIn: <a href="https://www.linkedin.com/in/muhammad-anas-00ab1a1b2/" class="text-blue-700">Muhammad Anas</a>
          </pre>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      options: {
        menu: "#menu",
        navigation: true,
        anchors: ["hello", "about", "project", "contact"],
        animateAnchor: false,
        recordHistory: false,
        lockAnchors: true,
      },
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  font-family: "Poppins";
}

#app {
  margin: .69%;
}

#hello-msg {
  animation: fadeIn ease 1.31s;
}

.links, .links > a{
  font-family: monospace;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
///////////////////////////////////

svg {
  vertical-align: middle;
}
.scroll-down {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  bottom: 35px;
  padding-left: 7px;
  cursor: pointer;
  z-index: 2;
  color: #c7c4b8;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.scroll-down.svg svg {
  width: 25px;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -ms-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.scroll-down.svg .stroke {
  stroke: #ada99d;
}
.scroll-down.svg .scroller {
  fill: #ada99d;
  -webkit-animation: updown 1s infinite;
  -moz-animation: updown 1s infinite;
  -o-animation: updown 1s infinite;
  animation: updown 1s infinite;
}

@-webkit-keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-moz-keyframes updown {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -moz-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }
  100% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-o-keyframes updown {
  0% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -o-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }
  100% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

///////////////////////////////////
#botsons {
  background: #3a7bd5;
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}
#spyfall {
  background: #3a7bd5;
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}
#typestreak {
  background: #3a7bd5;
  background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
  background: linear-gradient(to right, #3a6073, #3a7bd5);

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}
</style>
