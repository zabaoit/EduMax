(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  var courses = [
    {
      slug: "html-css-cho-nguoi-moi",
      title: "HTML & CSS cho người mới bắt đầu",
      category: "front-end",
      level: "beginner",
      badge: "Front-end",
      difficulty: "Cơ bản",
      label: "HTML & CSS",
      thumb: "thumb-blue",
      description: "Học cách xây dựng giao diện website cơ bản, sạch và dễ mở rộng.",
      lessons: "36 bài học",
      hours: "24 giờ học",
      price: "499.000 VNĐ",
    },
    {
      slug: "javascript-co-ban-den-nang-cao",
      title: "JavaScript cơ bản đến nâng cao",
      category: "front-end",
      level: "intermediate",
      badge: "Front-end",
      difficulty: "Trung cấp",
      label: "JavaScript",
      thumb: "thumb-indigo",
      description: "Làm chủ DOM, sự kiện, logic xử lý và tương tác web thực tế.",
      lessons: "48 bài học",
      hours: "32 giờ học",
      price: "1.299.000 VNĐ",
    },
    {
      slug: "responsive-web-design",
      title: "Responsive Web Design",
      category: "front-end",
      level: "beginner",
      badge: "Front-end",
      difficulty: "Cơ bản",
      label: "Responsive",
      thumb: "thumb-orange",
      description: "Thiết kế website hiển thị tốt trên desktop, tablet và mobile.",
      lessons: "30 bài học",
      hours: "18 giờ học",
      price: "699.000 VNĐ",
    },
    {
      slug: "bootstrap-thuc-hanh",
      title: "Bootstrap thực hành",
      category: "front-end",
      level: "beginner",
      badge: "Front-end",
      difficulty: "Cơ bản",
      label: "Bootstrap",
      thumb: "thumb-teal",
      description: "Tăng tốc xây dựng giao diện hiện đại với hệ thống component sẵn có.",
      lessons: "28 bài học",
      hours: "20 giờ học",
      price: "599.000 VNĐ",
    },
    {
      slug: "ui-ux-co-ban-cho-nguoi-lam-web",
      title: "UI/UX cơ bản cho người làm web",
      category: "uiux",
      level: "intermediate",
      badge: "UI/UX",
      difficulty: "Trung cấp",
      label: "UI/UX",
      thumb: "thumb-pink",
      description: "Tìm hiểu nguyên tắc thiết kế giao diện hiệu quả và dễ dùng.",
      lessons: "22 bài học",
      hours: "16 giờ học",
      price: "899.000 VNĐ",
    },
    {
      slug: "du-an-website-hoan-chinh",
      title: "Dự án website hoàn chỉnh",
      category: "project",
      level: "advanced",
      badge: "Project",
      difficulty: "Nâng cao",
      label: "Project",
      thumb: "thumb-slate",
      description: "Xây dựng một website hoàn thiện từ đầu đến cuối với quy trình thực chiến.",
      lessons: "40 bài học",
      hours: "36 giờ học",
      price: "1.499.000 VNĐ",
    },
  ];

  var teachers = [
    {
      name: "Nguyễn Minh Anh",
      role: "Front-end Developer",
      initials: "MA",
      tone: "",
      experience: "5 năm kinh nghiệm xây dựng website doanh nghiệp và mentoring người mới.",
      socials: ["F", "Y", "in"],
    },
    {
      name: "Trần Thu Hà",
      role: "UI/UX Designer",
      initials: "TH",
      tone: "orange",
      experience: "Chuyên thiết kế giao diện hiện đại, thân thiện và tối ưu trải nghiệm người dùng.",
      socials: ["F", "IG", "D"],
    },
    {
      name: "Lê Quốc Bảo",
      role: "JavaScript Instructor",
      initials: "QB",
      tone: "indigo",
      experience: "6 năm kinh nghiệm triển khai dự án web thực tế và giảng dạy cho học viên mới.",
      socials: ["F", "GH", "Y"],
    },
    {
      name: "Phạm Gia Huy",
      role: "Front-end Mentor",
      initials: "GH",
      tone: "teal",
      experience: "4 năm hỗ trợ học viên luyện HTML, CSS và xây dựng giao diện chuẩn thiết bị.",
      socials: ["F", "Y", "LI"],
    },
    {
      name: "Đỗ Mai Trang",
      role: "UI Motion Designer",
      initials: "MT",
      tone: "pink",
      experience: "Thiết kế layout, motion nhỏ và hệ thống màu sắc cho nhiều dự án học tập và startup.",
      socials: ["F", "IG", "D"],
    },
    {
      name: "Vũ Thành Đạt",
      role: "Web Instructor",
      initials: "TD",
      tone: "slate",
      experience: "Giảng dạy tư duy lập trình web, tối ưu quy trình học và xây dựng sản phẩm đầu tay cho sinh viên.",
      socials: ["F", "GH", "YT"],
    },
  ];

  var testimonials = [
    {
      name: "Lê Thảo",
      role: "Sinh viên CNTT",
      initials: "LT",
      tone: "",
      text: "Khóa học rất dễ hiểu, giao diện web được hướng dẫn chi tiết và phù hợp cho người mới. Mình đã tự làm được landing page đầu tiên chỉ sau vài buổi học.",
    },
    {
      name: "Khánh Nguyên",
      role: "Học viên chuyển ngành",
      initials: "KN",
      tone: "orange",
      text: "Phần JavaScript và DOM được giải thích cực kỳ dễ hiểu. Các bài tập thực hành giúp mình nhớ lâu hơn hẳn so với việc chỉ xem video.",
    },
    {
      name: "Hồng Anh",
      role: "Người học thiết kế web",
      initials: "HA",
      tone: "indigo",
      text: "Mình thích nhất là lộ trình học rõ ràng và hỗ trợ nhanh từ giảng viên. Sau khóa học, mình có thể tự tin chỉnh sửa website cho dự án cá nhân.",
    },
  ];

  var blogPosts = [
    {
      slug: "lo-trinh-5-buoc-hoc-web",
      title: "Lộ trình 5 bước tự học lập trình web cho người mới",
      date: "15/03/2026",
      author: "EduMax",
      category: "Lộ trình học",
      excerpt: "Một lộ trình gọn, dễ áp dụng để đi từ mục tiêu đến thực hành và portfolio mà không bị quá tải.",
      thumb: "thumb-blue",
      cover: "indigo",
      detail: {
        intro: "Nếu bạn mới bắt đầu, cách an toàn nhất là đi theo một lộ trình ngắn, rõ và dễ duy trì. Thay vì học dàn trải, hãy chia hành trình thành từng chặng nhỏ để nhìn thấy tiến bộ sớm.",
        sections: [
          {
            title: "Bước 1: Xác định mục tiêu học",
            paragraphs: [
              "Hãy tự hỏi bạn muốn làm giao diện, theo front-end hay chỉ cần nắm nền tảng để thử sức với web. Khi có mục tiêu, bạn sẽ biết nên học sâu đến đâu và tránh bỏ thời gian vào phần chưa cần thiết.",
            ],
          },
          {
            title: "Bước 2: Nắm HTML và CSS",
            paragraphs: [
              "HTML giúp bạn dựng khung nội dung, còn CSS giúp bạn tạo bố cục và phong cách hiển thị. Hai phần này nên học song song để bạn sớm nhìn thấy kết quả trên trình duyệt.",
            ],
          },
          {
            title: "Bước 3: Học JavaScript cơ bản",
            paragraphs: [
              "Khi đã quen với giao diện tĩnh, hãy chuyển sang JavaScript để hiểu cách website phản hồi khi người dùng tương tác. Chỉ cần bắt đầu từ biến, điều kiện, vòng lặp và DOM là đủ cho giai đoạn đầu.",
            ],
          },
          {
            title: "Bước 4: Làm một vài dự án nhỏ",
            paragraphs: [
              "Thực hành bằng các bài như to-do list, trang giới thiệu cá nhân hoặc form có kiểm tra dữ liệu. Dự án nhỏ giúp bạn nhớ lâu hơn và nhận ra phần nào mình còn yếu để quay lại ôn tập.",
            ],
          },
          {
            title: "Bước 5: Tạo portfolio và duy trì thói quen học",
            paragraphs: [
              "Gom lại những gì bạn đã làm thành một portfolio đơn giản, rồi tiếp tục nâng cấp bằng các dự án mới. Đây là cách tốt để theo dõi tiến bộ của bản thân và chuẩn bị cho những bước tiếp theo.",
            ],
          },
        ],
        highlight: "Đi chậm, học chắc và làm dự án sớm thường hiệu quả hơn rất nhiều so với việc nhảy cóc giữa quá nhiều chủ đề.",
        closing: "Mỗi ngày chỉ cần một chút, bạn vẫn sẽ tiến bộ rất nhanh nếu luôn gắn kiến thức với thực hành.",
      },
    },
    {
      slug: "html-css-javascript-khac-nhau",
      title: "HTML, CSS và JavaScript khác nhau như thế nào?",
      date: "18/03/2026",
      author: "EduMax",
      category: "Kiến thức nền tảng",
      excerpt: "Giải thích ngắn gọn vai trò của từng ngôn ngữ để bạn hiểu cách chúng kết hợp tạo ra website hoàn chỉnh.",
      thumb: "thumb-indigo",
      cover: "orange",
      detail: {
        intro: "Ba cái tên HTML, CSS và JavaScript thường xuất hiện cùng nhau, nhưng mỗi công cụ đảm nhận một vai trò khác nhau. Khi hiểu rõ chức năng của từng phần, bạn sẽ học web có hệ thống hơn rất nhiều.",
        sections: [
          {
            title: "HTML là phần khung",
            paragraphs: [
              "HTML dùng để tạo cấu trúc và nội dung cho trang web. Nó quyết định tiêu đề, đoạn văn, hình ảnh, nút bấm và những thành phần cơ bản khác mà người dùng nhìn thấy.",
            ],
          },
          {
            title: "CSS là phần giao diện",
            paragraphs: [
              "CSS chịu trách nhiệm về màu sắc, khoảng cách, bố cục và phong cách trình bày. Nhờ CSS, một trang web từ dạng thô sơ có thể trở nên rõ ràng, hiện đại và dễ nhìn hơn.",
            ],
          },
          {
            title: "JavaScript là phần tương tác",
            paragraphs: [
              "JavaScript giúp website có hành vi như mở menu, kiểm tra form, thay đổi nội dung hoặc xử lý nút bấm. Nếu HTML là khung và CSS là diện mạo, thì JavaScript là thứ làm trang web sống động.",
            ],
          },
          {
            title: "Nên học theo thứ tự nào?",
            paragraphs: [
              "Với người mới, thứ tự dễ nhất là HTML trước, CSS sau rồi mới tới JavaScript cơ bản. Cách đi này giúp bạn xây nền tảng chắc hơn và không bị rối khi gặp quá nhiều khái niệm cùng lúc.",
            ],
          },
          {
            title: "Ghép cả ba trong một dự án nhỏ",
            paragraphs: [
              "Hãy thử làm một landing page đơn giản: dùng HTML để dựng nội dung, CSS để tạo giao diện và JavaScript để làm nút bấm hoặc form phản hồi. Đây là cách nhanh nhất để hiểu sự khác nhau giữa ba công nghệ.",
            ],
          },
        ],
        highlight: "HTML tạo khung, CSS tạo hình, JavaScript tạo hành động.",
        closing: "Khi hiểu đúng vai trò của từng phần, việc học lập trình web sẽ rõ ràng và dễ nhớ hơn nhiều.",
      },
    },
    {
      slug: "loi-pho-bien-khi-thiet-ke-landing-page",
      title: "Những lỗi phổ biến khi thiết kế landing page",
      date: "20/03/2026",
      author: "EduMax",
      category: "Thiết kế web",
      excerpt: "Tổng hợp các lỗi bố cục, nội dung và CTA mà người mới thường mắc phải khi làm landing page.",
      thumb: "thumb-orange",
      cover: "slate",
      detail: {
        intro: "Landing page thường dùng để giới thiệu sản phẩm, khóa học hoặc chiến dịch cụ thể, nên mỗi chi tiết đều cần phục vụ một mục tiêu rõ ràng. Khi người mới làm landing page, lỗi thường không nằm ở kỹ thuật mà nằm ở cách sắp xếp nội dung.",
        sections: [
          {
            title: "Tiêu đề quá chung chung",
            paragraphs: [
              "Nhiều trang mở đầu bằng những câu rất đẹp nhưng không nói rõ người dùng sẽ nhận được gì. Một tiêu đề tốt cần trả lời nhanh câu hỏi: sản phẩm này giúp được gì cho tôi?",
            ],
          },
          {
            title: "Nút kêu gọi hành động chưa đủ mạnh",
            paragraphs: [
              "CTA nên rõ ràng, dễ thấy và xuất hiện đúng lúc. Nếu nút bấm mờ nhạt hoặc đặt quá sâu trong trang, người dùng rất dễ bỏ qua hành động bạn muốn họ làm.",
            ],
          },
          {
            title: "Bố cục rối và thiếu khoảng trắng",
            paragraphs: [
              "Landing page không cần nhồi thật nhiều thông tin. Một bố cục thoáng, có nhịp đọc hợp lý sẽ giúp nội dung nổi bật hơn và giữ người xem lâu hơn.",
            ],
          },
          {
            title: "Không tối ưu cho mobile",
            paragraphs: [
              "Phần lớn người dùng sẽ xem trang trên điện thoại, nên giao diện cần co giãn tốt và nút bấm đủ lớn để thao tác dễ dàng. Nếu mobile khó dùng, hiệu quả của landing page sẽ giảm ngay.",
            ],
          },
          {
            title: "Thiếu yếu tố tạo niềm tin",
            paragraphs: [
              "Một vài lời chứng thực, số liệu nổi bật hoặc hình ảnh thật có thể giúp người xem yên tâm hơn. Landing page tốt không chỉ đẹp mà còn phải thuyết phục.",
            ],
          },
        ],
        highlight: "Một landing page tốt cần rõ, ngắn và dẫn người dùng đến hành động cụ thể.",
        closing: "Trước khi thêm hiệu ứng, hãy chắc rằng nội dung, luồng đọc và CTA đã ổn.",
      },
    },
    {
      slug: "cach-xay-dung-portfolio-sinh-vien-it",
      title: "Cách xây dựng portfolio cho sinh viên IT",
      date: "22/03/2026",
      author: "EduMax",
      category: "Career",
      excerpt: "Portfolio là yếu tố giúp bạn nổi bật hơn. Bài viết chia sẻ cách chuẩn bị portfolio gọn, đẹp và thuyết phục.",
      thumb: "thumb-teal",
      cover: "indigo",
      detail: {
        intro: "Portfolio không cần quá cầu kỳ, nhưng cần cho người xem thấy bạn biết làm gì và đã làm được gì. Với sinh viên IT, một portfolio gọn gàng đôi khi hiệu quả hơn rất nhiều so với việc nhồi quá nhiều mục.",
        sections: [
          {
            title: "Chọn vài dự án tốt nhất",
            paragraphs: [
              "Đừng cố đưa mọi bài tập vào portfolio. Hãy chọn 2 đến 4 dự án thể hiện rõ kỹ năng, cách suy nghĩ và mức độ hoàn thiện của bạn.",
            ],
          },
          {
            title: "Viết ngắn gọn về quá trình làm",
            paragraphs: [
              "Ngoài hình ảnh sản phẩm, hãy mô tả mục tiêu, công nghệ đã dùng và vấn đề bạn đã giải quyết. Phần này giúp người xem hiểu cách bạn làm việc chứ không chỉ nhìn thấy giao diện cuối cùng.",
            ],
          },
          {
            title: "Đưa dự án lên môi trường thật",
            paragraphs: [
              "Một portfolio có link chạy thật sẽ đáng tin hơn nhiều so với ảnh chụp màn hình. Nếu có thể, hãy deploy website của bạn để người xem trải nghiệm trực tiếp.",
            ],
          },
          {
            title: "Thêm thông tin liên hệ rõ ràng",
            paragraphs: [
              "Người xem nên có cách liên hệ với bạn chỉ sau vài thao tác. Một email, GitHub hoặc LinkedIn được đặt đúng chỗ sẽ làm portfolio chuyên nghiệp hơn.",
            ],
          },
          {
            title: "Cập nhật thường xuyên",
            paragraphs: [
              "Portfolio là thứ nên sống cùng tiến bộ của bạn. Mỗi khi hoàn thành dự án mới hoặc học thêm kỹ năng mới, hãy thêm vào để hồ sơ luôn phản ánh đúng năng lực hiện tại.",
            ],
          },
        ],
        highlight: "Ít nhưng chất lượng thường tốt hơn nhiều so với một portfolio đầy nhưng rỗng.",
        closing: "Hãy coi portfolio là bản tóm tắt năng lực, không phải nơi nhét hết mọi thứ.",
      },
    },
    {
      slug: "responsive-web-la-gi",
      title: "Responsive web là gì và vì sao quan trọng?",
      date: "25/03/2026",
      author: "EduMax",
      category: "Front-end",
      excerpt: "Vì người dùng truy cập web bằng nhiều thiết bị khác nhau, responsive trở thành kỹ năng bắt buộc.",
      thumb: "thumb-pink",
      cover: "orange",
      detail: {
        intro: "Responsive web là cách thiết kế để giao diện tự thích nghi với nhiều kích thước màn hình khác nhau. Đây là kỹ năng rất quan trọng vì người dùng ngày nay không chỉ xem web trên máy tính mà còn trên điện thoại và máy tính bảng.",
        sections: [
          {
            title: "Responsive nghĩa là gì?",
            paragraphs: [
              "Một giao diện responsive sẽ co giãn hoặc thay đổi bố cục để phù hợp với từng thiết bị. Mục tiêu là giữ cho nội dung luôn dễ đọc và dễ thao tác.",
            ],
          },
          {
            title: "Bắt đầu từ tư duy mobile-first",
            paragraphs: [
              "Thiết kế từ màn hình nhỏ trước giúp bạn tập trung vào phần quan trọng nhất của nội dung. Sau đó, bạn mở rộng dần cho màn hình lớn hơn.",
            ],
          },
          {
            title: "Dùng layout linh hoạt",
            paragraphs: [
              "Thay vì đặt kích thước cố định cho mọi thứ, hãy ưu tiên các giá trị co giãn, lưới linh hoạt và thành phần có thể xếp lại theo không gian hiển thị.",
            ],
          },
          {
            title: "Kết hợp media queries",
            paragraphs: [
              "Media queries cho phép giao diện thay đổi ở các điểm gãy khác nhau. Nhờ đó bạn có thể điều chỉnh cỡ chữ, lề, cột và vị trí các thành phần sao cho hợp lý hơn.",
            ],
          },
          {
            title: "Luôn kiểm tra trên nhiều thiết bị",
            paragraphs: [
              "Đừng chỉ nhìn website trên màn hình máy tính. Hãy thử trên điện thoại, tablet và nhiều độ phân giải để đảm bảo trải nghiệm không bị vỡ bố cục.",
            ],
          },
        ],
        highlight: "Responsive không chỉ là co nhỏ giao diện, mà là thiết kế theo ngữ cảnh sử dụng.",
        closing: "Một trang web tốt phải dùng được thoải mái ở cả desktop lẫn điện thoại.",
      },
    },
    {
      slug: "bat-dau-hoc-front-end-tu-dau",
      title: "Nên bắt đầu học Front-end từ đâu?",
      date: "27/03/2026",
      author: "EduMax",
      category: "Lộ trình học",
      excerpt: "Nếu bạn đang phân vân bắt đầu như thế nào, đây là bài viết dành cho bạn với danh sách tài nguyên dễ theo.",
      thumb: "thumb-slate",
      cover: "slate",
      detail: {
        intro: "Nếu bạn chưa biết nên bắt đầu từ đâu, hãy đi theo thứ tự dễ nhớ và dễ kiểm tra tiến độ. Front-end là một hành trình khá dài, nhưng bạn hoàn toàn có thể rút ngắn sự mơ hồ bằng cách chia nó thành từng chặng.",
        sections: [
          {
            title: "Bắt đầu với HTML và CSS",
            paragraphs: [
              "Hai phần này là nền tảng để bạn hiểu cách xây dựng cấu trúc và giao diện của website. Khi đã quen, bạn sẽ dễ đọc code và dễ tự tạo trang đơn giản hơn.",
            ],
          },
          {
            title: "Sau đó học JavaScript cơ bản",
            paragraphs: [
              "JavaScript giúp giao diện có tương tác, nên đây là bước tiếp theo rất tự nhiên. Hãy bắt đầu từ biến, điều kiện, vòng lặp, hàm và DOM trước khi đi xa hơn.",
            ],
          },
          {
            title: "Làm quen với Git và GitHub",
            paragraphs: [
              "Bạn không cần học quá sâu ngay từ đầu, nhưng nên biết cách lưu phiên bản code và đưa dự án lên GitHub. Điều này giúp bạn quản lý bài tập và portfolio tốt hơn.",
            ],
          },
          {
            title: "Làm các dự án nhỏ",
            paragraphs: [
              "Sau mỗi phần lý thuyết, hãy làm một bài nhỏ để củng cố. Những dự án như trang giới thiệu cá nhân, to-do list hay form validation sẽ giúp bạn nhớ lâu hơn.",
            ],
          },
          {
            title: "Chọn lộ trình phù hợp với mục tiêu",
            paragraphs: [
              "Khi đã có nền tảng, bạn có thể rẽ sang React, UI, hoặc tập trung vào dự án thực tế tùy hướng đi của mình. Quan trọng là đừng ôm quá nhiều thứ cùng lúc.",
            ],
          },
        ],
        highlight: "Đừng cố học mọi thứ trong một lần; hãy chia thành chặng ngắn và đo tiến bộ sau mỗi chặng.",
        closing: "Sau khi có nền tảng, bạn có thể rẽ sang front-end, UI hoặc dự án cá nhân tùy mục tiêu.",
      },
    },
  ];

  function getQueryParam(name) {
    if (!window.location.search) {
      return "";
    }

    var query = window.location.search.replace(/^\?/, "").split("&");

    for (var i = 0; i < query.length; i += 1) {
      if (!query[i]) {
        continue;
      }

      var pair = query[i].split("=");
      var key = decodeURIComponent(pair[0] || "");

      if (key === name) {
        return decodeURIComponent((pair[1] || "").replace(/\+/g, " "));
      }
    }

    return "";
  }

  function getBlogPostBySlug(slug) {
    if (!slug) {
      return blogPosts[0];
    }

    for (var i = 0; i < blogPosts.length; i += 1) {
      if (blogPosts[i].slug === slug) {
        return blogPosts[i];
      }
    }

    return blogPosts[0];
  }

  function blogDetailHref(post) {
    return "blog-detail.html?post=" + encodeURIComponent(post.slug);
  }

  function renderBlogParagraphs(paragraphs) {
    return paragraphs
      .map(function (paragraph) {
        return "<p>" + paragraph + "</p>";
      })
      .join("");
  }

  function renderBlogDetailSections(sections) {
    return sections
      .map(function (section) {
        return "<h3>" + section.title + "</h3>" + renderBlogParagraphs(section.paragraphs || []);
      })
      .join("");
  }

  function renderList(items, className) {
    return (
      '<ul class="' +
      className +
      '">' +
      items
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function getCourseBySlug(slug) {
    var defaultSlug = "javascript-co-ban-den-nang-cao";

    function findCourse(targetSlug) {
      for (var i = 0; i < courses.length; i += 1) {
        if (courses[i].slug === targetSlug) {
          return courses[i];
        }
      }
      return null;
    }

    return findCourse(slug) || findCourse(defaultSlug) || courses[0];
  }

  function courseDetailHref(course) {
    return "course-detail.html?course=" + encodeURIComponent(course.slug);
  }

  function getInitials(name) {
    return String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .map(function (part) {
        return part.charAt(0);
      })
      .join("")
      .toUpperCase()
      .slice(0, 3);
  }

  var courseDetails = {
    "html-css-cho-nguoi-moi": {
      subtitle: "Khóa học nền tảng dành cho người mới muốn dựng giao diện web đầu tiên bằng HTML và CSS.",
      instructor: "Phạm Gia Huy",
      instructorBio: "Front-end Mentor, 4 năm kinh nghiệm hướng dẫn người mới xây layout và responsive.",
      audience: [
        "Người chưa từng học web",
        "Sinh viên muốn bắt đầu front-end",
        "Người chuyển ngành sang lập trình",
        "Người cần làm landing page cơ bản",
      ],
      goals: [
        "Hiểu cấu trúc HTML và semantic",
        "Biết dùng CSS để tạo kiểu và bố cục",
        "Làm layout với Flexbox và Grid",
        "Hoàn thiện landing page đầu tay",
      ],
      modules: [
        {
          title: "Module 1: Làm quen HTML",
          items: ["Cấu trúc tài liệu", "Thẻ phổ biến", "Semantic HTML"],
        },
        {
          title: "Module 2: CSS cơ bản",
          items: ["Selector", "Box model", "Typography và màu sắc"],
        },
        {
          title: "Module 3: Bố cục hiện đại",
          items: ["Flexbox", "CSS Grid", "Căn chỉnh phần tử"],
        },
        {
          title: "Module 4: Responsive nền tảng",
          items: ["Media queries", "Hình ảnh linh hoạt", "Mobile-first"],
        },
        {
          title: "Module 5: Mini project",
          items: ["Trang giới thiệu cá nhân", "Landing page sản phẩm", "Hoàn thiện portfolio"],
        },
      ],
      highlight: "Sau khóa học, bạn có thể tự dựng một website tĩnh có bố cục rõ ràng và hiển thị tốt trên nhiều thiết bị.",
      closing: "Đây là bước khởi đầu lý tưởng trước khi chuyển sang JavaScript hoặc các framework.",
    },
    "javascript-co-ban-den-nang-cao": {
      subtitle: "Khóa học giúp bạn làm chủ logic JavaScript, xử lý DOM và xây dựng tương tác web thực tế.",
      instructor: "Lê Quốc Bảo",
      instructorBio: "JavaScript Instructor, 6 năm kinh nghiệm triển khai dự án web và mentoring học viên.",
      audience: [
        "Người mới đã biết HTML và CSS cơ bản",
        "Sinh viên CNTT muốn học logic lập trình",
        "Người chuyển ngành sang front-end",
        "Người muốn làm website có tương tác",
      ],
      goals: [
        "Nắm cú pháp JavaScript nền tảng",
        "Hiểu if/else, vòng lặp và hàm",
        "Thao tác DOM và sự kiện trên trang",
        "Tự xây mini project có tương tác",
      ],
      modules: [
        {
          title: "Module 1: Nền tảng JavaScript",
          items: ["Biến và kiểu dữ liệu", "Toán tử và câu lệnh", "Cách nhúng JS vào HTML"],
        },
        {
          title: "Module 2: Điều khiển luồng",
          items: ["if/else", "switch case", "Vòng lặp"],
        },
        {
          title: "Module 3: Hàm và dữ liệu",
          items: ["function", "array", "object cơ bản"],
        },
        {
          title: "Module 4: DOM và Event",
          items: ["Truy xuất phần tử", "Thay đổi nội dung", "Bắt sự kiện click"],
        },
        {
          title: "Module 5: Dự án thực hành",
          items: ["To-do list", "Form validation", "Landing page có tương tác"],
        },
      ],
      highlight: "Sau khóa học, bạn có thể tự xử lý tương tác cơ bản cho website và hiểu cách JavaScript điều khiển giao diện.",
      closing: "Đây là bước tiếp theo tự nhiên sau khi bạn đã nắm HTML và CSS.",
    },
    "responsive-web-design": {
      subtitle: "Khóa học dành cho người muốn thiết kế website hiển thị tốt trên desktop, tablet và mobile.",
      instructor: "Phạm Gia Huy",
      instructorBio: "Front-end Mentor, chuyên tối ưu giao diện đa thiết bị và bố cục linh hoạt.",
      audience: [
        "Người đã biết HTML và CSS cơ bản",
        "Học viên muốn tối ưu giao diện mobile",
        "Người làm landing page hoặc portfolio",
        "Người muốn hiểu tư duy mobile-first",
      ],
      goals: [
        "Biết tư duy mobile-first",
        "Dùng layout linh hoạt với Flexbox và Grid",
        "Tạo giao diện phù hợp nhiều breakpoint",
        "Kiểm tra và tinh chỉnh hiển thị trên nhiều thiết bị",
      ],
      modules: [
        {
          title: "Module 1: Tư duy responsive",
          items: ["Viewport và breakpoint", "Mobile-first", "Nguyên tắc co giãn"],
        },
        {
          title: "Module 2: Flexbox và Grid",
          items: ["Xếp cột linh hoạt", "Wrap và alignment", "Layout theo tỉ lệ"],
        },
        {
          title: "Module 3: Media queries",
          items: ["Chọn breakpoint", "Tùy biến cỡ chữ", "Ẩn/hiện thành phần"],
        },
        {
          title: "Module 4: Hình ảnh và component",
          items: ["Ảnh responsive", "Navbar mobile", "Card và bảng"],
        },
        {
          title: "Module 5: Dự án responsive",
          items: ["Landing page đa thiết bị", "Portfolio cá nhân", "Kiểm tra và tinh chỉnh"],
        },
      ],
      highlight: "Responsive không chỉ là co nhỏ giao diện, mà là thiết kế theo ngữ cảnh sử dụng.",
      closing: "Một trang web tốt phải dùng được thoải mái ở cả desktop lẫn điện thoại.",
    },
    "bootstrap-thuc-hanh": {
      subtitle: "Khóa học giúp bạn xây giao diện nhanh bằng Bootstrap và tận dụng hệ thống component có sẵn.",
      instructor: "Nguyễn Minh Anh",
      instructorBio: "Front-end Developer, 5 năm kinh nghiệm xây dựng website doanh nghiệp và component system.",
      audience: [
        "Người muốn dựng giao diện nhanh",
        "Sinh viên cần prototype sớm",
        "Người mới học front-end",
        "Người muốn hiểu Bootstrap để đi dự án",
      ],
      goals: [
        "Nắm grid system của Bootstrap",
        "Dùng component và utility class",
        "Tùy biến theme cơ bản",
        "Xây trang hoàn chỉnh bằng Bootstrap",
      ],
      modules: [
        {
          title: "Module 1: Làm quen Bootstrap",
          items: ["Cài đặt", "CDN và file local", "Cấu trúc dự án"],
        },
        {
          title: "Module 2: Grid system",
          items: ["Container và row", "Columns", "Responsive breakpoints"],
        },
        {
          title: "Module 3: Component phổ biến",
          items: ["Button và card", "Navbar và modal", "Form và alert"],
        },
        {
          title: "Module 4: Utility classes",
          items: ["Spacing", "Display và flex", "Color và typography"],
        },
        {
          title: "Module 5: Xây landing page",
          items: ["Dựng layout nhanh", "Tùy biến giao diện", "Hoàn thiện sản phẩm"],
        },
      ],
      highlight: "Bootstrap giúp bạn rút ngắn thời gian dựng layout và tập trung hơn vào nội dung sản phẩm.",
      closing: "Đây là lựa chọn phù hợp khi bạn cần làm giao diện nhanh mà vẫn gọn gàng.",
    },
    "ui-ux-co-ban-cho-nguoi-lam-web": {
      subtitle: "Khóa học dành cho người muốn hiểu tư duy thiết kế giao diện, luồng sử dụng và trải nghiệm người dùng.",
      instructor: "Trần Thu Hà",
      instructorBio: "UI/UX Designer, chuyên thiết kế giao diện hiện đại và tối ưu trải nghiệm người dùng.",
      audience: [
        "Người làm web muốn hiểu UX",
        "Sinh viên thiết kế hoặc sản phẩm số",
        "Người chuyển sang UI/UX",
        "Người cần làm wireframe và prototype",
      ],
      goals: [
        "Hiểu research và user flow",
        "Biết wireframe và prototype",
        "Xây hệ thống màu sắc và component",
        "Trình bày thiết kế rõ ràng cho team dev",
      ],
      modules: [
        {
          title: "Module 1: Tư duy UI/UX",
          items: ["Vai trò của UI và UX", "Nguyên tắc sử dụng", "Phân biệt đẹp và hiệu quả"],
        },
        {
          title: "Module 2: Nghiên cứu người dùng",
          items: ["Xác định nhu cầu", "Persona cơ bản", "User flow"],
        },
        {
          title: "Module 3: Wireframe và layout",
          items: ["Phác thảo khung", "Cấu trúc màn hình", "Làm việc với lưới"],
        },
        {
          title: "Module 4: Visual design",
          items: ["Màu sắc và typography", "Spacing và hierarchy", "Component cơ bản"],
        },
        {
          title: "Module 5: Prototype và handoff",
          items: ["Prototype", "Nhận feedback", "Bàn giao cho dev"],
        },
      ],
      highlight: "UI tốt giúp người dùng thấy rõ, UX tốt giúp người dùng đi đúng hướng.",
      closing: "Khóa học này phù hợp nếu bạn muốn thiết kế giao diện có chiều sâu thay vì chỉ làm đẹp bề mặt.",
    },
    "du-an-website-hoan-chinh": {
      subtitle: "Khóa học thực chiến giúp bạn ghép HTML, CSS, JavaScript và responsive vào một website hoàn chỉnh.",
      instructor: "Vũ Thành Đạt",
      instructorBio: "Web Instructor, tập trung tư duy lập trình web và hoàn thiện sản phẩm đầu tay cho sinh viên.",
      audience: [
        "Người đã học nền tảng front-end",
        "Người muốn làm project thật",
        "Sinh viên cần portfolio để đi xin việc",
        "Người muốn luyện quy trình từ đầu đến cuối",
      ],
      goals: [
        "Lên cấu trúc dự án rõ ràng",
        "Xây layout và responsive hoàn chỉnh",
        "Thêm tương tác JavaScript cơ bản",
        "Deploy website hoàn chỉnh lên hosting",
      ],
      modules: [
        {
          title: "Module 1: Lên kế hoạch dự án",
          items: ["Chọn đề tài", "Sitemap và wireframe", "Chia task"],
        },
        {
          title: "Module 2: Xây dựng giao diện",
          items: ["Header và hero", "Section nội dung", "Footer"],
        },
        {
          title: "Module 3: Responsive và tối ưu",
          items: ["Bố cục đa thiết bị", "Tối ưu hình ảnh", "Kiểm tra breakpoints"],
        },
        {
          title: "Module 4: Tương tác cơ bản",
          items: ["Menu mobile", "Form validation", "Slider hoặc tab"],
        },
        {
          title: "Module 5: Hoàn thiện và deploy",
          items: ["Code review", "Deploy lên hosting", "Viết mô tả portfolio"],
        },
      ],
      highlight: "Một project hoàn chỉnh là cách nhanh nhất để chứng minh năng lực front-end của bạn.",
      closing: "Khóa học này phù hợp khi bạn đã sẵn sàng ghép mọi kiến thức thành một sản phẩm thật.",
    },
  };

  var faqItems = [
    {
      question: "Tôi chưa biết gì về code thì có học được không?",
      answer:
        "Hoàn toàn có thể. Các khóa học tại EduMax được thiết kế từ nền tảng, giải thích chậm, có ví dụ minh họa và bài tập từng bước cho người mới bắt đầu.",
    },
    {
      question: "Học online có bài tập thực hành không?",
      answer:
        "Có. Mỗi bài đều đi kèm thực hành ngắn, mini project và một dự án cuối khóa để học viên có sản phẩm hoàn chỉnh đưa vào portfolio.",
    },
    {
      question: "Sau khi học xong tôi nhận được gì?",
      answer:
        "Bạn sẽ có kiến thức nền tảng, kỹ năng tự làm website, sản phẩm thực tế để giới thiệu và chứng chỉ hoàn thành khóa học từ EduMax.",
    },
    {
      question: "Có được hỗ trợ sau khóa học không?",
      answer:
        "Có. Học viên có thể liên hệ EduMax để được tư vấn thêm về bài tập, portfolio hoặc định hướng lộ trình học tiếp theo.",
    },
  ];

  function pageHero(title, breadcrumb, lead) {
    return (
      '<section class="page-hero">' +
      '<div class="container">' +
      '<div class="page-hero-card reveal">' +
      '<div class="page-hero-grid">' +
      '<div class="breadcrumbs">' +
      breadcrumb +
      "</div>" +
      "<h1>" +
      title +
      "</h1>" +
      "<p>" +
      lead +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function header(active, pageKey) {
    var navItem = function (href, label, key) {
      return '<a class="nav-link' + (active === key ? " is-active" : "") + '" href="' + href + '">' + label + "</a>";
    };

    return (
      '<header class="header-shell">' +
      '<div class="container nav-wrap">' +
      '<a class="brand" href="index.html" aria-label="EduMax trang chủ">' +
      '<span class="brand-mark">E</span>' +
      '<span class="brand-copy">' +
      "<strong>EduMax</strong>" +
      "<small>Nền tảng học lập trình web</small>" +
      "</span>" +
      "</a>" +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-label="Mở menu" data-nav-toggle>' +
      "<span></span><span></span><span></span>" +
      "</button>" +
      '<nav class="site-nav" data-nav>' +
      navItem("index.html", "Trang chủ", "home") +
      navItem("about.html", "Giới thiệu", "about") +
      navItem("courses.html", "Khóa học", "courses") +
      navItem("teachers.html", "Giảng viên", "teachers") +
      navItem("blog.html", "Blog", "blog") +
      navItem(getContactHref(pageKey), "Liên hệ", "contact") +
      '<a class="btn btn-primary nav-cta" href="' +
      getRegisterHref(pageKey) +
      '">Đăng ký ngay</a>' +
      "</nav>" +
      "</div>" +
      "</header>"
    );
  }

  function footer() {
    return (
      '<footer class="footer">' +
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-brand">' +
      '<a class="brand" href="index.html">' +
      '<span class="brand-mark">E</span>' +
      '<span class="brand-copy"><strong>EduMax</strong><small>Nền tảng học lập trình web</small></span>' +
      "</a>" +
      "<p>EduMax là website tĩnh mô phỏng nền tảng học online, tập trung vào giao diện hiện đại, nội dung rõ ràng và trải nghiệm người dùng chuyên nghiệp.</p>" +
      '<div class="footer-social">' +
      '<a class="social-link" href="#" aria-label="Facebook">F</a>' +
      '<a class="social-link" href="#" aria-label="YouTube">Y</a>' +
      '<a class="social-link" href="#" aria-label="TikTok">T</a>' +
      "</div>" +
      "</div>" +
      "<div>" +
      "<h4>Liên kết nhanh</h4>" +
      '<div class="footer-links">' +
      '<a href="about.html">Giới thiệu</a>' +
      '<a href="courses.html">Khóa học</a>' +
      '<a href="teachers.html">Giảng viên</a>' +
      '<a href="blog.html">Blog</a>' +
      '<a href="contact.html#contact-form">Liên hệ</a>' +
      "</div>" +
      "</div>" +
      "<div>" +
      "<h4>Thông tin liên hệ</h4>" +
      '<div class="footer-contact">' +
      "<span>123 Nguyễn Văn Linh, Đà Nẵng</span>" +
      '<a href="tel:0909123456">0909 123 456</a>' +
      '<a href="mailto:info@edumax.vn">info@edumax.vn</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<span>© 2026 EduMax. All rights reserved.</span>" +
      "<span>Thiết kế website tĩnh giới thiệu nền tảng khóa học online</span>" +
      "</div>" +
      "</div>" +
      "</footer>" +
      '<button class="back-to-top" type="button" aria-label="Lên đầu trang" data-back-to-top>↑</button>'
    );
  }

  function renderBrowserPanel(title, text, cls, lines) {
    var lineMarkup = (lines || [80, 68, 55, 44])
      .map(function (width) {
        return '<span class="code-line w-' + width + '"></span>';
      })
      .join("");

    return (
      '<div class="browser-window">' +
      '<div class="browser-topbar">' +
      '<span class="browser-dot red"></span>' +
      '<span class="browser-dot yellow"></span>' +
      '<span class="browser-dot green"></span>' +
      "</div>" +
      '<div class="browser-content">' +
      '<div class="browser-panel ' + (cls || "") + '">' +
      "<h3>" +
      title +
      "</h3>" +
      "<p>" +
      text +
      "</p>" +
      '<div class="code-window">' +
      lineMarkup +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function cardCourse(course) {
    return (
      '<article class="card course-card reveal" data-course-card data-title="' +
      course.title +
      '" data-description="' +
      course.description +
      '" data-category="' +
      course.category +
      '" data-level="' +
      course.level +
      '">' +
      '<div class="course-thumb ' + course.thumb + '">' +
      course.label +
      "</div>" +
      '<div class="card-body">' +
      '<div class="course-meta">' +
      '<span class="tag">' + course.badge + "</span>" +
      '<span class="tag">' + course.difficulty + "</span>" +
      "</div>" +
      '<h3 class="card-title">' +
      course.title +
      "</h3>" +
      '<p class="card-text">' +
      course.description +
      "</p>" +
      '<ul class="course-list">' +
      "<li>" +
      course.lessons +
      "</li>" +
      "<li>" +
      course.hours +
      "</li>" +
      "<li>" +
      course.price +
      "</li>" +
      "</ul>" +
      '<div class="course-footer">' +
      '<div class="course-price"><strong>' +
      course.price +
      "</strong></div>" +
      '<a class="btn btn-secondary" href="' + courseDetailHref(course) + '">Xem chi tiết</a>' +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function cardTeacher(teacher) {
    return (
      '<article class="card teacher-card reveal">' +
      '<div class="card-body">' +
      '<div class="teacher-info">' +
      '<div class="avatar ' + (teacher.tone || "") + ' teacher-avatar">' +
      teacher.initials +
      "</div>" +
      "<div>" +
      '<h3 class="card-title">' +
      teacher.name +
      "</h3>" +
      '<div class="teacher-role">' +
      teacher.role +
      "</div>" +
      '<p class="card-text">' +
      teacher.experience +
      "</p>" +
      "</div>" +
      '<div class="social-links">' +
      teacher.socials
        .map(function (label) {
          return '<a class="social-link" href="#" aria-label="' + label + '">' + label + "</a>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function cardBlog(post) {
    return (
      '<article class="card blog-card reveal" data-blog-card data-title="' +
      post.title +
      '" data-excerpt="' +
      post.excerpt +
      '" data-author="' +
      post.author +
      '">' +
      '<div class="course-thumb ' + post.thumb + '">' +
      post.category +
      "</div>" +
      '<div class="card-body">' +
      '<div class="blog-meta">' +
      "<span>" +
      post.date +
      "</span>" +
      "<span>•</span>" +
      "<span>" +
      post.author +
      "</span>" +
      "</div>" +
      '<h3 class="card-title">' +
      post.title +
      "</h3>" +
      '<p class="card-text">' +
      post.excerpt +
      "</p>" +
      '<div class="blog-footer">' +
      '<span class="tag">' + post.category + "</span>" +
      '<a class="btn btn-secondary" href="' + blogDetailHref(post) + '">Đọc thêm</a>' +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function cardTestimonial(testimonial) {
    return (
      '<article class="card slider-slide" data-slider-slide>' +
      '<div class="testimonial-card">' +
      '<div class="quote-mark">“</div>' +
      "<p>" +
      testimonial.text +
      "</p>" +
      '<div class="testimonial-profile">' +
      '<div class="avatar ' + (testimonial.tone || "") + '">' +
      testimonial.initials +
      "</div>" +
      "<div>" +
      "<strong>" +
      testimonial.name +
      "</strong>" +
      "<small>" +
      testimonial.role +
      "</small>" +
      "</div>" +
      '<span class="rating" aria-label="5 sao">★★★★★</span>' +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function testimonialSlider() {
    return (
      '<div class="testimonial-wrap reveal">' +
      '<div class="slider-shell" data-slider data-autoplay="true" data-interval="5400">' +
      '<div class="slider-track" data-slider-track>' +
      testimonials.map(cardTestimonial).join("") +
      "</div>" +
      '<div class="slider-controls">' +
      '<div class="slider-actions">' +
      '<button class="icon-btn" type="button" data-slider-prev aria-label="Đánh giá trước">←</button>' +
      '<button class="icon-btn" type="button" data-slider-next aria-label="Đánh giá tiếp">→</button>' +
      "</div>" +
      '<div class="slider-dots" data-slider-dots></div>' +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function renderSectionHeading(eyebrow, title, lead, action) {
    return (
      '<div class="section-heading reveal">' +
      '<div>' +
      '<p class="section-eyebrow">' + eyebrow + "</p>" +
      '<h2 class="section-title">' + title + "</h2>" +
      (lead ? '<p class="section-lead">' + lead + "</p>" : "") +
      "</div>" +
      (action || "") +
      "</div>"
    );
  }

  function getContactHref(pageKey) {
    return pageKey === "contact" ? "#contact-form" : "contact.html#contact-form";
  }

  function getRegisterHref(pageKey) {
    return pageKey === "contact" || pageKey === "courseDetail"
      ? "#register-course"
      : "contact.html#register-course";
  }

  function getPageQuery(param, fallback, maxPages) {
    if (
      typeof window === "undefined" ||
      !window.location ||
      !window.URLSearchParams
    ) {
      return fallback;
    }

    var raw = new window.URLSearchParams(window.location.search).get(param);
    var page = parseInt(raw, 10);

    if (isNaN(page) || page < 1) {
      return fallback;
    }

    if (typeof maxPages === "number") {
      page = Math.min(page, maxPages);
    }

    return page;
  }

  function buildPageLink(basePath, page) {
    return page > 1 ? basePath + "?page=" + page : basePath;
  }

  function renderPagination(currentPage, totalPages, basePath) {
    if (totalPages <= 1) {
      return "";
    }

    var links = [];

    for (var i = 1; i <= totalPages; i++) {
      links.push(
        '<a class="' +
          (i === currentPage ? "is-active" : "") +
          '" href="' +
          buildPageLink(basePath, i) +
          '">' +
          i +
          "</a>"
      );
    }

    if (currentPage < totalPages) {
      links.push(
        '<a href="' +
          buildPageLink(basePath, currentPage + 1) +
          '">Next</a>'
      );
    } else {
      links.push('<span aria-disabled="true">Next</span>');
    }

    return '<div class="pagination reveal">' + links.join("") + "</div>";
  }

  function renderHome() {
    return (
      "<main>" +
      '<section class="hero">' +
      '<div class="container hero-shell reveal">' +
      '<div class="hero-slider" data-slider data-slider-mode="fade" data-autoplay="true" data-interval="6500">' +
      '<div class="hero-track" data-slider-track>' +
      '<article class="hero-slide is-active" data-slider-slide>' +
      '<div class="hero-copy">' +
      '<div class="hero-kicker"><span class="chip">Lộ trình rõ ràng</span><span class="chip badge-soft">100% thực hành</span></div>' +
      '<h1 class="hero-title">Học lập trình web từ cơ bản đến <span>nâng cao</span></h1>' +
      '<p class="hero-lead">EduMax là nền tảng học online giúp bạn làm chủ HTML, CSS, JavaScript và xây dựng website thực tế với giao diện hiện đại, dễ theo dõi.</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="' +
      getRegisterHref("home") +
      '">Đăng ký ngay</a><a class="btn btn-secondary" href="courses.html">Xem khóa học</a></div>' +
      '<div class="hero-metrics">' +
      '<div class="metric-card"><span class="metric-value">5.000+</span><span class="metric-label">Học viên đã đồng hành</span></div>' +
      '<div class="metric-card"><span class="metric-value">20+</span><span class="metric-label">Khóa học đa dạng</span></div>' +
      '<div class="metric-card"><span class="metric-value">95%</span><span class="metric-label">Hài lòng sau khóa</span></div>' +
      "</div>" +
      "</div>" +
      '<div class="hero-visual">' +
      renderBrowserPanel("Website học online hiện đại", "HTML, CSS, JavaScript, Bootstrap và dự án thực chiến", "", [80, 68, 55, 44]) +
      '<div class="floating-card top-left"><strong>24 buổi</strong><small>JavaScript nâng cao</small></div>' +
      '<div class="floating-card bottom-right"><strong>1:1 Mentor</strong><small>Hỗ trợ học viên</small></div>' +
      '<div class="floating-card center"><strong>100% Online</strong><small>Học mọi lúc, mọi nơi</small></div>' +
      "</div>" +
      "</article>" +
      '<article class="hero-slide" data-slider-slide>' +
      '<div class="hero-copy">' +
      '<div class="hero-kicker"><span class="chip">Dự án thật</span><span class="chip badge-soft">Giảng viên đồng hành</span></div>' +
      '<h2 class="hero-title">Làm website thực tế như một <span>front-end developer</span></h2>' +
      '<p class="hero-lead">Mỗi khóa học tại EduMax đều đi kèm bài tập, mini project và dự án cuối khóa để bạn có sản phẩm đưa vào portfolio cá nhân.</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="courses.html">Bắt đầu học ngay</a><a class="btn btn-light" href="' +
      courseDetailHref(courses[1]) +
      '">Xem lộ trình</a></div>' +
      '<div class="hero-metrics">' +
      '<div class="metric-card"><span class="metric-value">6+</span><span class="metric-label">Dự án thực hành</span></div>' +
      '<div class="metric-card"><span class="metric-value">10+</span><span class="metric-label">Giảng viên kinh nghiệm</span></div>' +
      '<div class="metric-card"><span class="metric-value">24/7</span><span class="metric-label">Tài liệu học tập</span></div>' +
      "</div>" +
      "</div>" +
      '<div class="hero-visual">' +
      renderBrowserPanel("Xây dựng giao diện chuẩn responsive", "Thiết kế đẹp trên desktop, tablet và mobile", "alt", [80, 80, 68, 55]) +
      '<div class="floating-card top-left"><strong>Responsive</strong><small>Chuẩn mobile-first</small></div>' +
      '<div class="floating-card bottom-right"><strong>Portfolio</strong><small>Đủ mạnh để showcase</small></div>' +
      "</div>" +
      "</article>" +
      '<article class="hero-slide" data-slider-slide>' +
      '<div class="hero-copy">' +
      '<div class="hero-kicker"><span class="chip">Học thử miễn phí</span><span class="chip badge-soft">Cộng đồng hỗ trợ</span></div>' +
      '<h2 class="hero-title">Bắt đầu hành trình học code <span>ngay hôm nay</span></h2>' +
      '<p class="hero-lead">Chỉ với một vài cú click, bạn có thể khám phá khóa học phù hợp, học thử chương đầu và nhận tư vấn lộ trình cá nhân hóa từ đội ngũ EduMax.</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="' +
      getContactHref("home") +
      '">Nhận tư vấn</a><a class="btn btn-secondary" href="blog.html">Đọc blog</a></div>' +
      '<div class="hero-metrics">' +
      '<div class="metric-card"><span class="metric-value">30+</span><span class="metric-label">Bài học miễn phí</span></div>' +
      '<div class="metric-card"><span class="metric-value">1.299.000</span><span class="metric-label">Gói JavaScript phổ biến</span></div>' +
      '<div class="metric-card"><span class="metric-value">24/7</span><span class="metric-label">Hỗ trợ qua email</span></div>' +
      "</div>" +
      "</div>" +
      '<div class="hero-visual">' +
      renderBrowserPanel("Tư duy làm sản phẩm", "Không chỉ học code, bạn còn học cách triển khai website hoàn chỉnh", "slate", [80, 68, 68, 55]) +
      '<div class="floating-card top-left"><strong>Chứng chỉ</strong><small>Hoàn thành khóa học</small></div>' +
      '<div class="floating-card bottom-right"><strong>Mentor</strong><small>Phản hồi bài tập</small></div>' +
      "</div>" +
      "</article>" +
      "</div>" +
      '<div class="slider-controls">' +
      '<div class="slider-actions"><button class="icon-btn" type="button" data-slider-prev aria-label="Slide trước">←</button><button class="icon-btn" type="button" data-slider-next aria-label="Slide tiếp">→</button></div>' +
      '<div class="slider-dots" data-slider-dots></div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading(
        "Lợi ích nổi bật",
        "Học tập linh hoạt, dễ tiếp cận, phù hợp người mới",
        "EduMax tập trung vào trải nghiệm học dễ hiểu với nội dung cô đọng, bài tập thực hành rõ ràng và hệ thống hỗ trợ bền vững.",
        ""
      ) +
      '<div class="grid grid-4">' +
      '<article class="card feature-card reveal"><span class="feature-icon">24/7</span><h3 class="card-title">Học mọi lúc, mọi nơi</h3><p>Video, tài liệu và bài tập đều được sắp xếp khoa học để bạn học theo tốc độ riêng.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">GV</span><h3 class="card-title">Giảng viên kinh nghiệm</h3><p>Học cùng mentor đã từng triển khai dự án web thực tế và hiểu rõ người mới cần gì.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">TH</span><h3 class="card-title">Thực hành liên tục</h3><p>90% thời lượng khóa học là luyện tập, giúp bạn làm được sản phẩm ngay sau mỗi chương.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">HT</span><h3 class="card-title">Hỗ trợ sau khóa</h3><p>Học viên được hỗ trợ giải đáp khi ôn tập, chuẩn bị portfolio hoặc định hướng việc làm.</p></article>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading(
        "Khóa học nổi bật",
        "Ba khóa học tiêu biểu tại EduMax",
        "",
        '<a class="btn btn-secondary" href="courses.html">Xem toàn bộ khóa học</a>'
      ) +
      '<div class="grid grid-3">' +
      courses.slice(0, 3).map(cardCourse).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      '<div class="about-layout">' +
      '<div class="panel reveal">' +
      '<p class="section-eyebrow">Vì sao chọn EduMax?</p>' +
      '<h2 class="section-title">Lộ trình rõ ràng giúp bạn học nhanh hơn và tự tin hơn</h2>' +
      '<p class="section-lead">EduMax được xây dựng để người mới không bị "ngợp" khi bắt đầu. Mọi bài học đều đi từ nền tảng, có ví dụ trực quan và bài tập nhỏ để bạn tiến bộ từng bước.</p>' +
      '<ul class="check-list"><li>Hơn 5.000 học viên đã tham gia</li><li>20+ khóa học theo từng mục tiêu học tập</li><li>10+ giảng viên và mentor giàu kinh nghiệm</li><li>Chứng chỉ sau khi hoàn thành khóa học</li></ul>' +
      "</div>" +
      '<div class="card reveal">' +
      '<div class="media media-pattern-slate"><div><div class="media-label">Học như đang tham gia một lớp thực chiến</div><div class="media-sub">Giao diện thân thiện, trực quan và tập trung vào trải nghiệm học viên</div></div></div>' +
      '<div class="card-body">' +
      '<div class="stats-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr));">' +
      '<div class="stats-card"><span class="stats-number" data-counter="5000">0+</span><span class="stats-label">Học viên</span></div>' +
      '<div class="stats-card"><span class="stats-number" data-counter="20">0+</span><span class="stats-label">Khóa học</span></div>' +
      '<div class="stats-card"><span class="stats-number" data-counter="10">0+</span><span class="stats-label">Giảng viên</span></div>' +
      '<div class="stats-card"><span class="stats-number" data-counter="95" data-suffix="%">0%</span><span class="stats-label">Hài lòng</span></div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Lộ trình học", "4 bước để đi từ người mới đến có sản phẩm", "Mỗi khóa học đều được chia theo tiến trình dễ theo dõi, giúp bạn không bị rối và luôn biết mình đang ở đâu.", "") +
      '<div class="grid grid-4">' +
      '<article class="card feature-card reveal"><span class="feature-icon">01</span><h3 class="card-title">Chọn khóa phù hợp</h3><p>Xác định mục tiêu học tập, trình độ hiện tại và lộ trình cần theo đuổi.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">02</span><h3 class="card-title">Học qua video và tài liệu</h3><p>Nắm kiến thức nền tảng, xem demo trực quan và ghi nhớ theo từng ví dụ nhỏ.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">03</span><h3 class="card-title">Làm bài tập thực hành</h3><p>Áp dụng ngay vào các bài mini-project để rèn tư duy lập trình và bố cục.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">04</span><h3 class="card-title">Hoàn thành dự án cuối khóa</h3><p>Hoàn thiện một website hoàn chỉnh để bổ sung vào portfolio cá nhân.</p></article>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Giảng viên nổi bật", "Đội ngũ mentor đồng hành cùng bạn", "", '<a class="btn btn-secondary" href="teachers.html">Xem tất cả giảng viên</a>') +
      '<div class="grid grid-3">' +
      teachers.map(cardTeacher).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Đánh giá học viên", "Cảm nhận thực tế từ người học", "Các phản hồi dưới đây là mẫu mô phỏng để làm website trông giống một nền tảng thực sự.", "") +
      testimonialSlider() +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("FAQ", "Những câu hỏi thường gặp", "Phần này giúp website nhìn giống một nền tảng học thực sự và hỗ trợ giải đáp nhanh cho người xem.", "") +
      '<div class="faq-grid accordion reveal" data-accordion data-single="true">' +
      faqItems
        .map(function (item, index) {
          return (
            '<article class="accordion-item' + (index === 0 ? " is-open" : "") + '">' +
            '<button class="accordion-trigger" type="button" data-accordion-trigger aria-expanded="' + (index === 0 ? "true" : "false") + '">' +
            item.question +
            "</button>" +
            '<div class="accordion-panel"><div class="accordion-panel-inner">' +
            item.answer +
            "</div></div>" +
            "</article>"
          );
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="panel reveal" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(245, 158, 11, 0.12));">' +
      '<div class="grid grid-2" style="align-items: center;">' +
      "<div>" +
      '<p class="section-eyebrow">CTA</p>' +
      '<h2 class="section-title">Sẵn sàng bắt đầu hành trình học lập trình web?</h2>' +
      '<p class="section-lead">Chọn một khóa học phù hợp, để EduMax đồng hành cùng bạn từ bước đầu tiên đến khi hoàn thành sản phẩm thật.</p>' +
      "</div>" +
      '<div class="form-actions" style="justify-content: flex-end;">' +
      '<a class="btn btn-primary" href="' +
      getRegisterHref("home") +
      '">Đăng ký ngay</a>' +
      '<a class="btn btn-secondary" href="' +
      getContactHref("home") +
      '">Liên hệ tư vấn</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderAbout() {
    return (
      "<main>" +
      pageHero(
        "Về chúng tôi",
        '<a href="index.html">Trang chủ</a><span>/</span><span>Giới thiệu</span>',
        "EduMax là nền tảng học trực tuyến chuyên cung cấp các khóa học về lập trình web, thiết kế giao diện và kỹ năng số. Chúng tôi tập trung vào phương pháp học thực hành và sự đồng hành từ giảng viên giàu kinh nghiệm."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="about-layout">' +
      '<div class="panel reveal">' +
      '<p class="section-eyebrow">Giới thiệu chung</p>' +
      '<h2 class="section-title">EduMax được tạo ra để giúp học viên tiến bộ nhanh hơn</h2>' +
      '<p class="section-lead">Mục tiêu của EduMax là biến những chủ đề khô khan thành lộ trình dễ hiểu, có lộ trình rõ ràng và luôn bám sát nhu cầu thực tế của công việc.</p>' +
      '<ul class="check-list"><li>Học qua ví dụ thực tế và dự án nhỏ</li><li>Giảng viên theo sát tiến trình học</li><li>Nội dung cập nhật theo xu hướng web hiện đại</li><li>Phù hợp cho sinh viên và người mới chuyển ngành</li></ul>' +
      "</div>" +
      '<div class="card reveal">' +
      '<div class="media media-pattern-blue"><div><div class="media-label">Học online nhưng vẫn có cảm giác như một lớp học thật</div><div class="media-sub">Không gian học trực quan, hiện đại, tăng khả năng ghi nhớ</div></div></div>' +
      '<div class="card-body">' +
      '<div class="grid grid-3">' +
      '<div class="stats-card"><span class="stats-number" data-counter="5000">0+</span><span class="stats-label">Học viên</span></div>' +
      '<div class="stats-card"><span class="stats-number" data-counter="30">0+</span><span class="stats-label">Khóa học</span></div>' +
      '<div class="stats-card"><span class="stats-number" data-counter="15">0+</span><span class="stats-label">Giảng viên</span></div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Tầm nhìn - Sứ mệnh - Giá trị", "Xây dựng hệ sinh thái học online gần gũi và thực tế", "", "") +
      '<div class="grid grid-3">' +
      '<article class="card feature-card reveal"><span class="feature-icon">TV</span><h3 class="card-title">Tầm nhìn</h3><p>Trở thành nền tảng học trực tuyến hàng đầu dành cho người mới bắt đầu học công nghệ.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">SM</span><h3 class="card-title">Sứ mệnh</h3><p>Mang đến các khóa học dễ tiếp cận, thực tiễn và phù hợp với nhu cầu nghề nghiệp hiện đại.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">GC</span><h3 class="card-title">Giá trị cốt lõi</h3><p>Chất lượng, thực tiễn, sáng tạo và đồng hành là những giá trị mà EduMax luôn theo đuổi.</p></article>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Thành tựu", "Những con số phản ánh hành trình phát triển", "Các con số dưới đây giúp website mang cảm giác có lịch sử hoạt động và độ tin cậy cao hơn.", "") +
      '<div class="stats-grid">' +
      '<div class="stats-card reveal"><span class="stats-number" data-counter="5000">0+</span><span class="stats-label">Học viên</span></div>' +
      '<div class="stats-card reveal"><span class="stats-number" data-counter="30">0+</span><span class="stats-label">Khóa học</span></div>' +
      '<div class="stats-card reveal"><span class="stats-number" data-counter="15">0+</span><span class="stats-label">Giảng viên</span></div>' +
      '<div class="stats-card reveal"><span class="stats-number" data-counter="95" data-suffix="%">0%</span><span class="stats-label">Hài lòng</span></div>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Hành trình phát triển", "Từ ý tưởng ban đầu đến nền tảng học online hoàn chỉnh", "", "") +
      '<div class="timeline reveal">' +
      '<article class="timeline-item"><div class="timeline-year">2022</div><h3 class="card-title">Thành lập nền tảng</h3><p>EduMax bắt đầu với mục tiêu giúp người mới tiếp cận lập trình web dễ hơn.</p></article>' +
      '<article class="timeline-item"><div class="timeline-year">2023</div><h3 class="card-title">Ra mắt 10 khóa đầu tiên</h3><p>Hệ thống khóa học về HTML, CSS, JavaScript và responsive được hoàn thiện.</p></article>' +
      '<article class="timeline-item"><div class="timeline-year">2024</div><h3 class="card-title">Đạt 3.000 học viên</h3><p>Cộng đồng học viên tăng trưởng ổn định và bắt đầu hình thành nhiều sản phẩm cá nhân.</p></article>' +
      '<article class="timeline-item"><div class="timeline-year">2025</div><h3 class="card-title">Mở rộng front-end và UI/UX</h3><p>EduMax bổ sung nội dung về thiết kế giao diện, tối ưu trải nghiệm và dự án thực chiến.</p></article>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Đội ngũ", "Những người đồng hành phía sau các khóa học", "Đội ngũ của EduMax gồm giảng viên, mentor và bộ phận hỗ trợ học viên luôn sẵn sàng giải đáp.", "") +
      '<div class="grid grid-3">' +
      teachers.slice(0, 3).map(cardTeacher).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      '<div class="panel reveal" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(245, 158, 11, 0.12));">' +
      '<div class="grid grid-2" style="align-items: center;">' +
      "<div>" +
      '<p class="section-eyebrow">CTA</p>' +
      '<h2 class="section-title">Khám phá các khóa học ngay hôm nay</h2>' +
      '<p class="section-lead">Nếu bạn đang tìm một lộ trình học dễ hiểu và thực tế, EduMax là điểm bắt đầu phù hợp để tiến lên front-end.</p>' +
      "</div>" +
      '<div class="form-actions" style="justify-content: flex-end;">' +
      '<a class="btn btn-primary" href="courses.html">Xem khóa học</a>' +
      '<a class="btn btn-secondary" href="' +
      getContactHref("about") +
      '">Liên hệ tư vấn</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderCourses() {
    var perPage = 3;
    var totalPages = Math.max(1, Math.ceil(courses.length / perPage));
    var currentPage = getPageQuery("page", 1, totalPages);
    var startIndex = (currentPage - 1) * perPage;
    var visibleCourses = courses.slice(startIndex, startIndex + perPage);

    return (
      "<main>" +
      pageHero(
        "Khóa học",
        '<a href="index.html">Trang chủ</a><span>/</span><span>Khóa học</span>',
        "Khám phá hệ thống khóa học online của EduMax với nội dung từ cơ bản đến nâng cao, phù hợp cho từng mục tiêu học tập."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="filter-bar reveal">' +
      '<input class="input filter-search" type="search" placeholder="Tìm kiếm khóa học..." data-course-search />' +
      '<select class="select" data-course-category>' +
      '<option value="all">Tất cả danh mục</option>' +
      '<option value="front-end">Front-end</option>' +
      '<option value="uiux">UI/UX</option>' +
      '<option value="project">Dự án</option>' +
      "</select>" +
      '<select class="select" data-course-level>' +
      '<option value="all">Tất cả cấp độ</option>' +
      '<option value="beginner">Cơ bản</option>' +
      '<option value="intermediate">Trung cấp</option>' +
      '<option value="advanced">Nâng cao</option>' +
      "</select>" +
      '<div class="search-results" data-course-results>' +
      visibleCourses.length +
      " khóa học</div>" +
      '<button class="btn btn-secondary filter-reset" type="button" data-course-reset>Xóa bộ lọc</button>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      '<div class="grid grid-3">' +
      visibleCourses.map(cardCourse).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container" style="display:flex; justify-content:center;">' +
      renderPagination(currentPage, totalPages, "courses.html") +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      '<div class="panel reveal" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(245, 158, 11, 0.12));">' +
      '<div class="grid grid-2" style="align-items: center;">' +
      "<div>" +
      '<p class="section-eyebrow">CTA</p>' +
      '<h2 class="section-title">Chưa biết bắt đầu từ đâu? Liên hệ để được tư vấn.</h2>' +
      '<p class="section-lead">EduMax sẽ giúp bạn chọn khóa học phù hợp với trình độ hiện tại, mục tiêu nghề nghiệp và thời gian học.</p>' +
      "</div>" +
      '<div class="form-actions" style="justify-content: flex-end;">' +
      '<a class="btn btn-primary" href="' +
      getContactHref("courses") +
      '">Nhận tư vấn</a>' +
      '<a class="btn btn-secondary" href="' +
      courseDetailHref(courses[1]) +
      '">Xem chi tiết mẫu</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderCourseDetail() {
    var course = getCourseBySlug(getQueryParam("course"));
    var detail = courseDetails[course.slug] || courseDetails["javascript-co-ban-den-nang-cao"];
    var relatedCourses = courses
      .filter(function (item) {
        return item.slug !== course.slug;
      })
      .slice(0, 3);
    var subtitle = detail.subtitle || course.description;
    var instructorName = detail.instructor || "EduMax";
    var instructorBio = detail.instructorBio || "Giảng viên đồng hành cùng học viên trong suốt khóa học.";
    var instructorInitials = getInitials(instructorName);
    var modules = detail.modules || [];
    var audience = detail.audience || [];
    var goals = detail.goals || [];
    var highlight = detail.highlight || course.description;
    var certificate = detail.certificate || "Có chứng chỉ hoàn thành";
    var schedule = detail.schedule || "Học linh hoạt theo video và buổi hỗ trợ trực tuyến";

    if (typeof document !== "undefined") {
      document.title = "EduMax | " + course.title;
      var metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", course.description);
      }
    }

    return (
      "<main>" +
      pageHero(
        "Chi tiết khóa học",
        '<a href="index.html">Trang chủ</a><span>/</span><a href="courses.html">Khóa học</a><span>/</span><span>Chi tiết</span>',
        "Trang này cho phép bạn xem nhanh nội dung, giảng viên và form đăng ký của khóa học đang được chọn."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="detail-layout">' +
      '<div class="panel reveal">' +
      '<div class="course-thumb ' + course.thumb + '" style="min-height: 320px;">' +
      (course.label || course.title) +
      "</div>" +
      '<div class="stack" style="margin-top: 24px;">' +
      '<div class="course-badges"><span class="tag">' +
      course.badge +
      '</span><span class="tag">' +
      course.difficulty +
      '</span><span class="tag">Học online</span></div>' +
      '<h2 class="section-title">' +
      course.title +
      '</h2>' +
      '<p class="section-lead">' +
      subtitle +
      '</p>' +
      '<div class="form-actions"><a class="btn btn-primary" href="' +
      getRegisterHref("courseDetail") +
      '">Đăng ký ngay</a><a class="btn btn-secondary" href="' +
      getContactHref("courseDetail") +
      '">Liên hệ tư vấn</a></div>' +
      "</div>" +
      "</div>" +
      '<div class="panel reveal">' +
      '<p class="section-eyebrow">Thông tin chính</p>' +
      '<div class="stack">' +
      '<div class="contact-item"><span class="contact-icon">⏱</span><div><strong>Thời lượng</strong><small>' +
      course.hours +
      '</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">📘</span><div><strong>Số bài học</strong><small>' +
      course.lessons +
      '</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">👨‍🏫</span><div><strong>Giảng viên</strong><small>' +
      instructorName +
      '</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">💵</span><div><strong>Học phí</strong><small>' +
      course.price +
      '</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">🎓</span><div><strong>Chứng chỉ</strong><small>' +
      certificate +
      '</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">📅</span><div><strong>Lịch học</strong><small>' +
      schedule +
      '</small></div></div>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Mô tả chi tiết", "Khóa học " + course.label + " dành cho ai?", subtitle, "") +
      '<div class="about-layout">' +
      '<div class="panel reveal">' +
      '<h3>Khóa học dành cho ai</h3>' +
      renderList(audience, "check-list") +
      "</div>" +
      '<div class="panel reveal">' +
      '<h3>Mục tiêu khóa học</h3>' +
      renderList(goals, "check-list") +
      "</div>" +
      "</div>" +
      (highlight ? '<div class="highlight-box reveal" style="margin-top: 24px;">' + highlight + "</div>" : "") +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading(
        "Nội dung khóa học",
        "Lộ trình " + modules.length + " module chính",
        "Mỗi module được thiết kế để bạn hiểu nhanh, thực hành ngay và đi từ nền tảng đến dự án thực tế.",
        ""
      ) +
      '<div class="accordion reveal" data-accordion data-single="true">' +
      modules
        .map(function (module, index) {
          return (
            '<article class="accordion-item' + (index === 0 ? " is-open" : "") + '">' +
            '<button class="accordion-trigger" type="button" data-accordion-trigger aria-expanded="' + (index === 0 ? "true" : "false") + '">' +
            module.title +
            "</button>" +
            '<div class="accordion-panel"><div class="accordion-panel-inner">' +
            renderList(module.items || [], "dot-list") +
            "</div></div>" +
            "</article>"
          );
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading(
        "Đối tượng phù hợp",
        "Ai nên tham gia khóa " + course.label + "?",
        "Nếu bạn đang cân nhắc, phần này giúp bạn xác định nhanh khóa học có phù hợp với mình hay không.",
        ""
      ) +
      '<div class="grid grid-2">' +
      '<div class="panel reveal">' +
      renderList(audience, "check-list") +
      "</div>" +
      '<div class="panel reveal"><h3>Giảng viên phụ trách</h3><div class="contact-item"><div class="avatar indigo">' +
      instructorInitials +
      '</div><div><strong>' +
      instructorName +
      '</strong><small>' +
      instructorBio +
      '</small></div></div><p class="page-note">Phần này giúp tăng độ tin cậy và làm cho trang chi tiết giống một khóa học thật hơn.</p></div>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Đánh giá học viên", "Một vài phản hồi từ người đã tham gia", "", "") +
      '<div class="grid grid-3">' +
      testimonials.map(function (item) {
        return (
          '<article class="card reveal"><div class="testimonial-card"><div class="quote-mark">“</div><p>' +
          item.text +
          '</p><div class="testimonial-profile"><div class="avatar ' +
          (item.tone || "") +
          '">' +
          item.initials +
          '</div><div><strong>' +
          item.name +
          '</strong><small>' +
          item.role +
          '</small></div><span class="rating">★★★★★</span></div></div></article>'
        );
      }).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Khóa học liên quan", "Các lựa chọn khác có thể phù hợp với bạn", "", "") +
      '<div class="grid grid-3">' +
      relatedCourses.map(cardCourse).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section" id="register-course">' +
      '<div class="container">' +
      '<div class="panel reveal">' +
      '<div class="grid grid-2" style="align-items: start;">' +
      '<div>' +
      '<p class="section-eyebrow">Form đăng ký nhanh</p>' +
      '<h2 class="section-title">Đăng ký học ' +
      course.label +
      '</h2>' +
      '<p class="section-lead">Điền thông tin bên dưới, EduMax sẽ liên hệ lại để tư vấn lộ trình phù hợp và thời gian bắt đầu.</p>' +
      "</div>" +
      '<form class="form-grid" novalidate data-validate-form data-success-message="Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.">' +
      '<div class="form-grid cols-2">' +
      '<div class="field"><label for="course-name">Họ và tên</label><input id="course-name" class="input" type="text" required placeholder="Nhập họ và tên" /></div>' +
      '<div class="field"><label for="course-email">Email</label><input id="course-email" class="input" type="email" required placeholder="you@example.com" /></div>' +
      '<div class="field"><label for="course-phone">Số điện thoại</label><input id="course-phone" class="input" type="tel" required placeholder="0909 123 456" /></div>' +
      '<div class="field"><label for="course-select">Tên khóa học</label><input id="course-select" class="input" type="text" value="' +
      course.title +
      '" readonly /></div>' +
      "</div>" +
      '<div class="field"><label for="course-note">Ghi chú</label><textarea id="course-note" class="textarea" placeholder="Bạn muốn học vào khung giờ nào?"></textarea></div>' +
      '<div class="form-actions"><button class="btn btn-primary" type="submit">Gửi đăng ký</button></div>' +
      "</form>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderTeachers() {
    var featured = teachers[2];

    return (
      "<main>" +
      pageHero(
        "Đội ngũ giảng viên",
        '<a href="index.html">Trang chủ</a><span>/</span><span>Giảng viên</span>',
        "Đội ngũ giảng viên của EduMax được chọn lọc để bảo đảm nội dung dễ hiểu, có tính thực chiến và luôn cập nhật theo xu hướng công nghệ."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Danh sách giảng viên", "6 giảng viên mẫu của EduMax", "", "") +
      '<div class="grid grid-3">' +
      teachers.map(cardTeacher).join("") +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt">' +
      '<div class="container">' +
      renderSectionHeading("Giảng viên nổi bật", "Một mentor tiêu biểu trong hệ thống khóa học", "", "") +
      '<div class="about-layout">' +
      '<div class="card reveal">' +
      '<div class="media media-pattern-indigo"><div><div class="media-label">Mentor nổi bật</div><div class="media-sub">Đồng hành cùng học viên trong các khóa JavaScript và project</div></div></div>' +
      "</div>" +
      '<div class="panel reveal">' +
      '<h3>' + featured.name + '</h3>' +
      '<p class="teacher-role">' + featured.role + '</p>' +
      '<p class="section-lead">' + featured.experience + '</p>' +
      '<ul class="check-list"><li>Thành thạo giảng dạy theo project-based learning</li><li>Hỗ trợ giải đáp bài tập rõ ràng, dễ hiểu</li><li>Cập nhật kiến thức mới theo xu hướng front-end</li><li>Đang phụ trách các khóa JavaScript và dự án web hoàn chỉnh</li></ul>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section">' +
      '<div class="container">' +
      renderSectionHeading("Lợi ích", "Vì sao nên học cùng giảng viên tại EduMax?", "Các điểm mạnh này giúp trang giảng viên không chỉ đẹp mà còn có chiều sâu thông tin.", "") +
      '<div class="grid grid-4">' +
      '<article class="card feature-card reveal"><span class="feature-icon">01</span><h3 class="card-title">Giải thích dễ hiểu</h3><p>Giảng viên luôn chia nhỏ vấn đề thành từng bước để người mới không bị quá tải.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">02</span><h3 class="card-title">Có bài tập thực tế</h3><p>Bài tập được thiết kế theo cách giúp bạn vừa học vừa làm quen với tư duy dự án.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">03</span><h3 class="card-title">Hỗ trợ học viên</h3><p>Nhận phản hồi và tư vấn lộ trình sau mỗi buổi học, giúp học viên không bị “kẹt”.</p></article>' +
      '<article class="card feature-card reveal"><span class="feature-icon">04</span><h3 class="card-title">Cập nhật kiến thức mới</h3><p>Nội dung khóa học được điều chỉnh để phù hợp với xu hướng phát triển của front-end.</p></article>' +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderBlog() {
    var perPage = 4;
    var totalPages = Math.max(1, Math.ceil(blogPosts.length / perPage));
    var currentPage = getPageQuery("page", 1, totalPages);
    var startIndex = (currentPage - 1) * perPage;
    var visiblePosts = blogPosts.slice(startIndex, startIndex + perPage);

    return (
      "<main>" +
      pageHero(
        "Blog / Chia sẻ kiến thức",
        '<a href="index.html">Trang chủ</a><span>/</span><span>Blog</span>',
        "Khu vực blog giúp website trông chuyên nghiệp hơn, đồng thời gợi ý thêm nội dung hữu ích về lập trình web và thiết kế giao diện."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="blog-layout">' +
      '<div class="stack">' +
      '<div class="filter-bar reveal" style="grid-template-columns: 1fr;">' +
      '<input class="input" type="search" placeholder="Tìm kiếm bài viết..." data-blog-search />' +
      '<div class="search-results" data-blog-results>' +
      visiblePosts.length +
      " bài viết</div>" +
      "</div>" +
      '<div class="grid grid-2">' +
      visiblePosts.map(cardBlog).join("") +
      "</div>" +
      '<div style="display:flex; justify-content:center; margin-top: 8px;">' +
      renderPagination(currentPage, totalPages, "blog.html") +
      "</div>" +
      "</div>" +
      '<aside class="sidebar">' +
      '<div class="panel reveal">' +
      "<h3>Bài viết mới nhất</h3>" +
      '<ul class="sidebar-list">' +
      blogPosts
        .slice(0, 3)
        .map(function (post) {
          return '<li><a href="' + blogDetailHref(post) + '"><strong>' + post.title + '</strong><small>' + post.date + "</small></a></li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="panel reveal">' +
      "<h3>Danh mục</h3>" +
      '<div class="tag-list">' +
      ["Lộ trình học", "Kiến thức nền tảng", "Thiết kế web", "Career", "Front-end"]
        .map(function (item) {
          return '<span class="tag">' + item + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      '<div class="panel reveal">' +
      "<h3>Tag phổ biến</h3>" +
      '<div class="tag-list">' +
      ["HTML", "CSS", "JavaScript", "Responsive", "Portfolio", "UI/UX"]
        .map(function (item) {
          return '<span class="tag">' + item + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</aside>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderBlogDetail() {
    var post = getBlogPostBySlug(getQueryParam("post"));
    var detail = post.detail || {};
    var coverTone = detail.cover || post.cover || "indigo";

    if (typeof document !== "undefined") {
      document.title = "EduMax | " + post.title;
      var metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }

    return (
      "<main>" +
      pageHero(
        "Chi tiết bài viết",
        '<a href="index.html">Trang chủ</a><span>/</span><a href="blog.html">Blog</a><span>/</span><span>Chi tiết</span>',
        "Trang chi tiết bài viết giúp làm đầy trải nghiệm nội dung và khiến website trông giống một blog thực sự."
      ) +
      '<section class="section">' +
      '<div class="container">' +
      '<div class="blog-layout">' +
      '<article class="article">' +
      '<div class="article-hero reveal">' +
      '<div class="article-meta"><span>' + post.date + "</span><span>•</span><span>" + post.author + "</span><span>•</span><span>" + post.category + "</span></div>" +
      "<h2>" + post.title + "</h2>" +
      '<div class="article-cover ' + coverTone + '"></div>' +
      "</div>" +
      '<div class="panel article-content reveal">' +
      "<p>" + detail.intro + "</p>" +
      renderBlogDetailSections(detail.sections || []) +
      (detail.highlight ? '<div class="highlight-box">' + detail.highlight + "</div>" : "") +
      (detail.closing ? "<p>" + detail.closing + "</p>" : "") +
      "</div>" +
      "</article>" +
      '<aside class="sidebar">' +
      '<div class="panel reveal">' +
      "<h3>Bài viết liên quan</h3>" +
      '<ul class="sidebar-list">' +
      blogPosts
        .filter(function (item) {
          return item.slug !== post.slug;
        })
        .slice(0, 3)
        .map(function (item) {
          return '<li><a href="' + blogDetailHref(item) + '"><strong>' + item.title + "</strong><small>" + item.category + "</small></a></li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="panel reveal">' +
      "<h3>Chủ đề phổ biến</h3>" +
      '<div class="tag-list">' +
      ["HTML", "CSS", "JavaScript", "Responsive", "Portfolio", "Career"]
        .map(function (item) {
          return '<span class="tag">' + item + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</aside>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  function renderContact() {
    return (
      "<main>" +
      pageHero(
        "Liên hệ với chúng tôi",
        '<a href="index.html">Trang chủ</a><span>/</span><span>Liên hệ</span>',
        "Đây là trang chuyển đổi hành động, cho phép người dùng gửi thông tin liên hệ hoặc đăng ký khóa học ngay từ giao diện tĩnh."
      ) +
      '<section class="section" id="contact-form">' +
      '<div class="container">' +
      '<div class="contact-layout">' +
      '<div class="stack">' +
      '<div class="panel reveal contact-card">' +
      '<h3>Thông tin liên hệ</h3>' +
      '<div class="contact-item"><span class="contact-icon">📍</span><div><strong>Địa chỉ</strong><small>123 Nguyễn Văn Linh, Đà Nẵng</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">☎</span><div><strong>Hotline</strong><small>0909 123 456</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">✉</span><div><strong>Email</strong><small>info@edumax.vn</small></div></div>' +
      '<div class="contact-item"><span class="contact-icon">⏰</span><div><strong>Giờ làm việc</strong><small>8:00 - 21:00</small></div></div>' +
      "</div>" +
      '<div class="map-frame reveal">' +
      '<iframe title="Bản đồ EduMax" src="https://www.google.com/maps?q=Da%20Nang&output=embed" loading="lazy"></iframe>' +
      "</div>" +
      "</div>" +
      '<div class="panel reveal">' +
      '<div class="stack">' +
      '<div>' +
      '<p class="section-eyebrow">Form liên hệ</p>' +
      '<h2 class="section-title">Gửi thông tin để EduMax phản hồi</h2>' +
      '<p class="section-lead">Bạn có thể hỏi về khóa học, lịch khai giảng hoặc yêu cầu tư vấn lộ trình học tập phù hợp.</p>' +
      "</div>" +
      '<form class="form-grid" novalidate data-validate-form data-success-message="Liên hệ thành công! Chúng tôi sẽ phản hồi sớm.">' +
      '<div class="form-grid cols-2">' +
      '<div class="field"><label for="contact-name">Họ tên</label><input id="contact-name" class="input" type="text" required placeholder="Nhập họ và tên" /></div>' +
      '<div class="field"><label for="contact-email">Email</label><input id="contact-email" class="input" type="email" required placeholder="you@example.com" /></div>' +
      '<div class="field"><label for="contact-phone">Số điện thoại</label><input id="contact-phone" class="input" type="tel" required placeholder="0909 123 456" /></div>' +
      '<div class="field"><label for="contact-subject">Chủ đề</label><input id="contact-subject" class="input" type="text" required placeholder="Hỏi về khóa học" /></div>' +
      "</div>" +
      '<div class="field"><label for="contact-message">Nội dung</label><textarea id="contact-message" class="textarea" required placeholder="Mô tả ngắn nhu cầu của bạn"></textarea></div>' +
      '<div class="form-actions"><button class="btn btn-primary" type="submit">Gửi liên hệ</button></div>' +
      "</form>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="section alt" id="register-course">' +
      '<div class="container">' +
      '<div class="panel reveal">' +
      '<div class="grid grid-2" style="align-items: start;">' +
      '<div>' +
      '<p class="section-eyebrow">Đăng ký khóa học</p>' +
      '<h2 class="section-title">Đăng ký nhanh qua form bên cạnh</h2>' +
      '<p class="section-lead">Dành cho học viên đã chọn được khóa học và muốn điền thêm thông tin để được liên hệ tư vấn.</p>' +
      "</div>" +
      '<form class="form-grid" novalidate data-validate-form data-success-message="Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.">' +
      '<div class="form-grid cols-2">' +
      '<div class="field"><label for="register-name">Họ tên</label><input id="register-name" class="input" type="text" required placeholder="Nhập họ và tên" /></div>' +
      '<div class="field"><label for="register-email">Email</label><input id="register-email" class="input" type="email" required placeholder="you@example.com" /></div>' +
      '<div class="field"><label for="register-phone">Số điện thoại</label><input id="register-phone" class="input" type="tel" required placeholder="0909 123 456" /></div>' +
      '<div class="field"><label for="register-course">Chọn khóa học</label><select id="register-course" class="select" required><option value="">-- Chọn khóa học --</option>' +
      courses
        .map(function (course) {
          return '<option>' + course.title + "</option>";
        })
        .join("") +
      "</select></div>" +
      "</div>" +
      '<div class="field"><label for="register-note">Ghi chú</label><textarea id="register-note" class="textarea" placeholder="Bạn muốn học khóa nào?"></textarea></div>' +
      '<div class="form-actions"><button class="btn btn-primary" type="submit">Gửi đăng ký</button></div>' +
      "</form>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>"
    );
  }

  var pageRenderers = {
    home: renderHome,
    about: renderAbout,
    courses: renderCourses,
    courseDetail: renderCourseDetail,
    teachers: renderTeachers,
    blog: renderBlog,
    blogDetail: renderBlogDetail,
    contact: renderContact,
  };

  ready(function () {
    var root = document.getElementById("site-root");
    if (!root) {
      return;
    }

    var page = document.body.dataset.page || "home";
    if (page === "course-detail") {
      page = "courseDetail";
    } else if (page === "blog-detail") {
      page = "blogDetail";
    }
    if (!pageRenderers[page]) {
      page = "home";
    }

    var navKey = page === "courseDetail" ? "courses" : page === "blogDetail" ? "blog" : page;
    root.innerHTML = header(navKey, page) + pageRenderers[page]() + footer();
  });
})();
