(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function setupCourseFilter() {
    var search = document.querySelector("[data-course-search]");
    var category = document.querySelector("[data-course-category]");
    var level = document.querySelector("[data-course-level]");
    var reset = document.querySelector("[data-course-reset]");
    var results = document.querySelector("[data-course-results]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-course-card]"));

    if (!cards.length || (!search && !category && !level)) {
      return;
    }

    function apply() {
      var query = normalize(search && search.value);
      var selectedCategory = category ? category.value : "all";
      var selectedLevel = level ? level.value : "all";
      var visibleCount = 0;

      cards.forEach(function (card) {
        var haystack = normalize(
          (card.dataset.title || "") +
            " " +
            (card.dataset.description || "") +
            " " +
            (card.dataset.category || "") +
            " " +
            (card.dataset.level || "")
        );
        var matchesQuery = !query || haystack.indexOf(query) !== -1;
        var matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
        var matchesLevel = selectedLevel === "all" || card.dataset.level === selectedLevel;
        var visible = matchesQuery && matchesCategory && matchesLevel;

        card.classList.toggle("is-hidden", !visible);
        if (visible) {
          visibleCount += 1;
        }
      });

      if (results) {
        results.textContent = visibleCount + " khóa học";
      }
    }

    if (search) {
      search.addEventListener("input", apply);
    }
    if (category) {
      category.addEventListener("change", apply);
    }
    if (level) {
      level.addEventListener("change", apply);
    }
    if (reset) {
      reset.addEventListener("click", function () {
        if (search) {
          search.value = "";
        }
        if (category) {
          category.value = "all";
        }
        if (level) {
          level.value = "all";
        }
        apply();
      });
    }

    apply();
  }

  function setupBlogSearch() {
    var search = document.querySelector("[data-blog-search]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-blog-card]"));
    var results = document.querySelector("[data-blog-results]");

    if (!search || !cards.length) {
      return;
    }

    function apply() {
      var query = normalize(search.value);
      var visibleCount = 0;

      cards.forEach(function (card) {
        var haystack = normalize(
          (card.dataset.title || "") + " " + (card.dataset.excerpt || "") + " " + (card.dataset.author || "")
        );
        var visible = !query || haystack.indexOf(query) !== -1;
        card.classList.toggle("is-hidden", !visible);
        if (visible) {
          visibleCount += 1;
        }
      });

      if (results) {
        results.textContent = visibleCount + " bài viết";
      }
    }

    search.addEventListener("input", apply);
    apply();
  }

  ready(function () {
    setupCourseFilter();
    setupBlogSearch();
  });
})();

