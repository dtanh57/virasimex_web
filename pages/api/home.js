export default function home(req, res) {
  res.status(200).json({
    dataCarouselBanner: [
      { img: "http://i.imgur.com/iiF8EWE.png" },
      { img: "https://i.imgur.com/AYPwacF.png" },
      { img: "https://pbs.twimg.com/media/EcMOndzWoAI0yxf.jpg" },
    ],
    dataBlockBanner: [
      {
        title: "Your reliable technology partner",
        content:
          "By connecting talent and passion we are able to solve any issues you may face using technology based solutions.",
        btnTitle: "",
        img: "https://rabiloo.com/images/homepage/about-block.svg",
        imgLeft: true,
        backgroundColor: "white",
        textColor: "black",
      },
      {
        title: "Software outsourcing service",
        content:
          "Are you dreaming up an idea for a technology-based solution and seeking a partner to collaborate with? Please send your requirements to Rabiloo; we will actualize your ideas by a platform or software with the interface and features as you require.",
        btnTitle: "View more",
        img: "https://rabiloo.com/images/homepage/sv/sv1.svg",
        imgLeft: false,
        backgroundColor: "#3CB4E7",
        textColor: "white",
      },
      {
        title: "Software packages",
        content:
          "Our software service has been completely optimized for two optional forms: SaaS (rental) or License (lifetime ownership). We can customize the software to meet your specific needs.",
        btnTitle: "View more",
        img: "https://rabiloo.com/images/homepage/sv/sv2.svg ",
        imgLeft: true,
        backgroundColor: "#25408F",
        textColor: "white",
      },
      {
        title: "IT solution consulting service",
        content:
          "abiloo experts instruct and develop a comprehensive strategy for the entire digitization. Moreover, we apply technology to business activities to satisfy your needs.",
        btnTitle: "View more",
        img: "https://rabiloo.com/images/homepage/sv/sv3.svg",
        imgLeft: false,
        backgroundColor: "#3CB4E7",
        textColor: "white",
      },
    ],
    dataBlockImages: [
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
      },
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
      },
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
      },
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
      },
      {
        img: "https://static.wixstatic.com/media/8949f6_d6704a6d683f4b4b83c6e027322f7a80~mv2.jpg",
      },
    ],
    dataCustomerQuote: [
      {
        name: "Duy Hieu Pham",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
      {
        name: "Duy Hieu Pham1",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
      {
        name: "Duy Hieu Pham2",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
      {
        name: "Duy Hieu Pham3",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
      {
        name: "Duy Hieu Pham4",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
      {
        name: "Duy Hieu Pham5",
        job: "Rabiloo CEO",
        description:
          "Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. Very good! I do like it. ",
      },
    ],
    dataPartners: [
      {
        img: "https://caron.vn/upload/image/cache/data/8898c9eed3e316bd4ff2-0e4-200-200.png",
      },
      {
        img: "https://caron.vn/upload/image/cache/data/LogoDAINAM-4c6-200-200.png",
      },
      {
        img: "https://caron.vn/upload/image/cache/data/mau-3-logo-02-f9a-200-200.png",
      },
      {
        img: "https://caron.vn/upload/image/cache/data/8898c9eed3e316bd4ff2-0e4-200-200.png",
      },
    ],
    dataFeaturedNews: [
      {
        img: "https://caron.vn/upload/image/cache/data/san-pham/HDD06799-e17-crop-400-225.jpg",
        title: "Bao nhiêu lâu thì nên bảo dưỡng xe một lần?",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
      {
        img: "https://caron.vn/upload/image/cache/data/Le-Khai-truong-1-bbd-crop-400-225.jpg",
        title: "Bao nhiêu lâu thì nên bảo dưỡng xe một lần?",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
      {
        img: "https://caron.vn/upload/image/cache/data/2700120651352424422739238574844722246047827n-Copy-104-crop-400-225.jpg",
        title: "Bao nhiêu lâu thì nên bảo dưỡng xe một lần?",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
    ],
    dataOutstandingServices: [
      {
        img: "https://caron.vn/upload/image/cache/data/san-pham/HDD06799-e17-crop-400-225.jpg",
        title: "Face detection",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
      {
        img: "https://caron.vn/upload/image/cache/data/Le-Khai-truong-1-bbd-crop-400-225.jpg",
        title: "Landing Page",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
      {
        img: "https://caron.vn/upload/image/cache/data/2700120651352424422739238574844722246047827n-Copy-104-crop-400-225.jpg",
        title: "Web admin",
        description:
          'Đây là yếu tố quan trọng hàng đầu để “bắt bệnh" và xử lý kịp thời cho xe. Khoảng thời gian bảo dưỡng thông thường là 3 đến 6 tháng, hoặc từ 3.000 – 5.000 km phụ thuộc vào mức độ sử dụng.',
      },
    ],
  });
}
