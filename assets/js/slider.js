(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function initSlider(root) {
    var track = root.querySelector("[data-slider-track]");
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-slider-slide]"));
    var prev = root.querySelector("[data-slider-prev]");
    var next = root.querySelector("[data-slider-next]");
    var dotsWrap = root.querySelector("[data-slider-dots]");
    var autoplay = root.dataset.autoplay !== "false";
    var interval = Number(root.dataset.interval || 5500);
    var mode = root.dataset.sliderMode || "slide";

    if (!track || slides.length < 2) {
      return;
    }

    var index = 0;
    var timer = null;
    var dots = [];

    function render() {
      track.style.transform = mode === "fade" ? "none" : "translateX(-" + index * 100 + "%)";
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function goTo(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      render();
      restart();
    }

    function restart() {
      if (!autoplay) {
        return;
      }
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        goTo(index + 1);
      }, interval);
    }

    slides.forEach(function (_, slideIndex) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", "Chuyển đến slide " + (slideIndex + 1));
      dot.addEventListener("click", function () {
        goTo(slideIndex);
      });
      dots.push(dot);
      if (dotsWrap) {
        dotsWrap.appendChild(dot);
      }
    });

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(index - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(index + 1);
      });
    }

    root.addEventListener("mouseenter", function () {
      window.clearInterval(timer);
    });

    root.addEventListener("mouseleave", restart);
    root.addEventListener("focusin", function () {
      window.clearInterval(timer);
    });
    root.addEventListener("focusout", restart);

    render();
    restart();
  }

  ready(function () {
    document.querySelectorAll("[data-slider]").forEach(initSlider);
  });
})();
