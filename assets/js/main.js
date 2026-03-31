(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function createToast(message, tone) {
    var toast = document.createElement("div");
    toast.className = "toast";
    if (tone) {
      toast.dataset.tone = tone;
    }
    toast.innerHTML =
      "<strong>" + (tone === "error" ? "Thông báo" : "Thành công") + "</strong>" +
      "<p>" + message + "</p>";
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add("is-show");
    });

    window.setTimeout(function () {
      toast.classList.remove("is-show");
      window.setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 260);
    }, 3400);
  }

  window.eduMaxToast = createToast;

  ready(function () {
    var header = document.querySelector(".header-shell");
    var navToggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    var backToTop = document.querySelector("[data-back-to-top]");
    var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    var counters = Array.prototype.slice.call(document.querySelectorAll("[data-counter]"));
    var accordionRoots = Array.prototype.slice.call(document.querySelectorAll("[data-accordion]"));

    function updateHeader() {
      var scrolled = window.scrollY > 14;
      if (header) {
        header.classList.toggle("is-scrolled", scrolled);
      }
      if (backToTop) {
        backToTop.classList.toggle("is-visible", window.scrollY > 500);
      }
    }

    function closeNav() {
      if (!nav || !navToggle) {
        return;
      }
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }

    if (navToggle && nav) {
      navToggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          if (window.matchMedia("(max-width: 991px)").matches) {
            closeNav();
          }
        });
      });

      document.addEventListener("click", function (event) {
        if (!window.matchMedia("(max-width: 991px)").matches) {
          return;
        }
        if (!nav.classList.contains("is-open")) {
          return;
        }
        if (nav.contains(event.target) || navToggle.contains(event.target)) {
          return;
        }
        closeNav();
      });
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.18 }
      );

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }

    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.35 }
      );

      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    } else {
      counters.forEach(function (counter) {
        counter.textContent = formatCounter(Number(counter.dataset.counter), counter.dataset.suffix || "+");
      });
    }

    function formatCounter(value, suffix) {
      return String(value) + suffix;
    }

    function animateCounter(el) {
      var target = Number(el.dataset.counter || 0);
      var suffix = el.dataset.suffix || "+";
      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (start === null) {
          start = timestamp;
        }
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(target * eased);
        el.textContent = formatCounter(value, suffix);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = formatCounter(target, suffix);
        }
      }

      window.requestAnimationFrame(step);
    }

    accordionRoots.forEach(function (root) {
      var single = root.hasAttribute("data-single");
      var items = Array.prototype.slice.call(root.querySelectorAll(".accordion-item"));

      items.forEach(function (item) {
        var trigger = item.querySelector("[data-accordion-trigger]");
        if (!trigger) {
          return;
        }

        trigger.addEventListener("click", function () {
          var isOpen = item.classList.contains("is-open");

          if (single) {
            items.forEach(function (other) {
              if (other !== item) {
                other.classList.remove("is-open");
                var otherTrigger = other.querySelector("[data-accordion-trigger]");
                if (otherTrigger) {
                  otherTrigger.setAttribute("aria-expanded", "false");
                }
              }
            });
          }

          item.classList.toggle("is-open", !isOpen);
          trigger.setAttribute("aria-expanded", String(!isOpen));
        });
      });
    });
  });
})();

